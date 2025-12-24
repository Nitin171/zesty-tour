# 🚀 Quick Deployment Guide

## Deploy to GitHub in 3 Steps

### Step 1: Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Deploy Zesty Tour application"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/zesty-tour.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Railway (Recommended - Easiest)

1. **Go to Railway**: https://railway.app
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your `zesty-tour` repository**
6. **Wait for deployment** (takes 2-3 minutes)
7. **Get your live URL** - Railway will give you a URL like:
   ```
   https://zesty-tour-production.up.railway.app
   ```

**That's it! Your app is live!** 🎉

### Step 3: Access Your Application

Once deployed, visit the URL provided by Railway to see your live application.

---

## Alternative: Deploy to Render

1. **Go to Render**: https://render.com
2. **Sign up/Login** with GitHub
3. **Click "New +" → "Web Service"**
4. **Connect your GitHub repository**
5. **Configure**:
   - Name: `zesty-tour`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. **Click "Create Web Service"**
7. **Wait for deployment** and get your URL

---

## Need Help?

See `DEPLOYMENT.md` for detailed instructions.

