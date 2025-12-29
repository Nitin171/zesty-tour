# Complete GitHub Deployment Guide

This guide will help you deploy your Zesty Tour application (frontend and backend) to GitHub.

## ✅ What's Already Done

1. ✅ Git repository initialized
2. ✅ All files committed
3. ✅ Frontend configured for production (dynamic API URLs)
4. ✅ Backend configured for production
5. ✅ Deployment scripts created

## 🚀 Quick Start - Deploy to GitHub

### Option 1: Use the Automated Script (Recommended)

1. **Run the setup script:**
   ```powershell
   .\setup-github-repo.ps1
   ```

2. **Follow the prompts:**
   - Enter your GitHub username
   - Enter repository name (or use default: `zesty-tour`)
   - Create the repository on GitHub when prompted
   - Push your code

### Option 2: Manual Setup

#### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `zesty-tour` (or any name you prefer)
3. Description: `Zesty Tour - Travel Planning Application`
4. Choose Public or Private
5. **IMPORTANT:** Do NOT check:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click "Create repository"

#### Step 2: Connect Local Repository to GitHub

```powershell
# Remove old remote (if exists)
git remote remove origin

# Add your new repository
git remote add origin https://github.com/YOUR_USERNAME/zesty-tour.git

# Verify remote
git remote -v
```

#### Step 3: Push to GitHub

```powershell
# Push your code
git push -u origin main
```

**Note:** You'll need to authenticate. Use a GitHub Personal Access Token (not your password).

### Creating a Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name (e.g., "Zesty Tour Deployment")
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)
7. Use this token as your password when pushing

## 📦 Repository Structure

Your repository contains:

```
zesty-tour/
├── backend/          # Node.js backend server
│   ├── server.js     # Express server
│   ├── *.js          # Data files
│   └── db.sqlite     # Database (auto-created, not in git)
├── frontend/         # Frontend application
│   ├── index.html    # Landing page
│   ├── plan.html     # Trip planning page
│   ├── app.js        # Frontend logic
│   ├── autocomplete.js
│   ├── config.js     # API configuration
│   └── images/       # Destination images
├── package.json       # Dependencies
├── README.md         # Project documentation
└── deployment files
```

## 🌐 Deploy to Production

After pushing to GitHub, deploy your application:

### Railway (Recommended - Easiest)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your `zesty-tour` repository
6. Railway will automatically:
   - Detect Node.js
   - Install dependencies
   - Start the server
7. Get your live URL (e.g., `https://zesty-tour-production.up.railway.app`)

### Render (Alternative)

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** zesty-tour
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Click "Create Web Service"
7. Get your live URL

### Vercel (For Frontend Only)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `frontend`
5. Deploy

## 🔧 Separate Frontend and Backend Repositories

If you want separate repositories:

### Backend Repository

```powershell
# Navigate to backend folder
cd backend

# Initialize git
git init
git add .
git commit -m "Initial commit: Backend"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/zesty-tour-backend.git
git push -u origin main
```

### Frontend Repository

```powershell
# Navigate to frontend folder
cd frontend

# Initialize git
git init
git add .
git commit -m "Initial commit: Frontend"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/zesty-tour-frontend.git
git push -u origin main
```

**Note:** If deploying separately, update `frontend/config.js` to point to your backend URL.

## 📝 Environment Variables

For production deployment, you may need to set:

- `NODE_ENV=production`
- `PORT=3001` (or let the platform assign one)
- `API_BASE_URL` (if frontend and backend are on different domains)

## ✅ Verification

After deployment:

1. ✅ Check your GitHub repository is live
2. ✅ Verify all files are pushed
3. ✅ Test the deployed application
4. ✅ Check API endpoints are working

## 🆘 Troubleshooting

### Authentication Issues

- Use Personal Access Token instead of password
- Make sure token has `repo` scope
- Token expires? Generate a new one

### Repository Not Found

- Verify repository name is correct
- Check you have write access
- Ensure repository exists on GitHub

### Push Fails

- Check internet connection
- Verify remote URL is correct
- Try: `git push -u origin main --force` (use with caution)

### Deployment Issues

- Check platform logs
- Verify `package.json` has correct start script
- Ensure all dependencies are listed
- Check environment variables

## 📚 Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Your code is ready to deploy! 🚀**

Run `.\setup-github-repo.ps1` to get started, or follow the manual steps above.


