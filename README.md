# Zesty Tour - Travel Planning Application

A modern travel planning application with a beautiful UI for planning personalized trips.

![Zesty Tour](https://img.shields.io/badge/Status-Live-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-14+-green)
![License](https://img.shields.io/badge/License-ISC-blue)

## 🌟 Features

- **Beautiful Landing Page**: Modern design with popular destinations
- **Trip Planning Wizard**: Multi-step form for creating personalized trips
- **Backend API**: Node.js server with SQLite database
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive UI**: Smooth animations and user-friendly interface

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/zesty-tour-app)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Python 3 (for serving frontend files)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/zesty-tour-app.git
   cd zesty-tour-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Option 1: Run both servers separately

1. **Start the Backend Server** (in one terminal):
   ```bash
   npm start
   ```
   The backend will run on http://localhost:3001

2. **Start the Frontend Server** (in another terminal):
   ```bash
   cd frontend
   python -m http.server 8000
   ```
   The frontend will be available at http://localhost:8000

### Option 2: Use provided scripts

- **Windows**: Run `start-app.bat` or `start-app.ps1`
- **Debug mode**: Run `debug.bat` for debugging

## 🌐 Accessing the Application

1. Open your web browser
2. Navigate to: `http://localhost:8000`
3. You should see the Zesty Tour landing page

## 📡 API Endpoints

The backend provides the following API endpoints:

- `GET /api/recipes` - Get all recipes
- `POST /api/recipes` - Add a new recipe
- `POST /api/tour-details` - Save tour planning details

## 📁 Project Structure

```
zesty-tour-app/
├── backend/
│   ├── server.js          # Node.js backend server
│   └── db.sqlite         # SQLite database
├── frontend/
│   ├── index.html         # Main landing page
│   ├── plan.html          # Trip planning wizard
│   ├── app.js            # Frontend JavaScript
│   └── images/           # Destination images
├── package.json           # Node.js dependencies
├── README.md             # This file
└── .gitignore           # Git ignore file
```

## 🎨 Features Overview

### Landing Page (`index.html`)
- Beautiful hero section with search functionality
- Popular destinations with ratings and descriptions
- Category-based exploration
- Trip planning call-to-action

### Trip Planning (`plan.html`)
- Multi-step wizard interface
- Package selection (Basic, Standard, Premium, Luxury)
- Age group and travel style preferences
- Budget slider with real-time calculation
- Transportation options
- Personalized recommendations

### Backend Features
- SQLite database for data persistence
- RESTful API endpoints
- CORS enabled for frontend communication
- Error handling and validation

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Icons**: Font Awesome
- **Styling**: Tailwind CSS

## 🔧 Development

To modify the application:

1. Edit HTML files in the `frontend/` directory
2. Modify JavaScript in `frontend/app.js`
3. Update backend logic in `backend/server.js`
4. Restart servers after making changes

## 🐛 Troubleshooting

### If the backend won't start:
- Make sure Node.js is installed
- Run `npm install` to install dependencies
- Check if port 3001 is available

### If the frontend won't load:
- Make sure Python is installed
- Check if port 8000 is available
- Try a different port: `python -m http.server 8080`

### If images don't load:
- Make sure all image files are in the `frontend/images/` directory
- Check that the image paths in HTML files are correct

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
- Unsplash for the beautiful images

---

**Made with ❤️ for travel enthusiasts** 