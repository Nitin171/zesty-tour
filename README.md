# Zesty Tour - Travel Planning Application

A modern travel planning application with a beautiful UI for planning personalized trips.

## Features

- **Beautiful Landing Page**: Modern design with popular destinations
- **Trip Planning Wizard**: Multi-step form for creating personalized trips
- **Backend API**: Node.js server with SQLite database
- **Responsive Design**: Works on desktop and mobile devices

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Python 3 (for serving frontend files)

## Installation

1. Clone or download the project files
2. Navigate to the project directory:
   ```bash
   cd APP
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Option 1: Run both servers separately

1. **Start the Backend Server** (in one terminal):
   ```bash
   npm start
   ```
   or
   ```bash
   node backend/server.js
   ```
   The backend will run on http://localhost:3001

2. **Start the Frontend Server** (in another terminal):
   ```bash
   cd frontend
   python -m http.server 8000
   ```
   The frontend will be available at http://localhost:8000

### Option 2: Use a simple HTTP server

If you have any HTTP server available, you can serve the `frontend` folder directly.

## Accessing the Application

1. Open your web browser
2. Navigate to: `http://localhost:8000`
3. You should see the Zesty Tour landing page

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/recipes` - Get all recipes
- `POST /api/recipes` - Add a new recipe
- `POST /api/tour-details` - Save tour planning details

## Project Structure

```
APP/
├── backend/
│   └── server.js          # Node.js backend server
├── frontend/
│   ├── index.html         # Main landing page
│   ├── plan.html          # Trip planning wizard
│   ├── app.js            # Frontend JavaScript
│   └── images/           # Destination images
├── package.json           # Node.js dependencies
└── README.md             # This file
```

## Troubleshooting

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

## Features Overview

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

## Technologies Used

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Icons**: Font Awesome
- **Styling**: Tailwind CSS

## Development

To modify the application:

1. Edit HTML files in the `frontend/` directory
2. Modify JavaScript in `frontend/app.js`
3. Update backend logic in `backend/server.js`
4. Restart servers after making changes

## License

This project is for educational purposes. 