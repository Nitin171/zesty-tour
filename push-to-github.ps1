# PowerShell script to push all changes to GitHub
Write-Host "🚀 Pushing Zesty Tour to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: Not a git repository. Run 'git init' first." -ForegroundColor Red
    exit 1
}

# Add all files
Write-Host "📦 Adding all files..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "✅ No changes to commit. Everything is up to date!" -ForegroundColor Green
    exit 0
}

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy Zesty Tour application with all features

- Added comprehensive Indian destinations database
- Implemented autocomplete functionality
- Added destination details API with images
- Made places selectable in trip planner
- Fixed budget slider to start from 0
- Updated images with unique placeholders
- Added deployment configuration files"

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📖 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to https://railway.app" -ForegroundColor White
    Write-Host "2. Sign up/Login with GitHub" -ForegroundColor White
    Write-Host "3. Click 'New Project' → 'Deploy from GitHub repo'" -ForegroundColor White
    Write-Host "4. Select your repository" -ForegroundColor White
    Write-Host "5. Wait for deployment (2-3 minutes)" -ForegroundColor White
    Write-Host "6. Get your live URL!" -ForegroundColor White
    Write-Host ""
    Write-Host "See QUICK_DEPLOY.md for detailed instructions" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Error pushing to GitHub. Please check:" -ForegroundColor Red
    Write-Host "1. Do you have a remote repository configured?" -ForegroundColor Yellow
    Write-Host "2. Run: git remote add origin https://github.com/YOUR_USERNAME/zesty-tour.git" -ForegroundColor Yellow
    Write-Host "3. Make sure you're authenticated with GitHub" -ForegroundColor Yellow
}


Write-Host "🚀 Pushing Zesty Tour to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: Not a git repository. Run 'git init' first." -ForegroundColor Red
    exit 1
}

# Add all files
Write-Host "📦 Adding all files..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "✅ No changes to commit. Everything is up to date!" -ForegroundColor Green
    exit 0
}

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy Zesty Tour application with all features

- Added comprehensive Indian destinations database
- Implemented autocomplete functionality
- Added destination details API with images
- Made places selectable in trip planner
- Fixed budget slider to start from 0
- Updated images with unique placeholders
- Added deployment configuration files"

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📖 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to https://railway.app" -ForegroundColor White
    Write-Host "2. Sign up/Login with GitHub" -ForegroundColor White
    Write-Host "3. Click 'New Project' → 'Deploy from GitHub repo'" -ForegroundColor White
    Write-Host "4. Select your repository" -ForegroundColor White
    Write-Host "5. Wait for deployment (2-3 minutes)" -ForegroundColor White
    Write-Host "6. Get your live URL!" -ForegroundColor White
    Write-Host ""
    Write-Host "See QUICK_DEPLOY.md for detailed instructions" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Error pushing to GitHub. Please check:" -ForegroundColor Red
    Write-Host "1. Do you have a remote repository configured?" -ForegroundColor Yellow
    Write-Host "2. Run: git remote add origin https://github.com/YOUR_USERNAME/zesty-tour.git" -ForegroundColor Yellow
    Write-Host "3. Make sure you're authenticated with GitHub" -ForegroundColor Yellow
}







