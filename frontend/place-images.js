// Place image mapping - Maps place names to relevant image URLs
// Using Unsplash and other reliable image sources

const placeImages = {
  // Popular Indian destinations
  'Red Fort': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
  'Taj Mahal': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
  'Golden Temple': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
  'Gateway of India': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Qutub Minar': 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
  'India Gate': 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
  'Lotus Temple': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Hawa Mahal': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Amber Fort': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'City Palace': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Jama Masjid': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
  'Charminar': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Meenakshi Temple': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
  'Victoria Memorial': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Mysore Palace': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Ajanta Caves': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
  'Ellora Caves': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
  'Khajuraho': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
  'Konark Sun Temple': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
  'Brihadeeswara Temple': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
  
  // Cities
  'Delhi': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
  'Mumbai': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Bangalore': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Kolkata': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Chennai': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Hyderabad': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Pune': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
  'Jaipur': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Udaipur': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Agra': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
  'Varanasi': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
  'Goa': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Kerala': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Ladakh': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  'Darjeeling': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  'Shimla': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  'Manali': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  'Rishikesh': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  'Ooty': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  'Mysore': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Pondicherry': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  'Tirupati': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
  
  // Default fallback
  'default': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
};

// Function to get image for a place
function getPlaceImage(placeName) {
  if (!placeName) return placeImages.default;
  
  // Try exact match first
  if (placeImages[placeName]) {
    return placeImages[placeName];
  }
  
  // Try case-insensitive match
  const lowerName = placeName.toLowerCase();
  for (const key in placeImages) {
    if (key.toLowerCase() === lowerName) {
      return placeImages[key];
    }
  }
  
  // Try partial match (for places like "Red Fort, Delhi")
  for (const key in placeImages) {
    if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
      return placeImages[key];
    }
  }
  
  return placeImages.default;
}

// Make it available globally
window.getPlaceImage = getPlaceImage;
window.placeImages = placeImages;

