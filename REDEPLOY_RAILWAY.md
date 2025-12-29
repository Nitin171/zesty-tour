# 🚀 Redeploy on Railway - Update Your Live App

Your changes are on GitHub, but Railway needs to redeploy to show them on your live site.

## Quick Fix - Manual Redeploy

### Option 1: Via Railway Dashboard (Easiest)

1. **Go to Railway Dashboard:**
   - Visit: https://railway.app
   - Login with your GitHub account

2. **Find Your Project:**
   - Click on your project: `zesty-tour` or `web`

3. **Redeploy:**
   - Click on your service (usually named "web")
   - Go to the **"Deployments"** tab
   - Click **"Redeploy"** or **"Deploy"** button
   - Or click the **three dots (⋯)** menu → **"Redeploy"**

4. **Wait 2-3 minutes:**
   - Railway will pull latest code from GitHub
   - Build and deploy your app
   - Your site will update automatically

### Option 2: Trigger via GitHub Push

If auto-deploy is enabled:
1. Make a small change (add a comment)
2. Push to GitHub
3. Railway will auto-deploy

### Option 3: Force Redeploy via Railway CLI

```powershell
# Install Railway CLI (if not installed)
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Redeploy
railway up
```

## Verify Deployment

After redeploying:

1. **Check Railway Logs:**
   - Go to Railway dashboard
   - Click on your service
   - Go to "Logs" tab
   - Look for successful deployment messages

2. **Visit Your Site:**
   - https://web-production-d53d4.up.railway.app
   - Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
   - Check if login page appears

3. **Test New Features:**
   - Try accessing `/frontend/login.html`
   - Try accessing `/frontend/plan.html` (should redirect to login)
   - Check if place images are working

## Troubleshooting

### If Redeploy Doesn't Work:

1. **Check Build Logs:**
   - Railway dashboard → Your service → Logs
   - Look for errors

2. **Check Environment Variables:**
   - Railway dashboard → Your service → Variables
   - Make sure `NODE_ENV=production` is set

3. **Check Start Command:**
   - Railway dashboard → Your service → Settings
   - Start Command should be: `npm start`

4. **Clear Browser Cache:**
   - Hard refresh: `Ctrl + F5`
   - Or use incognito/private mode

### Common Issues:

**Issue:** Site shows old version
- **Solution:** Hard refresh browser or wait a few minutes

**Issue:** Build fails
- **Solution:** Check Railway logs for errors, verify `package.json` is correct

**Issue:** Login page not found
- **Solution:** Make sure `frontend/login.html` is in the repository

## Quick Redeploy Steps Summary

1. ✅ Go to https://railway.app
2. ✅ Click your project
3. ✅ Click your service
4. ✅ Click "Deployments" tab
5. ✅ Click "Redeploy"
6. ✅ Wait 2-3 minutes
7. ✅ Visit your site with hard refresh

---

**Your code is on GitHub, just need to redeploy on Railway! 🚀**

