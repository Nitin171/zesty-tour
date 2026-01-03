const axios = require('axios');
require('dotenv').config();

// In-memory cache to store fetched data temporarily
const placesCache = new Map();
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

/**
 * Fetch places from Foursquare Places API v3
 */
async function fetchPlacesFromFoursquare(query, category, location) {
  const apiKey = process.env.FOURSQUARE_API_KEY;

  if (!apiKey) {
    console.warn('Foursquare API key not configured');
    return null;
  }

  try {
    // Foursquare Places API v3 category IDs
    const categoryMap = {
      attractions: '16000', // Arts & Entertainment
      hotels: '19000', // Hotels
      restaurants: '13000' // Food & Drink
    };

    const categoryId = categoryMap[category] || '16000';
    const searchQuery = query || `${category} in ${location}`;
    const url = `https://api.foursquare.com/v3/places/search`;
    
    const response = await axios.get(url, {
      params: {
        query: searchQuery,
        categories: categoryId,
        near: location,
        limit: 10,
        sort: 'POPULARITY'
      },
      headers: {
        'Authorization': apiKey,
        'Accept': 'application/json'
      },
      timeout: 10000 // 10 second timeout
    });

    if (response.data && response.data.results) {
      return response.data.results.map(place => {
        // Get photo URL if available
        let imageUrl = getDefaultImageUrl(place.name, category);
        if (place.photos && place.photos.length > 0) {
          const photo = place.photos[0];
          imageUrl = `${photo.prefix}${photo.width || 400}x${photo.height || 300}${photo.suffix}`;
        }

        return {
          name: place.name,
          address: place.location?.formatted_address || 
                   `${place.location?.address || ''}, ${place.location?.locality || ''}, ${place.location?.region || ''}`.trim().replace(/^,\s*|,\s*$/g, '') || location,
          rating: place.rating ? place.rating.toFixed(1) : (Math.random() * 2 + 3.5).toFixed(1), // Fallback rating
          category: category,
          imageUrl: imageUrl,
          placeId: place.fsq_id,
          latitude: place.geocodes?.main?.latitude,
          longitude: place.geocodes?.main?.longitude,
          priceRange: place.price ? '₹'.repeat(Math.min(place.price, 4)) : '₹₹',
          description: place.categories?.[0]?.name || category,
          cuisine: category === 'restaurants' ? (place.categories?.[0]?.name || 'Local') : undefined,
          amenities: category === 'hotels' ? ['WiFi', 'Parking'] : undefined
        };
      });
    }
  } catch (error) {
    console.error('Foursquare API error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }

  return null;
}

/**
 * Fetch places from Google Places API (fallback)
 */
async function fetchPlacesFromGoogle(query, category, location) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.warn('Google Places API key not configured');
    return null;
  }

  try {
    const typeMap = {
      attractions: 'tourist_attraction',
      hotels: 'lodging',
      restaurants: 'restaurant'
    };

    const type = typeMap[category] || 'establishment';
    
    // First, search for places
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json`;
    const searchResponse = await axios.get(searchUrl, {
      params: {
        query: `${query || category} in ${location}`,
        type: type,
        key: apiKey
      }
    });

    if (searchResponse.data && searchResponse.data.results) {
      const places = [];
      
      // Get details for each place to get photos and ratings
      for (const place of searchResponse.data.results.slice(0, 10)) {
        try {
          const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json`;
          const detailsResponse = await axios.get(detailsUrl, {
            params: {
              place_id: place.place_id,
              fields: 'name,rating,formatted_address,photos,price_level,types',
              key: apiKey
            }
          });

          if (detailsResponse.data && detailsResponse.data.result) {
            const details = detailsResponse.data.result;
            const photoUrl = details.photos && details.photos[0]
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${details.photos[0].photo_reference}&key=${apiKey}`
              : getDefaultImageUrl(details.name, category);

            places.push({
              name: details.name,
              address: details.formatted_address || '',
              rating: details.rating ? details.rating.toFixed(1) : 'N/A',
              category: category,
              imageUrl: photoUrl,
              placeId: place.place_id,
              priceRange: details.price_level ? '₹'.repeat(details.price_level + 1) : '₹₹',
              description: details.types?.[0]?.replace(/_/g, ' ') || category
            });
          }
        } catch (err) {
          console.error('Error fetching place details:', err.message);
        }
      }

      return places;
    }
  } catch (error) {
    console.error('Google Places API error:', error.message);
  }

  return null;
}

/**
 * Get default image URL from Unsplash
 */
function getDefaultImageUrl(query, category) {
  const categoryMap = {
    attractions: 'tourist-attraction',
    hotels: 'hotel',
    restaurants: 'restaurant'
  };
  
  const searchTerm = categoryMap[category] || query || 'travel';
  return `https://source.unsplash.com/400x300/?${encodeURIComponent(searchTerm)}`;
}

/**
 * Main function to fetch places for a destination
 */
async function fetchPlacesForDestination(destination, category) {
  const cacheKey = `${destination}_${category}`;
  const cached = placesCache.get(cacheKey);
  
  // Check cache
  if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
    console.log(`Using cached data for ${cacheKey}`);
    return cached.data;
  }

  console.log(`Fetching ${category} for destination: ${destination}`);

  // Try Foursquare first (free tier)
  let places = null;
  if (process.env.FOURSQUARE_API_KEY) {
    places = await fetchPlacesFromFoursquare(null, category, destination);
  }
  
  // Fallback to Google Places if Foursquare fails or not configured
  if ((!places || places.length === 0) && process.env.GOOGLE_PLACES_API_KEY) {
    console.log(`Foursquare returned no results, trying Google Places...`);
    places = await fetchPlacesFromGoogle(null, category, destination);
  }

  // If still no results, return empty array
  if (!places || places.length === 0) {
    console.log(`No places found for ${destination} in category ${category} - API keys may not be configured or no results available`);
    places = [];
  }

  // Cache the results
  placesCache.set(cacheKey, {
    data: places,
    timestamp: Date.now()
  });

  return places;
}

/**
 * Fetch all data for a destination (attractions, hotels, restaurants)
 */
async function fetchDestinationData(destination) {
  if (!destination) {
    return {
      attractions: [],
      hotels: [],
      restaurants: [],
      experiences: []
    };
  }

  try {
    // Fetch all categories in parallel
    const [attractions, hotels, restaurants] = await Promise.all([
      fetchPlacesForDestination(destination, 'attractions'),
      fetchPlacesForDestination(destination, 'hotels'),
      fetchPlacesForDestination(destination, 'restaurants')
    ]);

    // Generate experiences based on attractions
    const experiences = attractions.slice(0, 3).map(attr => ({
      name: `Visit ${attr.name}`,
      price: '₹500',
      duration: '2 hours',
      imageUrl: attr.imageUrl,
      description: `Explore ${attr.name}`
    }));

    return {
      attractions: attractions || [],
      hotels: hotels || [],
      restaurants: restaurants || [],
      experiences: experiences || []
    };
  } catch (error) {
    console.error('Error fetching destination data:', error);
    return {
      attractions: [],
      hotels: [],
      restaurants: [],
      experiences: [],
      error: error.message
    };
  }
}

/**
 * Clear cache (useful for testing)
 */
function clearCache() {
  placesCache.clear();
  console.log('Places cache cleared');
}

module.exports = {
  fetchDestinationData,
  fetchPlacesForDestination,
  clearCache
};

