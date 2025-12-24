# Deployment Guide - Zesty Tour Application

This guide will help you deploy the Zesty Tour application to GitHub and host it online.

## Prerequisites

1. GitHub account
2. Git installed on your computer
3. Node.js installed (v14 or higher)

## Step 1: Prepare the Repository

### Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Zesty Tour application"
```

### Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `zesty-tour` (or any name you prefer)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### Connect Local Repository to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/zesty-tour.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Railway (Recommended - Free Tier Available)

Railway is the easiest platform to deploy Node.js applications with databases.

### Option A: Deploy via Railway Dashboard

1. Go to https://railway.app/
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Select your `zesty-tour` repository
6. Railway will automatically detect Node.js and start deployment
7. Add environment variable if needed:
   - Go to Variables tab
   - Add: `NODE_ENV=production`
   - Add: `PORT=3001` (or Railway will assign one automatically)
8. Once deployed, Railway will give you a public URL like `https://zesty-tour-production.up.railway.app`

### Option B: Deploy via Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize Railway in your project
railway init

# Deploy
railway up
```

## Step 3: Deploy to Render (Alternative - Free Tier Available)

1. Go to https://render.com/
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: zesty-tour
   - **Root Directory**: . (root)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Click "Create Web Service"
7. Render will build and deploy your app
8. You'll get a URL like `https://zesty-tour.onrender.com`

## Step 4: Update Configuration for Production

The application is already configured to work in production. The backend server will:
- Use the PORT environment variable (provided by hosting platform)
- Initialize the database on first start
- Serve the frontend files

## Step 5: Access Your Application

Once deployed, you'll get a public URL from your hosting provider:
- Railway: `https://your-app-name.up.railway.app`
- Render: `https://your-app-name.onrender.com`

**Note**: The frontend is configured to connect to `http://localhost:3001` in development. For production, you may need to update the API URLs in the frontend files to use the production backend URL.

## Updating the Frontend for Production

If your frontend and backend are on different URLs, update the API calls in:

1. `frontend/index.html` - Search for `http://localhost:3001`
2. `frontend/plan.html` - Search for `http://localhost:3001`
3. `frontend/app.js` - Search for `http://localhost:3001`

Replace with your production backend URL.

## Troubleshooting

### Database Issues
- The SQLite database will be created automatically on first run
- Make sure the `backend/` directory has write permissions

### Port Issues
- The application uses the PORT environment variable
- Default port is 3001 if PORT is not set
- Hosting platforms usually provide PORT automatically

### CORS Issues
- CORS is already configured in `backend/server.js` to allow all origins
- This should work for production deployments

## Additional Notes

- Free hosting tiers may have limitations (cold starts, resource limits)
- For production use, consider paid plans for better performance
- Database file (db.sqlite) is in .gitignore - it will be created fresh on deployment

