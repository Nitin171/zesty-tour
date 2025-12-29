# 🚀 START HERE - Deploy to GitHub in 2 Minutes!

## Quick Deploy (Easiest Method)

### Just run this command:

```powershell
.\DEPLOY.ps1
```

The script will:
1. ✅ Open your browser to get a GitHub token
2. ✅ Create the repository automatically
3. ✅ Push all your code
4. ✅ Give you the repository URL

---

## What You Need

**Just 1 thing:** A GitHub Personal Access Token

### Get Token (30 seconds):
1. Script will open: https://github.com/settings/tokens/new
2. Click "Generate token (classic)"
3. Name: `Zesty Tour Deploy`
4. Check: `repo` ✅
5. Click "Generate token"
6. **COPY THE TOKEN**
7. Paste it when the script asks

---

## That's It!

After running `.\DEPLOY.ps1`:
- Your code will be on GitHub
- Repository URL will be shown
- Ready to deploy to Railway/Render/Vercel

---

## Alternative: If Script Doesn't Work

### Manual Method (5 minutes):

1. **Create repo:** https://github.com/new
   - Name: `zesty-tour`
   - Don't check any boxes
   - Click "Create repository"

2. **Push code:**
   ```powershell
   git remote remove origin
   git remote add origin https://github.com/YOUR_USERNAME/zesty-tour.git
   git push -u origin main
   ```
   
   **Password:** Use Personal Access Token (not your GitHub password)

---

**Ready? Run `.\DEPLOY.ps1` now! 🚀**

