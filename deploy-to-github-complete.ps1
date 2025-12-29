# Complete GitHub Deployment Script for Zesty Tour
# This script will help you deploy your frontend and backend to GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Zesty Tour - GitHub Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Get current directory
$projectPath = Get-Location
Write-Host "Project path: $projectPath" -ForegroundColor Yellow
Write-Host ""

# Check git status
Write-Host "Checking git status..." -ForegroundColor Yellow
git status --short

Write-Host ""
Write-Host "Current remote repository:" -ForegroundColor Yellow
git remote -v

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deployment Options" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Push to existing repository (https://github.com/Nitin171/APP.git)" -ForegroundColor White
Write-Host "2. Create a new repository and push" -ForegroundColor White
Write-Host "3. Create separate repositories for frontend and backend" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Select an option (1, 2, or 3)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Pushing to existing repository..." -ForegroundColor Yellow
        
        # Check if there are uncommitted changes
        $status = git status --porcelain
        if ($status) {
            Write-Host "You have uncommitted changes. Committing them..." -ForegroundColor Yellow
            git add .
            $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
            if ([string]::IsNullOrWhiteSpace($commitMessage)) {
                $commitMessage = "Update project files"
            }
            git commit -m $commitMessage
        }
        
        # Push to GitHub
        Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
        git push origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
            Write-Host "Repository URL: https://github.com/Nitin171/APP" -ForegroundColor Cyan
        } else {
            Write-Host ""
            Write-Host "✗ Failed to push. You may need to:" -ForegroundColor Red
            Write-Host "  - Set up authentication (Personal Access Token)" -ForegroundColor Yellow
            Write-Host "  - Check your internet connection" -ForegroundColor Yellow
            Write-Host "  - Verify repository permissions" -ForegroundColor Yellow
        }
    }
    
    "2" {
        Write-Host ""
        Write-Host "To create a new repository:" -ForegroundColor Yellow
        Write-Host "1. Go to https://github.com/new" -ForegroundColor White
        Write-Host "2. Create a new repository (e.g., 'zesty-tour')" -ForegroundColor White
        Write-Host "3. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
        Write-Host ""
        
        $repoName = Read-Host "Enter your GitHub username"
        $newRepoName = Read-Host "Enter new repository name (e.g., zesty-tour)"
        
        if ($repoName -and $newRepoName) {
            Write-Host ""
            Write-Host "Updating remote URL..." -ForegroundColor Yellow
            
            # Remove old remote
            git remote remove origin 2>$null
            
            # Add new remote
            $newRepoUrl = "https://github.com/$repoName/$newRepoName.git"
            git remote add origin $newRepoUrl
            
            Write-Host "New remote: $newRepoUrl" -ForegroundColor Cyan
            
            # Commit any uncommitted changes
            $status = git status --porcelain
            if ($status) {
                Write-Host "Committing changes..." -ForegroundColor Yellow
                git add .
                git commit -m "Initial commit: Zesty Tour application"
            }
            
            # Push to new repository
            Write-Host "Pushing to new repository..." -ForegroundColor Yellow
            Write-Host "Note: You may need to authenticate with GitHub" -ForegroundColor Yellow
            git push -u origin main
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host ""
                Write-Host "✓ Successfully pushed to new repository!" -ForegroundColor Green
                Write-Host "Repository URL: https://github.com/$repoName/$newRepoName" -ForegroundColor Cyan
            } else {
                Write-Host ""
                Write-Host "✗ Failed to push. Make sure:" -ForegroundColor Red
                Write-Host "  - The repository exists on GitHub" -ForegroundColor Yellow
                Write-Host "  - You have write access" -ForegroundColor Yellow
                Write-Host "  - You're authenticated (use Personal Access Token)" -ForegroundColor Yellow
            }
        }
    }
    
    "3" {
        Write-Host ""
        Write-Host "Creating separate repositories for frontend and backend..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "This will:" -ForegroundColor White
        Write-Host "  1. Create a backend repository" -ForegroundColor White
        Write-Host "  2. Create a frontend repository" -ForegroundColor White
        Write-Host ""
        
        $username = Read-Host "Enter your GitHub username"
        
        # Backend repository
        Write-Host ""
        Write-Host "=== Backend Repository ===" -ForegroundColor Cyan
        $backendRepoName = Read-Host "Enter backend repository name (default: zesty-tour-backend)"
        if ([string]::IsNullOrWhiteSpace($backendRepoName)) {
            $backendRepoName = "zesty-tour-backend"
        }
        
        Write-Host "Creating backend repository setup..." -ForegroundColor Yellow
        Write-Host "1. Go to https://github.com/new" -ForegroundColor White
        Write-Host "2. Create repository: $backendRepoName" -ForegroundColor White
        Write-Host "3. Then run these commands:" -ForegroundColor White
        Write-Host ""
        Write-Host "   cd backend" -ForegroundColor Green
        Write-Host "   git init" -ForegroundColor Green
        Write-Host "   git add ." -ForegroundColor Green
        Write-Host "   git commit -m 'Initial commit: Backend'" -ForegroundColor Green
        Write-Host "   git remote add origin https://github.com/$username/$backendRepoName.git" -ForegroundColor Green
        Write-Host "   git push -u origin main" -ForegroundColor Green
        Write-Host ""
        
        # Frontend repository
        Write-Host "=== Frontend Repository ===" -ForegroundColor Cyan
        $frontendRepoName = Read-Host "Enter frontend repository name (default: zesty-tour-frontend)"
        if ([string]::IsNullOrWhiteSpace($frontendRepoName)) {
            $frontendRepoName = "zesty-tour-frontend"
        }
        
        Write-Host "Creating frontend repository setup..." -ForegroundColor Yellow
        Write-Host "1. Go to https://github.com/new" -ForegroundColor White
        Write-Host "2. Create repository: $frontendRepoName" -ForegroundColor White
        Write-Host "3. Then run these commands:" -ForegroundColor White
        Write-Host ""
        Write-Host "   cd frontend" -ForegroundColor Green
        Write-Host "   git init" -ForegroundColor Green
        Write-Host "   git add ." -ForegroundColor Green
        Write-Host "   git commit -m 'Initial commit: Frontend'" -ForegroundColor Green
        Write-Host "   git remote add origin https://github.com/$username/$frontendRepoName.git" -ForegroundColor Green
        Write-Host "   git push -u origin main" -ForegroundColor Green
        Write-Host ""
        
        Write-Host "Note: You can also use GitHub Desktop or GitHub CLI for easier setup." -ForegroundColor Yellow
    }
    
    default {
        Write-Host "Invalid option. Exiting." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Next Steps for Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "After pushing to GitHub, you can deploy to:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Railway (Recommended - Free tier):" -ForegroundColor White
Write-Host "   - Go to https://railway.app" -ForegroundColor Cyan
Write-Host "   - Sign up with GitHub" -ForegroundColor Cyan
Write-Host "   - Deploy from GitHub repository" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Render (Free tier available):" -ForegroundColor White
Write-Host "   - Go to https://render.com" -ForegroundColor Cyan
Write-Host "   - Sign up with GitHub" -ForegroundColor Cyan
Write-Host "   - Create new Web Service from GitHub repo" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Vercel (For frontend):" -ForegroundColor White
Write-Host "   - Go to https://vercel.com" -ForegroundColor Cyan
Write-Host "   - Connect GitHub repository" -ForegroundColor Cyan
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""


