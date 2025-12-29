# 🚀 How to Access New Features

## Quick Start

### Option 1: Use the Start Script (Easiest)

```powershell
.\start-both.ps1
```

This will:
- ✅ Start backend server (port 3001)
- ✅ Start frontend server (port 8000)
- ✅ Open browser automatically

### Option 2: Manual Start

**Terminal 1 - Backend:**
```powershell
npm start
```

**Terminal 2 - Frontend:**
```powershell
npm run frontend
```

## Access URLs

Once servers are running:

- **Homepage:** http://localhost:8000/frontend/index.html
- **Login Page:** http://localhost:8000/frontend/login.html
- **Trip Planner:** http://localhost:8000/frontend/plan.html
- **Backend API:** http://localhost:3001

## New Features to Try

### 1. Login/Signup System
1. Go to: http://localhost:8000/frontend/index.html
2. Click "Login" button (top right)
3. Create a new account:
   - Full Name
   - Username
   - Email
   - Password (min 6 characters)
4. Or login with existing account

### 2. Trip Planning with Login
1. After logging in, click "Start Planning"
2. You'll be redirected to trip planner
3. If not logged in, you'll be asked to login first

### 3. Relevant Place Images
1. In Step 4 of trip planner
2. Select a destination (e.g., "Delhi", "Agra", "Red Fort")
3. See relevant images for:
   - Red Fort → Shows Red Fort image
   - Taj Mahal → Shows Taj Mahal image
   - Golden Temple → Shows Golden Temple image
   - And many more!

### 4. Selected Places in Step 5
1. In Step 4, select places:
   - Click on attractions (📍)
   - Click on hotels (🏨)
   - Click on restaurants (🍽️)
   - Click on experiences (🎯)
2. Go to Step 5
3. See all your selected places displayed with:
   - Place images
   - Place names
   - Place descriptions
   - Category icons

## Testing Checklist

- [ ] Create a new account
- [ ] Login with your account
- [ ] See login/logout button on homepage
- [ ] Access trip planner (requires login)
- [ ] Select a destination in trip planner
- [ ] See relevant images in Step 4
- [ ] Select places in Step 4
- [ ] See selected places in Step 5

## Troubleshooting

### Backend won't start?
```powershell
# Check if port 3001 is available
# Or change port in backend/server.js
```

### Frontend won't load?
```powershell
# Make sure backend is running first
# Check if port 8000 is available
```

### Can't login?
- Make sure backend server is running
- Check browser console for errors
- Try creating a new account

### Images not showing?
- Check internet connection (uses Unsplash)
- Images load from external URLs
- May take a moment on first load

## Need Help?

- Check browser console (F12) for errors
- Make sure both servers are running
- Verify ports 3001 and 8000 are not in use

---

**Enjoy exploring the new features! 🎉**

