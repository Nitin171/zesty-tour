# Zesty Tour - Travel Planning Application

A modern travel planning application with a beautiful UI for planning personalized trips across India.

![Zesty Tour](https://img.shields.io/badge/Status-Live-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-14+-green)
![License](https://img.shields.io/badge/License-ISC-blue)

## 🌟 Features

- **Beautiful Landing Page**: Modern design with popular destinations and search functionality
- **Trip Planning Wizard**: Multi-step form for creating personalized trips
- **Comprehensive Database**: 900+ Indian destinations including all states, cities, towns, and villages
- **Autocomplete Search**: Real-time destination suggestions as you type
- **Destination Details**: Detailed information about attractions, hotels, restaurants, and experiences
- **Backend API**: Node.js server with SQLite database
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive UI**: Smooth animations and user-friendly interface
- **Selectable Places**: Click to select attractions, hotels, restaurants, and experiences
- **Budget Planning**: Customizable budget slider starting from ₹0

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/zesty-tour.git
   cd zesty-tour
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   # Windows
   start-both.bat
   
   # Or manually
   npm start  # Backend server (port 3001)
   npm run frontend  # Frontend server (port 8000)
   ```

4. **Open your browser**
   - Frontend: http://localhost:8000/frontend/index.html
   - Backend API: http://localhost:3001

## 📡 API Endpoints

- `GET /api/recipes` - Get all recipes
- `POST /api/recipes` - Add a new recipe
- `POST /api/tour-details` - Save tour planning details
- `GET /api/destinations/search?q=<query>` - Search destinations (autocomplete)
- `GET /api/destinations/details?destination=<name>` - Get destination details (attractions, hotels, restaurants, experiences)

## 🚀 Deploy to Production

### Quick Deployment

See [QUICK_DEPLOY.md](QUICK_DEPLOY.md) for the fastest deployment steps.

### Detailed Deployment Guide

See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive deployment instructions.

**Recommended Platforms:**
- **Railway** (Easiest): https://railway.app
- **Render**: https://render.com
- **Heroku**: https://heroku.com

## 📁 Project Structure

```
zesty-tour/
├── backend/
│   ├── server.js              # Node.js backend server
│   ├── db.sqlite              # SQLite database (auto-created)
│   ├── indian-destinations.js # 900+ Indian destinations data
│   └── destination-data.js    # Detailed destination information
├── frontend/
│   ├── index.html             # Main landing page
│   ├── plan.html              # Trip planning wizard
│   ├── app.js                 # Frontend JavaScript
│   ├── autocomplete.js        # Autocomplete functionality
│   └── images/                # Destination images
├── package.json               # Node.js dependencies
├── README.md                  # This file
├── DEPLOYMENT.md              # Deployment guide
├── QUICK_DEPLOY.md            # Quick deployment steps
└── .gitignore                 # Git ignore file
```

## 🎨 Features Overview

### Landing Page (`index.html`)
- Beautiful hero section with search functionality
- Popular destinations with ratings and descriptions
- Category-based exploration
- Autocomplete destination search
- Trip planning call-to-action

### Trip Planning (`plan.html`)
- Multi-step wizard interface
- Package selection (Basic, Standard, Premium, Luxury)
- Age group and travel style preferences
- Budget slider (₹0 - ₹80,000 per day) with real-time calculation
- Transportation options
- Personalized recommendations with real images
- Selectable places (attractions, hotels, restaurants, experiences)

### Backend Features
- SQLite database for data persistence
- Comprehensive Indian destinations database (900+ entries)
- RESTful API endpoints
- CORS enabled for frontend communication
- Error handling and validation
- Auto-initialization of database on first run

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Icons**: Font Awesome
- **Styling**: Tailwind CSS
- **Images**: Picsum Photos (unique images per place)

## 🔧 Development

### Making Changes

1. Edit HTML files in the `frontend/` directory
2. Modify JavaScript in `frontend/app.js` or `frontend/autocomplete.js`
3. Update backend logic in `backend/server.js`
4. Restart servers after making changes

### Adding New Destinations

Destinations are stored in `backend/indian-destinations.js`. To add new destinations:

```javascript
const destinations = [
  { name: 'Destination Name', country: 'India', category: 'City', description: 'Description' },
  // ... more destinations
];
```

### Adding Destination Details

Detailed information (attractions, hotels, restaurants, experiences) is in `backend/destination-data.js`.

## 🐛 Troubleshooting

### If the backend won't start:
- Make sure Node.js is installed: `node --version`
- Run `npm install` to install dependencies
- Check if port 3001 is available

### If the frontend won't load:
- Make sure the backend server is running
- Check if port 8000 is available
- Open browser console to see any errors

### If images don't load:
- Images are loaded from Picsum Photos (external service)
- Check your internet connection
- Images may take a moment to load on first visit

### Database issues:
- The database is created automatically on first run
- If you need to reset: Delete `backend/db.sqlite` and restart the server

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Tailwind CSS for the beautiful styling
- Font Awesome for the icons
- Picsum Photos for placeholder images
- All contributors and users of Zesty Tour

---

**Made with ❤️ for travel enthusiasts exploring India**
