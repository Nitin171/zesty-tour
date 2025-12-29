# GitHub Repository Setup Script
# This script will help you create a new GitHub repository and push your code

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  GitHub Repository Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username
$username = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Username is required. Exiting." -ForegroundColor Red
    exit 1
}

# Get repository name
$repoName = Read-Host "Enter repository name (default: zesty-tour)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "zesty-tour"
}

Write-Host ""
Write-Host "Repository will be: https://github.com/$username/$repoName" -ForegroundColor Yellow
Write-Host ""

# Instructions to create repository
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 1: Create Repository on GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Open your browser and go to:" -ForegroundColor White
Write-Host "   https://github.com/new" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Fill in the form:" -ForegroundColor White
Write-Host "   - Repository name: $repoName" -ForegroundColor Yellow
Write-Host "   - Description: Zesty Tour - Travel Planning Application" -ForegroundColor Yellow
Write-Host "   - Visibility: Public or Private (your choice)" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. IMPORTANT: DO NOT check any of these:" -ForegroundColor Red
Write-Host "   ✗ Add a README file" -ForegroundColor Red
Write-Host "   ✗ Add .gitignore" -ForegroundColor Red
Write-Host "   ✗ Choose a license" -ForegroundColor Red
Write-Host ""
Write-Host "4. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$continue = Read-Host "Have you created the repository? (y/n)"

if ($continue -ne "y" -and $continue -ne "Y") {
    Write-Host "Please create the repository first, then run this script again." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 2: Configure Git Remote" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Remove existing remote if any
Write-Host "Removing old remote (if exists)..." -ForegroundColor Yellow
git remote remove origin 2>$null

# Add new remote
Write-Host "Adding new remote..." -ForegroundColor Yellow
$repoUrl = "https://github.com/$username/$repoName.git"
git remote add origin $repoUrl

Write-Host "✓ Remote configured: $repoUrl" -ForegroundColor Green
Write-Host ""

# Check if there are uncommitted changes
Write-Host "Checking for uncommitted changes..." -ForegroundColor Yellow
$status = git status --porcelain
if ($status) {
    Write-Host "Found uncommitted changes. Committing..." -ForegroundColor Yellow
    git add .
    git commit -m "Initial commit: Zesty Tour application"
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 3: Push to GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Pushing code to GitHub..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Note: You will be prompted for authentication." -ForegroundColor Yellow
Write-Host "Use your GitHub Personal Access Token (not password)." -ForegroundColor Yellow
Write-Host ""
Write-Host "If you don't have a token, create one at:" -ForegroundColor Cyan
Write-Host "https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host ""

$push = Read-Host "Ready to push? (y/n)"

if ($push -eq "y" -or $push -eq "Y") {
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  ✓ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your repository is now live at:" -ForegroundColor Cyan
        Write-Host "https://github.com/$username/$repoName" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Visit your repository on GitHub" -ForegroundColor White
        Write-Host "2. Deploy to Railway, Render, or Vercel" -ForegroundColor White
        Write-Host "3. See DEPLOYMENT.md for detailed instructions" -ForegroundColor White
    } else {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Red
        Write-Host "  ✗ Push failed" -ForegroundColor Red
        Write-Host "========================================" -ForegroundColor Red
        Write-Host ""
        Write-Host "Possible issues:" -ForegroundColor Yellow
        Write-Host "1. Authentication failed - use Personal Access Token" -ForegroundColor White
        Write-Host "2. Repository doesn't exist - make sure you created it" -ForegroundColor White
        Write-Host "3. Network issues - check your connection" -ForegroundColor White
        Write-Host ""
        Write-Host "You can also push manually using:" -ForegroundColor Yellow
        Write-Host "  git push -u origin main" -ForegroundColor Cyan
    }
} else {
    Write-Host ""
    Write-Host "You can push later using:" -ForegroundColor Yellow
    Write-Host "  git push -u origin main" -ForegroundColor Cyan
}

Write-Host ""

