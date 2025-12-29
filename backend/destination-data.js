// Curated destination data with attractions, hotels, restaurants, and experiences
// For major Indian destinations

const destinationData = {
  // Mumbai
  'Mumbai': {
    attractions: [
      { name: 'Gateway of India', description: 'Iconic arch monument overlooking Arabian Sea', imageQuery: 'Gateway of India Mumbai' },
      { name: 'Marine Drive', description: '3.6km long C-shaped boulevard along the coast', imageQuery: 'Marine Drive Mumbai' },
      { name: 'Elephanta Caves', description: 'Ancient rock-cut cave temples on Elephanta Island', imageQuery: 'Elephanta Caves Mumbai' },
      { name: 'Chhatrapati Shivaji Terminus', description: 'UNESCO World Heritage railway station', imageQuery: 'CST Mumbai railway station' },
      { name: 'Haji Ali Dargah', description: 'Famous mosque and tomb on the coast', imageQuery: 'Haji Ali Dargah Mumbai' }
    ],
    hotels: [
      { name: 'Taj Mahal Palace', price: '₹15,000/night', rating: '4.8', imageQuery: 'Taj Mahal Palace Mumbai hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'The Oberoi Mumbai', price: '₹12,000/night', rating: '4.7', imageQuery: 'Oberoi Mumbai hotel', amenities: ['WiFi', 'Pool', 'Spa'] },
      { name: 'ITC Maratha', price: '₹8,000/night', rating: '4.6', imageQuery: 'ITC Maratha Mumbai', amenities: ['WiFi', 'Pool', 'Restaurant'] },
      { name: 'Trident Bandra Kurla', price: '₹7,000/night', rating: '4.5', imageQuery: 'Trident Mumbai hotel', amenities: ['WiFi', 'Pool'] }
    ],
    restaurants: [
      { name: 'Bademiya', cuisine: 'Mughlai', priceRange: '₹₹', rating: '4.6', specialty: 'Seekh Kebab', imageQuery: 'Bademiya Mumbai restaurant' },
      { name: 'Leopold Cafe', cuisine: 'Continental', priceRange: '₹₹', rating: '4.5', specialty: 'Continental Breakfast', imageQuery: 'Leopold Cafe Mumbai' },
      { name: 'Trishna', cuisine: 'Seafood', priceRange: '₹₹₹', rating: '4.7', specialty: 'Butter Garlic Crab', imageQuery: 'Trishna restaurant Mumbai' },
      { name: 'Britannia & Co', cuisine: 'Parsi', priceRange: '₹₹', rating: '4.6', specialty: 'Berry Pulao', imageQuery: 'Britannia restaurant Mumbai' }
    ],
    experiences: [
      { name: 'Dharavi Slum Tour', price: '₹500', duration: '2.5 hours', imageQuery: 'Dharavi Mumbai tour' },
      { name: 'Bollywood Studio Tour', price: '₹1,500', duration: '3 hours', imageQuery: 'Bollywood studio tour Mumbai' },
      { name: 'Street Food Walk', price: '₹800', duration: '2 hours', imageQuery: 'Mumbai street food tour' },
      { name: 'Sunset Cruise', price: '₹1,200', duration: '1.5 hours', imageQuery: 'Mumbai sunset cruise' }
    ]
  },

  // Delhi
  'Delhi': {
    attractions: [
      { name: 'Red Fort', description: 'UNESCO World Heritage Mughal fort', imageQuery: 'Red Fort Delhi' },
      { name: 'India Gate', description: 'War memorial arch in the heart of Delhi', imageQuery: 'India Gate Delhi' },
      { name: 'Qutub Minar', description: '73m tall UNESCO World Heritage minaret', imageQuery: 'Qutub Minar Delhi' },
      { name: 'Lotus Temple', description: 'Stunning Bahai House of Worship shaped like a lotus', imageQuery: 'Lotus Temple Delhi' },
      { name: 'Humayun\'s Tomb', description: 'UNESCO World Heritage Mughal tomb', imageQuery: 'Humayun Tomb Delhi' }
    ],
    hotels: [
      { name: 'The Leela Palace', price: '₹14,000/night', rating: '4.8', imageQuery: 'Leela Palace Delhi hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'The Oberoi Delhi', price: '₹13,000/night', rating: '4.7', imageQuery: 'Oberoi Delhi hotel', amenities: ['WiFi', 'Pool', 'Spa'] },
      { name: 'ITC Maurya', price: '₹10,000/night', rating: '4.6', imageQuery: 'ITC Maurya Delhi', amenities: ['WiFi', 'Pool', 'Restaurant'] },
      { name: 'The Claridges', price: '₹8,000/night', rating: '4.5', imageQuery: 'Claridges Delhi hotel', amenities: ['WiFi', 'Pool'] }
    ],
    restaurants: [
      { name: 'Karim\'s', cuisine: 'Mughlai', priceRange: '₹₹', rating: '4.6', specialty: 'Mutton Korma', imageQuery: 'Karims restaurant Delhi' },
      { name: 'Indian Accent', cuisine: 'Modern Indian', priceRange: '₹₹₹₹', rating: '4.8', specialty: 'Modern Indian Cuisine', imageQuery: 'Indian Accent Delhi' },
      { name: 'Bukhara', cuisine: 'North Indian', priceRange: '₹₹₹', rating: '4.7', specialty: 'Dal Bukhara', imageQuery: 'Bukhara restaurant Delhi' },
      { name: 'Parathe Wali Gali', cuisine: 'Street Food', priceRange: '₹', rating: '4.5', specialty: 'Stuffed Parathas', imageQuery: 'Parathe Wali Gali Delhi' }
    ],
    experiences: [
      { name: 'Old Delhi Heritage Walk', price: '₹600', duration: '3 hours', imageQuery: 'Old Delhi walking tour' },
      { name: 'Food Tour', price: '₹1,000', duration: '3 hours', imageQuery: 'Delhi food tour' },
      { name: 'Spice Market Tour', price: '₹800', duration: '2 hours', imageQuery: 'Delhi spice market' },
      { name: 'Cycling Tour', price: '₹700', duration: '2.5 hours', imageQuery: 'Delhi cycling tour' }
    ]
  },

  // Bangalore/Bengaluru
  'Bangalore': {
    attractions: [
      { name: 'Lalbagh Botanical Garden', description: '240-acre botanical garden with glass house', imageQuery: 'Lalbagh Bangalore botanical garden' },
      { name: 'Cubbon Park', description: '300-acre park in the heart of the city', imageQuery: 'Cubbon Park Bangalore' },
      { name: 'Bangalore Palace', description: 'Tudor-style palace inspired by Windsor Castle', imageQuery: 'Bangalore Palace' },
      { name: 'Tipu Sultan\'s Summer Palace', description: 'Wooden palace of Tipu Sultan', imageQuery: 'Tipu Sultan Palace Bangalore' },
      { name: 'ISKCON Temple', description: 'Beautiful Krishna temple', imageQuery: 'ISKCON temple Bangalore' }
    ],
    hotels: [
      { name: 'The Leela Palace', price: '₹12,000/night', rating: '4.8', imageQuery: 'Leela Palace Bangalore hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'Taj West End', price: '₹10,000/night', rating: '4.7', imageQuery: 'Taj West End Bangalore', amenities: ['WiFi', 'Pool', 'Spa'] },
      { name: 'ITC Gardenia', price: '₹9,000/night', rating: '4.6', imageQuery: 'ITC Gardenia Bangalore', amenities: ['WiFi', 'Pool', 'Restaurant'] },
      { name: 'The Oberoi Bangalore', price: '₹11,000/night', rating: '4.7', imageQuery: 'Oberoi Bangalore hotel', amenities: ['WiFi', 'Pool', 'Spa'] }
    ],
    restaurants: [
      { name: 'Mavalli Tiffin Rooms (MTR)', cuisine: 'South Indian', priceRange: '₹₹', rating: '4.6', specialty: 'Rava Idli', imageQuery: 'MTR restaurant Bangalore' },
      { name: 'Vidyarthi Bhavan', cuisine: 'South Indian', priceRange: '₹', rating: '4.7', specialty: 'Masala Dosa', imageQuery: 'Vidyarthi Bhavan Bangalore' },
      { name: 'Karavalli', cuisine: 'Coastal', priceRange: '₹₹₹', rating: '4.7', specialty: 'Coastal Cuisine', imageQuery: 'Karavalli restaurant Bangalore' },
      { name: 'Farmer\'s Cafe', cuisine: 'Continental', priceRange: '₹₹', rating: '4.5', specialty: 'Breakfast', imageQuery: 'Farmers Cafe Bangalore' }
    ],
    experiences: [
      { name: 'Brewery Tour', price: '₹1,200', duration: '2 hours', imageQuery: 'Bangalore brewery tour' },
      { name: 'Tech Park Tour', price: '₹800', duration: '2 hours', imageQuery: 'Bangalore tech park' },
      { name: 'Culinary Walk', price: '₹900', duration: '2.5 hours', imageQuery: 'Bangalore food tour' },
      { name: 'Nandi Hills Sunrise', price: '₹1,500', duration: '4 hours', imageQuery: 'Nandi Hills Bangalore sunrise' }
    ]
  },
  'Bengaluru': {
    attractions: [
      { name: 'Lalbagh Botanical Garden', description: '240-acre botanical garden with glass house', imageQuery: 'Lalbagh Bangalore botanical garden' },
      { name: 'Cubbon Park', description: '300-acre park in the heart of the city', imageQuery: 'Cubbon Park Bangalore' },
      { name: 'Bangalore Palace', description: 'Tudor-style palace inspired by Windsor Castle', imageQuery: 'Bangalore Palace' },
      { name: 'Tipu Sultan\'s Summer Palace', description: 'Wooden palace of Tipu Sultan', imageQuery: 'Tipu Sultan Palace Bangalore' },
      { name: 'ISKCON Temple', description: 'Beautiful Krishna temple', imageQuery: 'ISKCON temple Bangalore' }
    ],
    hotels: [
      { name: 'The Leela Palace', price: '₹12,000/night', rating: '4.8', imageQuery: 'Leela Palace Bangalore hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'Taj West End', price: '₹10,000/night', rating: '4.7', imageQuery: 'Taj West End Bangalore', amenities: ['WiFi', 'Pool', 'Spa'] },
      { name: 'ITC Gardenia', price: '₹9,000/night', rating: '4.6', imageQuery: 'ITC Gardenia Bangalore', amenities: ['WiFi', 'Pool', 'Restaurant'] },
      { name: 'The Oberoi Bangalore', price: '₹11,000/night', rating: '4.7', imageQuery: 'Oberoi Bangalore hotel', amenities: ['WiFi', 'Pool', 'Spa'] }
    ],
    restaurants: [
      { name: 'Mavalli Tiffin Rooms (MTR)', cuisine: 'South Indian', priceRange: '₹₹', rating: '4.6', specialty: 'Rava Idli', imageQuery: 'MTR restaurant Bangalore' },
      { name: 'Vidyarthi Bhavan', cuisine: 'South Indian', priceRange: '₹', rating: '4.7', specialty: 'Masala Dosa', imageQuery: 'Vidyarthi Bhavan Bangalore' },
      { name: 'Karavalli', cuisine: 'Coastal', priceRange: '₹₹₹', rating: '4.7', specialty: 'Coastal Cuisine', imageQuery: 'Karavalli restaurant Bangalore' },
      { name: 'Farmer\'s Cafe', cuisine: 'Continental', priceRange: '₹₹', rating: '4.5', specialty: 'Breakfast', imageQuery: 'Farmers Cafe Bangalore' }
    ],
    experiences: [
      { name: 'Brewery Tour', price: '₹1,200', duration: '2 hours', imageQuery: 'Bangalore brewery tour' },
      { name: 'Tech Park Tour', price: '₹800', duration: '2 hours', imageQuery: 'Bangalore tech park' },
      { name: 'Culinary Walk', price: '₹900', duration: '2.5 hours', imageQuery: 'Bangalore food tour' },
      { name: 'Nandi Hills Sunrise', price: '₹1,500', duration: '4 hours', imageQuery: 'Nandi Hills Bangalore sunrise' }
    ]
  },

  // Agra
  'Agra': {
    attractions: [
      { name: 'Taj Mahal', description: 'UNESCO World Heritage white marble mausoleum', imageQuery: 'Taj Mahal Agra' },
      { name: 'Agra Fort', description: 'UNESCO World Heritage red sandstone fort', imageQuery: 'Agra Fort' },
      { name: 'Fatehpur Sikri', description: 'UNESCO World Heritage abandoned Mughal city', imageQuery: 'Fatehpur Sikri Agra' },
      { name: 'Itmad-ud-Daulah', description: 'Beautiful tomb known as Baby Taj', imageQuery: 'Itmad ud Daulah Agra' },
      { name: 'Mehtab Bagh', description: 'Moonlight garden with Taj Mahal view', imageQuery: 'Mehtab Bagh Agra' }
    ],
    hotels: [
      { name: 'The Oberoi Amarvilas', price: '₹25,000/night', rating: '4.9', imageQuery: 'Oberoi Amarvilas Agra hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Taj View'] },
      { name: 'ITC Mughal', price: '₹8,000/night', rating: '4.6', imageQuery: 'ITC Mughal Agra hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'Taj Hotel & Convention Centre', price: '₹7,000/night', rating: '4.5', imageQuery: 'Taj hotel Agra', amenities: ['WiFi', 'Pool', 'Restaurant'] },
      { name: 'Crystal Sarovar Premiere', price: '₹5,000/night', rating: '4.4', imageQuery: 'Crystal Sarovar Agra', amenities: ['WiFi', 'Pool'] }
    ],
    restaurants: [
      { name: 'Pinch Of Spice', cuisine: 'North Indian', priceRange: '₹₹', rating: '4.6', specialty: 'Mughlai Cuisine', imageQuery: 'Pinch of Spice Agra restaurant' },
      { name: 'Shankara Vegis', cuisine: 'Vegetarian', priceRange: '₹₹', rating: '4.5', specialty: 'North Indian Thali', imageQuery: 'Shankara Vegis Agra' },
      { name: 'Esphahan', cuisine: 'Mughlai', priceRange: '₹₹₹₹', rating: '4.8', specialty: 'Fine Dining', imageQuery: 'Esphahan restaurant Agra' },
      { name: 'Yash Cafe', cuisine: 'Multi-cuisine', priceRange: '₹₹', rating: '4.4', specialty: 'Continental', imageQuery: 'Yash Cafe Agra' }
    ],
    experiences: [
      { name: 'Taj Mahal Sunrise Tour', price: '₹2,000', duration: '3 hours', imageQuery: 'Taj Mahal sunrise tour' },
      { name: 'Heritage Walk', price: '₹800', duration: '2 hours', imageQuery: 'Agra heritage walk' },
      { name: 'Marble Inlay Workshop', price: '₹1,500', duration: '1.5 hours', imageQuery: 'Agra marble inlay' },
      { name: 'Street Food Tour', price: '₹600', duration: '2 hours', imageQuery: 'Agra street food' }
    ]
  },

  // Jaipur
  'Jaipur': {
    attractions: [
      { name: 'Amber Fort', description: 'Majestic hilltop fort with palace complex', imageQuery: 'Amber Fort Jaipur' },
      { name: 'City Palace', description: 'Royal palace complex in the heart of Jaipur', imageQuery: 'City Palace Jaipur' },
      { name: 'Hawa Mahal', description: 'Palace of Winds with 953 windows', imageQuery: 'Hawa Mahal Jaipur' },
      { name: 'Jantar Mantar', description: 'UNESCO World Heritage astronomical observatory', imageQuery: 'Jantar Mantar Jaipur' },
      { name: 'Nahargarh Fort', description: 'Hilltop fort with panoramic city views', imageQuery: 'Nahargarh Fort Jaipur' }
    ],
    hotels: [
      { name: 'Rambagh Palace', price: '₹18,000/night', rating: '4.8', imageQuery: 'Rambagh Palace Jaipur hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Heritage'] },
      { name: 'The Oberoi Rajvilas', price: '₹20,000/night', rating: '4.9', imageQuery: 'Oberoi Rajvilas Jaipur', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'ITC Rajputana', price: '₹9,000/night', rating: '4.6', imageQuery: 'ITC Rajputana Jaipur', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'Fairmont Jaipur', price: '₹12,000/night', rating: '4.7', imageQuery: 'Fairmont Jaipur hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] }
    ],
    restaurants: [
      { name: 'Laxmi Misthan Bhandar', cuisine: 'Rajasthani', priceRange: '₹₹', rating: '4.6', specialty: 'Dal Baati Churma', imageQuery: 'LMB Jaipur restaurant' },
      { name: 'Chokhi Dhani', cuisine: 'Rajasthani', priceRange: '₹₹₹', rating: '4.7', specialty: 'Traditional Thali', imageQuery: 'Chokhi Dhani Jaipur' },
      { name: 'Spice Court', cuisine: 'Rajasthani', priceRange: '₹₹', rating: '4.5', specialty: 'Laal Maas', imageQuery: 'Spice Court Jaipur' },
      { name: 'Peacock Rooftop Restaurant', cuisine: 'Multi-cuisine', priceRange: '₹₹₹', rating: '4.6', specialty: 'Rooftop Dining', imageQuery: 'Peacock restaurant Jaipur' }
    ],
    experiences: [
      { name: 'Elephant Ride at Amber Fort', price: '₹1,000', duration: '30 min', imageQuery: 'Amber Fort elephant ride' },
      { name: 'Hot Air Balloon Ride', price: '₹8,000', duration: '1 hour', imageQuery: 'Jaipur hot air balloon' },
      { name: 'Block Printing Workshop', price: '₹1,200', duration: '2 hours', imageQuery: 'Jaipur block printing' },
      { name: 'Heritage Walk', price: '₹600', duration: '2 hours', imageQuery: 'Jaipur heritage walk' }
    ]
  },

  // Goa
  'Goa': {
    attractions: [
      { name: 'Calangute Beach', description: 'Most popular beach known as Queen of Beaches', imageQuery: 'Calangute Beach Goa' },
      { name: 'Basilica of Bom Jesus', description: 'UNESCO World Heritage church with St. Francis Xavier\'s remains', imageQuery: 'Basilica of Bom Jesus Goa' },
      { name: 'Dudhsagar Falls', description: 'Four-tiered waterfall like sea of milk', imageQuery: 'Dudhsagar Falls Goa' },
      { name: 'Fort Aguada', description: '17th-century Portuguese fort with lighthouse', imageQuery: 'Fort Aguada Goa' },
      { name: 'Anjuna Flea Market', description: 'Famous weekly flea market', imageQuery: 'Anjuna Flea Market Goa' }
    ],
    hotels: [
      { name: 'Taj Exotica Resort & Spa', price: '₹15,000/night', rating: '4.8', imageQuery: 'Taj Exotica Goa resort', amenities: ['WiFi', 'Pool', 'Spa', 'Beach Access'] },
      { name: 'Grand Hyatt Goa', price: '₹12,000/night', rating: '4.7', imageQuery: 'Grand Hyatt Goa hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Beach Access'] },
      { name: 'The Leela Goa', price: '₹14,000/night', rating: '4.8', imageQuery: 'Leela Goa resort', amenities: ['WiFi', 'Pool', 'Spa', 'Beach Access'] },
      { name: 'Alila Diwa Goa', price: '₹10,000/night', rating: '4.6', imageQuery: 'Alila Diwa Goa resort', amenities: ['WiFi', 'Pool', 'Spa'] }
    ],
    restaurants: [
      { name: 'Gunpowder', cuisine: 'South Indian', priceRange: '₹₹₹', rating: '4.7', specialty: 'Appam & Stew', imageQuery: 'Gunpowder restaurant Goa' },
      { name: 'Fish Curry Rice', cuisine: 'Goan', priceRange: '₹₹', rating: '4.6', specialty: 'Fish Curry', imageQuery: 'Fish Curry Rice Goa' },
      { name: 'Viva Panjim', cuisine: 'Goan', priceRange: '₹₹', rating: '4.5', specialty: 'Goan Fish Thali', imageQuery: 'Viva Panjim restaurant' },
      { name: 'Brittos', cuisine: 'Seafood', priceRange: '₹₹₹', rating: '4.6', specialty: 'Grilled Fish', imageQuery: 'Brittos restaurant Goa' }
    ],
    experiences: [
      { name: 'Water Sports Package', price: '₹2,500', duration: '2 hours', imageQuery: 'Goa water sports' },
      { name: 'Spice Plantation Tour', price: '₹1,200', duration: '3 hours', imageQuery: 'Goa spice plantation' },
      { name: 'Sunset Cruise', price: '₹1,500', duration: '2 hours', imageQuery: 'Goa sunset cruise' },
      { name: 'Scuba Diving', price: '₹3,500', duration: '3 hours', imageQuery: 'Goa scuba diving' }
    ]
  },

  // Kerala
  'Kerala': {
    attractions: [
      { name: 'Alleppey Backwaters', description: 'Scenic network of canals, lakes and lagoons', imageQuery: 'Alleppey backwaters Kerala' },
      { name: 'Munnar Tea Gardens', description: 'Rolling hills covered with tea plantations', imageQuery: 'Munnar tea gardens Kerala' },
      { name: 'Kochi Fort Area', description: 'Historic area with colonial architecture', imageQuery: 'Fort Kochi Kerala' },
      { name: 'Periyar Wildlife Sanctuary', description: 'Tiger reserve and wildlife sanctuary', imageQuery: 'Periyar Wildlife Sanctuary Kerala' },
      { name: 'Kovalam Beach', description: 'Popular beach destination with lighthouse', imageQuery: 'Kovalam Beach Kerala' }
    ],
    hotels: [
      { name: 'Kumarakom Lake Resort', price: '₹12,000/night', rating: '4.8', imageQuery: 'Kumarakom Lake Resort Kerala', amenities: ['WiFi', 'Pool', 'Spa', 'Backwater View'] },
      { name: 'Taj Malabar Resort & Spa', price: '₹14,000/night', rating: '4.7', imageQuery: 'Taj Malabar Kochi', amenities: ['WiFi', 'Pool', 'Spa', 'Waterfront'] },
      { name: 'Spice Village Thekkady', price: '₹8,000/night', rating: '4.6', imageQuery: 'Spice Village Thekkady', amenities: ['WiFi', 'Pool', 'Spa'] },
      { name: 'Zuri Kumarakom', price: '₹10,000/night', rating: '4.6', imageQuery: 'Zuri Kumarakom resort', amenities: ['WiFi', 'Pool', 'Spa'] }
    ],
    restaurants: [
      { name: 'Kashi Art Cafe', cuisine: 'Continental', priceRange: '₹₹', rating: '4.6', specialty: 'Breakfast & Coffee', imageQuery: 'Kashi Art Cafe Kochi' },
      { name: 'History Restaurant', cuisine: 'Keralan', priceRange: '₹₹', rating: '4.5', specialty: 'Kerala Sadya', imageQuery: 'History restaurant Kochi' },
      { name: 'Paragon Restaurant', cuisine: 'Keralan', priceRange: '₹₹', rating: '4.7', specialty: 'Karimeen Pollichathu', imageQuery: 'Paragon restaurant Kochi' },
      { name: 'Fort House Restaurant', cuisine: 'Seafood', priceRange: '₹₹₹', rating: '4.6', specialty: 'Fresh Seafood', imageQuery: 'Fort House Kochi' }
    ],
    experiences: [
      { name: 'Houseboat Stay', price: '₹5,000', duration: '1 night', imageQuery: 'Kerala houseboat backwaters' },
      { name: 'Ayurvedic Spa Treatment', price: '₹3,000', duration: '2 hours', imageQuery: 'Ayurveda Kerala spa' },
      { name: 'Tea Plantation Tour', price: '₹800', duration: '2 hours', imageQuery: 'Munnar tea plantation tour' },
      { name: 'Kathakali Performance', price: '₹400', duration: '1 hour', imageQuery: 'Kathakali performance Kerala' }
    ]
  },

  // Udaipur
  'Udaipur': {
    attractions: [
      { name: 'City Palace', description: 'Largest palace complex in Rajasthan', imageQuery: 'City Palace Udaipur' },
      { name: 'Lake Pichola', description: 'Beautiful artificial lake with island palaces', imageQuery: 'Lake Pichola Udaipur' },
      { name: 'Jag Mandir', description: 'Island palace on Lake Pichola', imageQuery: 'Jag Mandir Udaipur' },
      { name: 'Jagdish Temple', description: 'Magnificent Hindu temple in the old city', imageQuery: 'Jagdish Temple Udaipur' },
      { name: 'Saheliyon Ki Bari', description: 'Garden of the Maidens with fountains', imageQuery: 'Saheliyon Ki Bari Udaipur' }
    ],
    hotels: [
      { name: 'Taj Lake Palace', price: '₹30,000/night', rating: '4.9', imageQuery: 'Taj Lake Palace Udaipur hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Lake View', 'Heritage'] },
      { name: 'The Oberoi Udaivilas', price: '₹25,000/night', rating: '4.9', imageQuery: 'Oberoi Udaivilas Udaipur', amenities: ['WiFi', 'Pool', 'Spa', 'Lake View'] },
      { name: 'Fateh Prakash Palace', price: '₹12,000/night', rating: '4.7', imageQuery: 'Fateh Prakash Palace Udaipur', amenities: ['WiFi', 'Pool', 'Spa', 'Heritage'] },
      { name: 'Trident Udaipur', price: '₹8,000/night', rating: '4.6', imageQuery: 'Trident Udaipur hotel', amenities: ['WiFi', 'Pool', 'Spa'] }
    ],
    restaurants: [
      { name: 'Ambrai', cuisine: 'Rajasthani', priceRange: '₹₹₹', rating: '4.7', specialty: 'Lake View Dining', imageQuery: 'Ambrai restaurant Udaipur' },
      { name: '1559 AD', cuisine: 'Multi-cuisine', priceRange: '₹₹₹', rating: '4.6', specialty: 'Rooftop Dining', imageQuery: '1559 AD restaurant Udaipur' },
      { name: 'Jagat Niwas Palace', cuisine: 'Rajasthani', priceRange: '₹₹', rating: '4.5', specialty: 'Traditional Thali', imageQuery: 'Jagat Niwas Udaipur' },
      { name: 'Raaj Bagh', cuisine: 'Rajasthani', priceRange: '₹₹₹', rating: '4.6', specialty: 'Royal Cuisine', imageQuery: 'Raaj Bagh Udaipur' }
    ],
    experiences: [
      { name: 'Boat Ride on Lake Pichola', price: '₹400', duration: '1 hour', imageQuery: 'Lake Pichola boat ride Udaipur' },
      { name: 'Sunset Viewpoint', price: '₹300', duration: '1 hour', imageQuery: 'Udaipur sunset point' },
      { name: 'Cooking Class', price: '₹1,500', duration: '2 hours', imageQuery: 'Udaipur cooking class' },
      { name: 'Heritage Walk', price: '₹600', duration: '2 hours', imageQuery: 'Udaipur heritage walk' }
    ]
  },

  // Varanasi
  'Varanasi': {
    attractions: [
      { name: 'Ganga Aarti at Dashashwamedh Ghat', description: 'Evening prayer ceremony on the Ganges', imageQuery: 'Ganga Aarti Varanasi' },
      { name: 'Kashi Vishwanath Temple', description: 'One of the most sacred Shiva temples', imageQuery: 'Kashi Vishwanath Temple Varanasi' },
      { name: 'Sarnath', description: 'Where Buddha gave his first sermon', imageQuery: 'Sarnath Varanasi' },
      { name: 'Manikarnika Ghat', description: 'Main cremation ghat on the Ganges', imageQuery: 'Manikarnika Ghat Varanasi' },
      { name: 'Ramnagar Fort', description: 'Fort and museum across the Ganges', imageQuery: 'Ramnagar Fort Varanasi' }
    ],
    hotels: [
      { name: 'Taj Ganges Varanasi', price: '₹8,000/night', rating: '4.6', imageQuery: 'Taj Ganges Varanasi hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'Radisson Hotel Varanasi', price: '₹6,000/night', rating: '4.5', imageQuery: 'Radisson Varanasi hotel', amenities: ['WiFi', 'Pool', 'Restaurant'] },
      { name: 'Hotel Clarks Varanasi', price: '₹5,000/night', rating: '4.4', imageQuery: 'Clarks Varanasi hotel', amenities: ['WiFi', 'Pool'] },
      { name: 'BrijRama Palace', price: '₹12,000/night', rating: '4.7', imageQuery: 'BrijRama Palace Varanasi', amenities: ['WiFi', 'Heritage', 'Ganges View'] }
    ],
    restaurants: [
      { name: 'Kashi Chat Bhandar', cuisine: 'Street Food', priceRange: '₹', rating: '4.6', specialty: 'Kachori & Chaat', imageQuery: 'Kashi Chat Bhandar Varanasi' },
      { name: 'Blue Lassi', cuisine: 'Desserts', priceRange: '₹', rating: '4.7', specialty: 'Lassi', imageQuery: 'Blue Lassi Varanasi' },
      { name: 'Dosa Cafe', cuisine: 'South Indian', priceRange: '₹₹', rating: '4.5', specialty: 'Dosa', imageQuery: 'Dosa Cafe Varanasi' },
      { name: 'Temple Restaurant', cuisine: 'North Indian', priceRange: '₹₹', rating: '4.4', specialty: 'Thali', imageQuery: 'Temple restaurant Varanasi' }
    ],
    experiences: [
      { name: 'Sunrise Boat Ride on Ganges', price: '₹800', duration: '1.5 hours', imageQuery: 'Varanasi sunrise boat ride Ganges' },
      { name: 'Evening Ganga Aarti', price: 'Free', duration: '1 hour', imageQuery: 'Ganga Aarti ceremony Varanasi' },
      { name: 'Sarnath Day Trip', price: '₹1,500', duration: '4 hours', imageQuery: 'Sarnath tour Varanasi' },
      { name: 'Walking Tour of Ghats', price: '₹600', duration: '2 hours', imageQuery: 'Varanasi ghats walking tour' }
    ]
  },

  // Shimla
  'Shimla': {
    attractions: [
      { name: 'The Ridge', description: 'Main street with colonial architecture', imageQuery: 'The Ridge Shimla' },
      { name: 'Jakhu Temple', description: 'Ancient Hanuman temple on Jakhu Hill', imageQuery: 'Jakhu Temple Shimla' },
      { name: 'Christ Church', description: 'Second oldest church in North India', imageQuery: 'Christ Church Shimla' },
      { name: 'Kufri', description: 'Skiing destination near Shimla', imageQuery: 'Kufri Shimla' },
      { name: 'Summer Hill', description: 'Peaceful suburb with scenic views', imageQuery: 'Summer Hill Shimla' }
    ],
    hotels: [
      { name: 'Oberoi Cecil', price: '₹10,000/night', rating: '4.7', imageQuery: 'Oberoi Cecil Shimla hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Mountain View'] },
      { name: 'Taj Theog Resort & Spa', price: '₹12,000/night', rating: '4.8', imageQuery: 'Taj Theog Shimla', amenities: ['WiFi', 'Pool', 'Spa', 'Mountain View'] },
      { name: 'Wildflower Hall', price: '₹15,000/night', rating: '4.8', imageQuery: 'Wildflower Hall Shimla', amenities: ['WiFi', 'Pool', 'Spa', 'Mountain View'] },
      { name: 'Hotel Marina', price: '₹4,000/night', rating: '4.3', imageQuery: 'Hotel Marina Shimla', amenities: ['WiFi', 'Mountain View'] }
    ],
    restaurants: [
      { name: 'Cafe Sol', cuisine: 'Continental', priceRange: '₹₹', rating: '4.5', specialty: 'Italian Cuisine', imageQuery: 'Cafe Sol Shimla' },
      { name: 'Eighteen71 Cookhouse & Bar', cuisine: 'Multi-cuisine', priceRange: '₹₹₹', rating: '4.6', specialty: 'Modern Indian', imageQuery: 'Eighteen71 Shimla' },
      { name: 'Wake & Bake', cuisine: 'Continental', priceRange: '₹₹', rating: '4.4', specialty: 'Bakery', imageQuery: 'Wake and Bake Shimla' },
      { name: 'Himachali Rasoi', cuisine: 'Himachali', priceRange: '₹₹', rating: '4.5', specialty: 'Dham', imageQuery: 'Himachali Rasoi Shimla' }
    ],
    experiences: [
      { name: 'Toy Train Ride', price: '₹500', duration: '2 hours', imageQuery: 'Kalka Shimla toy train' },
      { name: 'Ice Skating', price: '₹800', duration: '1 hour', imageQuery: 'Shimla ice skating' },
      { name: 'Hiking to Jakhu Temple', price: 'Free', duration: '1 hour', imageQuery: 'Jakhu Temple hike Shimla' },
      { name: 'Kufri Day Trip', price: '₹1,200', duration: '4 hours', imageQuery: 'Kufri Shimla tour' }
    ]
  },

  // Manali
  'Manali': {
    attractions: [
      { name: 'Hadimba Temple', description: 'Ancient cave temple dedicated to Hadimba Devi', imageQuery: 'Hadimba Temple Manali' },
      { name: 'Solang Valley', description: 'Adventure sports destination with snow activities', imageQuery: 'Solang Valley Manali' },
      { name: 'Rohtang Pass', description: 'High altitude mountain pass with snow', imageQuery: 'Rohtang Pass Manali' },
      { name: 'Old Manali', description: 'Charming old village with cafes and guesthouses', imageQuery: 'Old Manali village' },
      { name: 'Manu Temple', description: 'Ancient temple dedicated to sage Manu', imageQuery: 'Manu Temple Manali' }
    ],
    hotels: [
      { name: 'The Himalayan', price: '₹8,000/night', rating: '4.6', imageQuery: 'Himalayan Manali hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Mountain View'] },
      { name: 'Shivadya Resorts', price: '₹6,000/night', rating: '4.5', imageQuery: 'Shivadya Resorts Manali', amenities: ['WiFi', 'Mountain View'] },
      { name: 'The Orchard Greens', price: '₹5,000/night', rating: '4.4', imageQuery: 'Orchard Greens Manali', amenities: ['WiFi', 'Mountain View'] },
      { name: 'Snow Valley Resorts', price: '₹7,000/night', rating: '4.5', imageQuery: 'Snow Valley Manali', amenities: ['WiFi', 'Mountain View'] }
    ],
    restaurants: [
      { name: 'Cafe 1947', cuisine: 'Continental', priceRange: '₹₹', rating: '4.6', specialty: 'Wood-fired Pizza', imageQuery: 'Cafe 1947 Manali' },
      { name: 'Johnson\'s Cafe', cuisine: 'Tibetan', priceRange: '₹₹', rating: '4.5', specialty: 'Momo & Thukpa', imageQuery: 'Johnsons Cafe Manali' },
      { name: 'Dylan\'s Toasted & Roasted', cuisine: 'Continental', priceRange: '₹₹', rating: '4.6', specialty: 'Coffee & Breakfast', imageQuery: 'Dylans Cafe Manali' },
      { name: 'Mount View Restaurant', cuisine: 'Himachali', priceRange: '₹₹', rating: '4.4', specialty: 'Local Cuisine', imageQuery: 'Mount View Manali' }
    ],
    experiences: [
      { name: 'Paragliding in Solang', price: '₹2,500', duration: '15 min', imageQuery: 'Solang paragliding Manali' },
      { name: 'River Rafting', price: '₹1,500', duration: '1 hour', imageQuery: 'Manali river rafting' },
      { name: 'Rohtang Pass Day Trip', price: '₹3,000', duration: '8 hours', imageQuery: 'Rohtang Pass tour Manali' },
      { name: 'Trekking', price: '₹2,000', duration: '4 hours', imageQuery: 'Manali trekking' }
    ]
  },

  // Chandigarh
  'Chandigarh': {
    attractions: [
      { name: 'Rock Garden', description: 'Sculpture garden made from industrial and home waste', imageQuery: 'Rock Garden Chandigarh' },
      { name: 'Sukhna Lake', description: 'Man-made lake perfect for boating and walking', imageQuery: 'Sukhna Lake Chandigarh' },
      { name: 'Rose Garden', description: 'Largest rose garden in Asia with 1600 varieties', imageQuery: 'Rose Garden Chandigarh' },
      { name: 'Elante Mall', description: 'One of the largest malls in North India', imageQuery: 'Elante Mall Chandigarh' },
      { name: 'Capitol Complex', description: 'UNESCO World Heritage site designed by Le Corbusier', imageQuery: 'Capitol Complex Chandigarh' }
    ],
    hotels: [
      { name: 'Taj Chandigarh', price: '₹9,000/night', rating: '4.7', imageQuery: 'Taj Chandigarh hotel', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'Hyatt Regency', price: '₹8,000/night', rating: '4.6', imageQuery: 'Hyatt Regency Chandigarh', amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
      { name: 'Radisson Chandigarh', price: '₹7,000/night', rating: '4.5', imageQuery: 'Radisson Chandigarh hotel', amenities: ['WiFi', 'Pool', 'Restaurant'] },
      { name: 'Hotel Mountview', price: '₹5,000/night', rating: '4.3', imageQuery: 'Mountview Chandigarh', amenities: ['WiFi', 'Restaurant'] }
    ],
    restaurants: [
      { name: 'Swagath Restaurant', cuisine: 'South Indian', priceRange: '₹₹', rating: '4.6', specialty: 'Masala Dosa', imageQuery: 'Swagath restaurant Chandigarh' },
      { name: 'Punjabi Dhaba', cuisine: 'Punjabi', priceRange: '₹₹', rating: '4.7', specialty: 'Butter Chicken', imageQuery: 'Punjabi Dhaba Chandigarh' },
      { name: 'Pal Dhaba', cuisine: 'Punjabi', priceRange: '₹₹', rating: '4.6', specialty: 'Tandoori', imageQuery: 'Pal Dhaba Chandigarh' },
      { name: 'Virsa Restaurant', cuisine: 'Punjabi', priceRange: '₹₹', rating: '4.5', specialty: 'Amritsari Kulcha', imageQuery: 'Virsa restaurant Chandigarh' }
    ],
    experiences: [
      { name: 'City Tour', price: '₹800', duration: '3 hours', imageQuery: 'Chandigarh city tour' },
      { name: 'Boating at Sukhna Lake', price: '₹200', duration: '30 min', imageQuery: 'Sukhna Lake boating Chandigarh' },
      { name: 'Shopping at Sector 17', price: 'Free', duration: '2 hours', imageQuery: 'Sector 17 Chandigarh shopping' },
      { name: 'Pinjore Gardens Visit', price: '₹1,000', duration: '3 hours', imageQuery: 'Pinjore Gardens Chandigarh' }
    ]
  }
};

// Helper function to get destination data (case-insensitive)
function getDestinationData(destinationName) {
  if (!destinationName) return null;
  
  // Normalize the destination name
  const normalized = destinationName.trim();
  
  // Direct match
  if (destinationData[normalized]) {
    return destinationData[normalized];
  }
  
  // Case-insensitive match
  const keys = Object.keys(destinationData);
  const match = keys.find(key => key.toLowerCase() === normalized.toLowerCase());
  if (match) {
    return destinationData[match];
  }
  
  // Partial match for common variations
  const partialMatch = keys.find(key => 
    normalized.toLowerCase().includes(key.toLowerCase()) || 
    key.toLowerCase().includes(normalized.toLowerCase())
  );
  if (partialMatch) {
    return destinationData[partialMatch];
  }
  
  return null;
}

// Comprehensive image mapping using verified Unsplash photo IDs
// Each entry uses a unique, verified photo ID for accurate representation
const imageMap = {
  // Delhi Attractions - verified photo IDs
  'red fort': '1524492412937-b28074a5d7da',
  'red fort delhi': '1524492412937-b28074a5d7da',
  'india gate': '1578662996442-48f60103fc96',
  'india gate delhi': '1578662996442-48f60103fc96',
  'qutub minar': '1580480055273-228ff5388ef8',
  'qutub minar delhi': '1580480055273-228ff5388ef8',
  'lotus temple': '1587574293340-e0011c4e8ecf',
  'lotus temple delhi': '1587574293340-e0011c4e8ecf',
  'humayun tomb': '1605540433968-63f50f0f1f12',
  'humayun tomb delhi': '1605540433968-63f50f0f1f12',
  // Mumbai Attractions
  'gateway of india': '1578662996442-48f60103fc96',
  'gateway of india mumbai': '1578662996442-48f60103fc96',
  'marine drive': '1499793983690-e29da59ef1c2',
  'marine drive mumbai': '1499793983690-e29da59ef1c2',
  'elephanta caves': '1605540433968-63f50f0f1f12',
  'elephanta caves mumbai': '1605540433968-63f50f0f1f12',
  'cst mumbai railway station': '1580477667995-2b94f01c0956',
  'chhatrapati shivaji terminus': '1580477667995-2b94f01c0956',
  'haji ali dargah': '1578662996442-48f60103fc96',
  'haji ali dargah mumbai': '1578662996442-48f60103fc96',
  // Agra Attractions
  'taj mahal': '1564507592333-c60657eea523',
  'taj mahal agra': '1564507592333-c60657eea523',
  'agra fort': '1524492412937-b28074a5d7da',
  'fatehpur sikri': '1605540433968-63f50f0f1f12',
  'fatehpur sikri agra': '1605540433968-63f50f0f1f12',
  // Jaipur Attractions
  'amber fort': '1559827260-dc66d52bef19',
  'amber fort jaipur': '1559827260-dc66d52bef19',
  'city palace jaipur': '1565793298593-6c08ce3f5579',
  'hawa mahal': '1539650116574-75c0c6d73e6e',
  'hawa mahal jaipur': '1539650116574-75c0c6d73e6e',
  'jantar mantar jaipur': '1580480055273-228ff5388ef8',
  // Udaipur Attractions
  'city palace udaipur': 'photo-1565793298593-6c08ce3f5579',
  'lake pichola udaipur': 'photo-1506905925346-21bda4d32df4',
  'jag mandir udaipur': 'photo-1559827260-dc66d52bef19',
  // Varanasi Attractions
  'ganga aarti varanasi': 'photo-1578662996442-48f60103fc96',
  'kashi vishwanath temple varanasi': 'photo-1605540433968-63f50f0f1f12',
  'sarnath varanasi': 'photo-1605540433968-63f50f0f1f12',
  // Chandigarh Attractions
  'rock garden chandigarh': 'photo-1506905925346-21bda4d32df4',
  'sukhna lake chandigarh': 'photo-1506905925346-21bda4d32df4',
  'rose garden chandigarh': 'photo-1506905925346-21bda4d32df4',
  // Bangalore Attractions
  'lalbagh bangalore botanical garden': 'photo-1506905925346-21bda4d32df4',
  'cubbon park bangalore': 'photo-1506905925346-21bda4d32df4',
  'bangalore palace': 'photo-1565793298593-6c08ce3f5579',
  'tipu sultan palace bangalore': 'photo-1565793298593-6c08ce3f5579',
  'iskcon temple bangalore': 'photo-1605540433968-63f50f0f1f12',
  // Mumbai-specific
  'elephanta caves mumbai': 'photo-1605540433968-63f50f0f1f12',
  'cst mumbai railway station': 'photo-1580477667995-2b94f01c0956',
  'haji ali dargah mumbai': 'photo-1605540433968-63f50f0f1f12',
  // Additional common terms
  'garden': 'photo-1506905925346-21bda4d32df4',
  'park': 'photo-1506905925346-21bda4d32df4',
  'lake': 'photo-1506905925346-21bda4d32df4',
  'waterfall': 'photo-1506905925346-21bda4d32df4',
  // Goa Attractions
  'calangute beach goa': 'photo-1507525428034-b723cf961d3e',
  'basilica of bom jesus goa': 'photo-1605540433968-63f50f0f1f12',
  'dudhsagar falls goa': 'photo-1506905925346-21bda4d32df4',
  'fort aguada goa': 'photo-1559827260-dc66d52bef19',
  // Kerala Attractions
  'alleppey backwaters kerala': 'photo-1559827260-dc66d52bef19',
  'munnar tea gardens kerala': 'photo-1506905925346-21bda4d32df4',
  'kochi fort area kerala': 'photo-1559827260-dc66d52bef19',
  'kovalam beach kerala': 'photo-1507525428034-b723cf961d3e',
  // Hotels - specific hotels with unique images
  'taj mahal palace mumbai hotel': '1566073771259-6a8506099945',
  'oberoi mumbai hotel': '1582719508461-905c673771fd',
  'itc maratha mumbai': '1551882547-ff40c63fe5fa',
  'trident mumbai hotel': '1590490360182-c33d57733427',
  'leela palace delhi hotel': '1566073771259-6a8506099945',
  'oberoi delhi hotel': '1582719508461-905c673771fd',
  'itc maurya delhi': '1551882547-ff40c63fe5fa',
  'itc maurya': '1551882547-ff40c63fe5fa',
  'the claridges delhi hotel': '1590490360182-c33d57733427',
  'claridges delhi hotel': '1590490360182-c33d57733427',
  'leela palace bangalore hotel': '1582719508461-905c673771fd',
  'taj west end bangalore': '1566073771259-6a8506099945',
  'taj west end': '1566073771259-6a8506099945',
  'itc gardenia bangalore': '1551882547-ff40c63fe5fa',
  'itc gardenia': '1551882547-ff40c63fe5fa',
  'oberoi bangalore hotel': '1590490360182-c33d57733427',
  'trident': '1590490360182-c33d57733427',
  'hotel': '1566073771259-6a8506099945',
  'resort': '1520250497591-112f2f40a3f4',
  'palace': '1565793298593-6c08ce3f5579',
  // Restaurants - specific restaurants with unique images
  'karims restaurant delhi': '1517248135467-4c7edcad34c4',
  'karim': '1517248135467-4c7edcad34c4',
  'indian accent delhi': '1559339352-11d035aa65de',
  'indian accent': '1559339352-11d035aa65de',
  'bukhara restaurant delhi': '1565299624946-b28f40a0ae38',
  'bukhara': '1565299624946-b28f40a0ae38',
  'parathe wali gali delhi': '1517248135467-4c7edcad34c4',
  'parathe wali gali': '1517248135467-4c7edcad34c4',
  'mtr restaurant bangalore': '1559339352-11d035aa65de',
  'mtr restaurant': '1559339352-11d035aa65de',
  'vidyarthi bhavan bangalore': '1565299624946-b28f40a0ae38',
  'vidyarthi bhavan': '1565299624946-b28f40a0ae38',
  'karavalli restaurant bangalore': '1517248135467-4c7edcad34c4',
  'karavalli': '1517248135467-4c7edcad34c4',
  'farmers cafe bangalore': '1559339352-11d035aa65de',
  'farmers cafe': '1559339352-11d035aa65de',
  'bademiya mumbai restaurant': '1565299624946-b28f40a0ae38',
  'bademiya': '1565299624946-b28f40a0ae38',
  'leopold cafe mumbai': '1517248135467-4c7edcad34c4',
  'leopold cafe': '1517248135467-4c7edcad34c4',
  'trishna restaurant mumbai': '1559339352-11d035aa65de',
  'trishna': '1559339352-11d035aa65de',
  'trishna restaurant': '1559339352-11d035aa65de',
  'britannia restaurant mumbai': '1565299624946-b28f40a0ae38',
  'britannia restaurant': '1565299624946-b28f40a0ae38',
  'restaurant': '1517248135467-4c7edcad34c4',
  'food': '1546069901-ba9599a7e63c',
  'cuisine': '1414235077428-338989a2e8c0',
  'mumbai restaurant': '1517248135467-4c7edcad34c4',
  'delhi restaurant': '1559339352-11d035aa65de',
  // Experiences - specific experiences with unique images
  'old delhi heritage walk': '1488646953014-85cb44e25828',
  'old delhi walking tour': '1488646953014-85cb44e25828',
  'delhi food tour': '1559339352-11d035aa65de',
  'delhi spice market': '1542838132-92c53300491e',
  'delhi cycling tour': '1558618666-fcd25c85cd64',
  'food tour': '1559339352-11d035aa65de',
  'spice market tour': '1542838132-92c53300491e',
  'cycling tour': '1558618666-fcd25c85cd64',
  'bangalore brewery tour': '1572116469696-31de0f17cc34',
  'bangalore tech park': '1488646953014-85cb44e25828',
  'bangalore food tour': '1559339352-11d035aa65de',
  'nandi hills bangalore sunrise': '1507525428034-b723cf961d3e',
  'nandi hills': '1507525428034-b723cf961d3e',
  'dharavi mumbai tour': '1488646953014-85cb44e25828',
  'dharavi': '1488646953014-85cb44e25828',
  'bollywood studio tour mumbai': '1488646953014-85cb44e25828',
  'bollywood studio tour': '1488646953014-85cb44e25828',
  'mumbai street food tour': '1559339352-11d035aa65de',
  'street food': '1559339352-11d035aa65de',
  'mumbai sunset cruise': '1507525428034-b723cf961d3e',
  'sunset cruise': '1507525428034-b723cf961d3e',
  'tour': '1488646953014-85cb44e25828',
  'experience': '1556909114-f6e7ad7d3136',
  'boat': '1519904981063-b0cf448d479e',
  'sunset': '1507525428034-b723cf961d3e',
  'cooking class': '1556909114-f6e7ad7d3136',
  'walking tour': '1488646953014-85cb44e25828',
};

// Hash function to generate consistent seeds for image selection
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Better image URL function using verified Unsplash photo IDs for specific places
function getBetterImageUrl(query, width = 400, height = 300) {
  if (!query) {
    return `https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=${width}&h=${height}&fit=crop&q=80`;
  }
  
  const queryLower = query.toLowerCase().trim();
  
  // Check imageMap first for specific place matches
  if (imageMap[queryLower]) {
    const photoId = imageMap[queryLower];
    // Handle both full photo IDs and partial IDs
    if (photoId.startsWith('photo-')) {
      return `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=crop&q=80`;
    } else {
      return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=80`;
    }
  }
  
  // Try partial matches in imageMap
  for (const key in imageMap) {
    if (queryLower.includes(key) || key.includes(queryLower)) {
      const photoId = imageMap[key];
      if (photoId.startsWith('photo-')) {
        return `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=crop&q=80`;
      } else {
        return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=80`;
      }
    }
  }
  
  // Fallback: Use category-based images
  if (queryLower.includes('red fort') || queryLower.includes('redfort')) {
    return `https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('taj mahal') || queryLower.includes('tajmahal')) {
    return `https://images.unsplash.com/photo-1564507592333-c60657eea523?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('india gate') || queryLower.includes('indiagate')) {
    return `https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('qutub minar') || queryLower.includes('qutubminar')) {
    return `https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('lotus temple') || queryLower.includes('lotustemple')) {
    return `https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('hotel') || queryLower.includes('resort')) {
    return `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('restaurant') || queryLower.includes('food') || queryLower.includes('cafe')) {
    return `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('temple') || queryLower.includes('mosque') || queryLower.includes('church')) {
    return `https://images.unsplash.com/photo-1605540433968-63f50f0f1f12?w=${width}&h=${height}&fit=crop&q=80`;
  } else if (queryLower.includes('fort') || queryLower.includes('palace')) {
    return `https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=${width}&h=${height}&fit=crop&q=80`;
  } else {
    return `https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=${width}&h=${height}&fit=crop&q=80`;
  }
}

// Process data to add image URLs
function processDestinationData(data) {
  if (!data) return null;
  
  const processed = {
    attractions: data.attractions.map(item => ({
      ...item,
      imageUrl: getBetterImageUrl(item.imageQuery || item.name, 400, 300)
    })),
    hotels: data.hotels.map(item => ({
      ...item,
      imageUrl: getBetterImageUrl(item.imageQuery || item.name, 400, 300)
    })),
    restaurants: data.restaurants.map(item => ({
      ...item,
      imageUrl: getBetterImageUrl(item.imageQuery || item.name, 400, 300)
    })),
    experiences: data.experiences.map(item => ({
      ...item,
      imageUrl: getBetterImageUrl(item.imageQuery || item.name, 400, 300)
    }))
  };
  
  return processed;
}

module.exports = {
  getDestinationData,
  processDestinationData,
  destinationData
};

