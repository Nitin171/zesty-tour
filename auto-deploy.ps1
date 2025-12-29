# Automated GitHub Deployment Script
# This script will help you deploy your project to GitHub with minimal steps

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Automated GitHub Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username
$username = Read-Host "Enter your GitHub username (e.g., Nitin171)"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Username is required. Exiting." -ForegroundColor Red
    exit 1
}

# Repository name
$repoName = "zesty-tour"
Write-Host ""
Write-Host "Repository will be: https://github.com/$username/$repoName" -ForegroundColor Yellow
Write-Host ""

# Step 1: Create repository using GitHub API (requires token)
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 1: GitHub Authentication" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "To deploy automatically, we need a GitHub Personal Access Token." -ForegroundColor Yellow
Write-Host ""
Write-Host "Quick steps to get a token:" -ForegroundColor White
Write-Host "1. Go to: https://github.com/settings/tokens/new" -ForegroundColor Cyan
Write-Host "2. Token name: 'Zesty Tour Deploy'" -ForegroundColor White
Write-Host "3. Expiration: 90 days (or your choice)" -ForegroundColor White
Write-Host "4. Select scope: 'repo' (check the box)" -ForegroundColor White
Write-Host "5. Click 'Generate token'" -ForegroundColor White
Write-Host "6. COPY THE TOKEN (you won't see it again!)" -ForegroundColor Red
Write-Host ""

$token = Read-Host "Paste your GitHub Personal Access Token here" -AsSecureString
$tokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($token))

if ([string]::IsNullOrWhiteSpace($tokenPlain)) {
    Write-Host "Token is required. Exiting." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Creating repository on GitHub..." -ForegroundColor Yellow

# Create repository using GitHub API
$headers = @{
    "Authorization" = "token $tokenPlain"
    "Accept" = "application/vnd.github.v3+json"
}

$body = @{
    name = $repoName
    description = "Zesty Tour - Travel Planning Application"
    private = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
    Write-Host "✓ Repository created successfully!" -ForegroundColor Green
    Write-Host "  URL: $($response.html_url)" -ForegroundColor Cyan
} catch {
    if ($_.Exception.Response.StatusCode -eq 422) {
        Write-Host "Repository already exists. Continuing..." -ForegroundColor Yellow
    } else {
        Write-Host "Error creating repository: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "Continuing anyway - repository may already exist..." -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 2: Configure Git Remote" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Remove old remote
git remote remove origin 2>$null

# Add new remote with token
$repoUrl = "https://$tokenPlain@github.com/$username/$repoName.git"
git remote add origin "https://github.com/$username/$repoName.git"

Write-Host "✓ Remote configured" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 3: Commit and Push" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check for uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git add .
    git commit -m "Deploy Zesty Tour application"
}

# Configure git to use token
$env:GIT_ASKPASS = "echo"
$env:GIT_TERMINAL_PROMPT = "0"

# Set credential helper for this push
git config --local credential.helper store
"https://$tokenPlain@github.com" | Out-File -FilePath "$env:USERPROFILE\.git-credentials" -Encoding ASCII -Append

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow

# Push using token in URL
$pushUrl = "https://$tokenPlain@github.com/$username/$repoName.git"
git push $pushUrl main 2>&1 | ForEach-Object {
    if ($_ -match "token") {
        # Hide token from output
        $_ -replace $tokenPlain, "***"
    } else {
        $_
    }
}

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ SUCCESS! Deployed to GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your repository is live at:" -ForegroundColor Cyan
    Write-Host "https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next: Deploy to production:" -ForegroundColor Yellow
    Write-Host "1. Railway: https://railway.app (connect GitHub repo)" -ForegroundColor White
    Write-Host "2. Render: https://render.com (connect GitHub repo)" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Trying alternative method..." -ForegroundColor Yellow
    
    # Alternative: Use git credential helper
    git remote set-url origin "https://$username@github.com/$username/$repoName.git"
    
    # Try pushing with credential prompt
    Write-Host "You may be prompted for credentials:" -ForegroundColor Yellow
    Write-Host "Username: $username" -ForegroundColor White
    Write-Host "Password: (use your Personal Access Token)" -ForegroundColor White
    Write-Host ""
    
    git push -u origin main
}

# Clean up token from memory (security)
$tokenPlain = $null
$token = $null

Write-Host ""

