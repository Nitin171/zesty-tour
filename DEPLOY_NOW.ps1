# Direct Deployment Script
$ErrorActionPreference = "Continue"

Write-Host ""
Write-Host "Deploying to GitHub..." -ForegroundColor Cyan
Write-Host ""

$username = "Nitin171"
$repoName = "zesty-tour"

Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor Yellow
Write-Host ""

Write-Host "Configuring git remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin "https://github.com/$username/$repoName.git"

$status = git status --porcelain
if ($status) {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git add . 2>&1 | Out-Null
    git commit -m "Deploy Zesty Tour application" 2>&1 | Out-Null
}

Write-Host ""
Write-Host "Attempting to push to GitHub..." -ForegroundColor Yellow
Write-Host ""

$pushOutput = git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "SUCCESS! Deployed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Authentication Required" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "The repository needs to be created first." -ForegroundColor White
    Write-Host ""
    Write-Host "Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
    Write-Host "2. Name: $repoName" -ForegroundColor White
    Write-Host "3. Don't check any boxes" -ForegroundColor White
    Write-Host "4. Click Create repository" -ForegroundColor White
    Write-Host "5. Then run this script again" -ForegroundColor White
    Write-Host ""
    Write-Host "Opening GitHub..." -ForegroundColor Yellow
    Start-Process "https://github.com/new"
    Write-Host ""
}

Write-Host ""
