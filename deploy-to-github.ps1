# PowerShell script to deploy to GitHub
# Run this script to prepare and push code to GitHub

Write-Host "🚀 Preparing to deploy Zesty Tour to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
}

# Check git status
Write-Host "📊 Checking repository status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "📝 Please follow these steps:" -ForegroundColor Green
Write-Host ""
Write-Host "1. Create a new repository on GitHub: https://github.com/new" -ForegroundColor White
Write-Host "2. Copy the repository URL (e.g., https://github.com/YOUR_USERNAME/zesty-tour.git)" -ForegroundColor White
Write-Host "3. Run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git add ." -ForegroundColor Cyan
Write-Host "   git commit -m 'Deploy Zesty Tour application'" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git remote add origin YOUR_REPOSITORY_URL" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. After pushing to GitHub, deploy to Railway or Render:" -ForegroundColor White
Write-Host "   - Railway: https://railway.app (Connect GitHub repo)" -ForegroundColor Yellow
Write-Host "   - Render: https://render.com (Connect GitHub repo)" -ForegroundColor Yellow
Write-Host ""
Write-Host "📖 See DEPLOYMENT.md for detailed instructions" -ForegroundColor Green

