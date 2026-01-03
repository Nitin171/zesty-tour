# API Setup Guide for ZestyTour

This guide explains how to configure API keys for fetching real places, hotels, and restaurants data.

## Overview

ZestyTour now supports fetching real-time data from external APIs. The application will automatically use real data when API keys are configured, and fall back to static data if APIs are unavailable.

## Supported APIs

### 1. Foursquare Places API (Recommended - Free Tier Available)

Foursquare Places API provides comprehensive data about attractions, hotels, and restaurants.

**Steps to get API key:**
1. Go to https://developer.foursquare.com/
2. Sign up for a free account
3. Create a new app
4. Copy your API key

**Configuration:**
Add to your `.env` file:
```
FOURSQUARE_API_KEY=your_api_key_here
```

### 2. Google Places API (Optional - Requires Billing)

Google Places API provides detailed information with photos and reviews.

**Steps to get API key:**
1. Go to https://console.cloud.google.com/
2. Create a new project or select existing
3. Enable "Places API"
4. Go to Credentials and create an API key
5. Enable billing (required for Places API)

**Configuration:**
Add to your `.env` file:
```
GOOGLE_PLACES_API_KEY=your_api_key_here
```

### 3. Unsplash API (Optional - For Better Images)

Unsplash provides high-quality images for places.

**Steps to get API key:**
1. Go to https://unsplash.com/developers
2. Create a developer account
3. Create a new application
4. Copy your Access Key

**Configuration:**
Add to your `.env` file:
```
UNSPLASH_ACCESS_KEY=your_access_key_here
```

## Setup Instructions

1. **Create `.env` file** in the project root:
   ```bash
   cp .env.example .env
   ```

2. **Add your API keys** to the `.env` file:
   ```
   FOURSQUARE_API_KEY=your_foursquare_api_key_here
   GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
   PORT=3001
   NODE_ENV=development
   USE_REAL_PLACES=true
   ```

3. **Restart the backend server** after adding API keys:
   ```bash
   npm start
   ```

## How It Works

1. When a user enters a destination, the frontend calls `/api/destinations/details?destination=<name>&real=true`
2. The backend tries to fetch real data from configured APIs
3. If real data is available, it's returned with:
   - Real place names
   - Actual ratings
   - Real addresses
   - Actual photos from APIs
   - Price ranges
4. If APIs are unavailable or return no results, the system falls back to static data
5. Data is cached for 30 minutes to reduce API calls

## Testing Without API Keys

The application will work without API keys by using static data. However, to get real-time data, you need to configure at least one API key.

## Troubleshooting

- **No real data appearing**: Check that API keys are correctly set in `.env` file
- **API errors**: Check API key validity and rate limits
- **Slow responses**: API calls may take a few seconds; data is cached after first fetch
- **Missing images**: Ensure Unsplash API key is configured for better image quality

## Rate Limits

- **Foursquare**: Free tier allows 50,000 calls/day
- **Google Places**: Depends on your billing plan
- **Unsplash**: Free tier allows 50 requests/hour

For production use, consider implementing rate limiting and caching strategies.

