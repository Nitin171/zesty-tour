# One-Click GitHub Deployment
# This script will deploy your project to GitHub with minimal interaction

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Zesty Tour - GitHub Deployment      ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Get username
$username = Read-Host "Enter your GitHub username"
if ([string]::IsNullOrWhiteSpace($username)) {
    $username = "Nitin171"
    Write-Host "Using default: $username" -ForegroundColor Yellow
}

$repoName = "zesty-tour"

Write-Host ""
Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
Write-Host ""

# Option 1: Create repo via API (requires token)
Write-Host "Choose deployment method:" -ForegroundColor Yellow
Write-Host "1. Automatic (I'll create repo and push - requires token)" -ForegroundColor White
Write-Host "2. Semi-automatic (I'll open browser, you create repo, then I push)" -ForegroundColor White
Write-Host ""

$method = Read-Host "Enter choice (1 or 2)"

if ($method -eq "1") {
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
    Write-Host "  Get Your GitHub Token" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Opening token creation page..." -ForegroundColor Yellow
    Start-Process "https://github.com/settings/tokens/new"
    Write-Host ""
    Write-Host "2. On the page:" -ForegroundColor White
    Write-Host "   - Note: 'Zesty Tour Deploy'" -ForegroundColor Gray
    Write-Host "   - Expiration: 90 days" -ForegroundColor Gray
    Write-Host "   - Check: 'repo' scope" -ForegroundColor Gray
    Write-Host "   - Click: 'Generate token'" -ForegroundColor Gray
    Write-Host "   - COPY THE TOKEN" -ForegroundColor Red
    Write-Host ""
    
    $token = Read-Host "Paste your token here" -AsSecureString
    $BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
    $tokenPlain = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)
    
    if ([string]::IsNullOrWhiteSpace($tokenPlain)) {
        Write-Host "Token required. Exiting." -ForegroundColor Red
        exit 1
    }
    
    Write-Host ""
    Write-Host "Creating repository..." -ForegroundColor Yellow
    
    # Create repo via API
    $headers = @{
        "Authorization" = "Bearer $tokenPlain"
        "Accept" = "application/vnd.github+json"
        "X-GitHub-Api-Version" = "2022-11-28"
    }
    
    $body = @{
        name = $repoName
        description = "Zesty Tour - Travel Planning Application"
        private = $false
        auto_init = $false
    } | ConvertTo-Json
    
    try {
        $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
        Write-Host "✓ Repository created!" -ForegroundColor Green
    } catch {
        if ($_.Exception.Response.StatusCode.value__ -eq 422) {
            Write-Host "Repository already exists. Continuing..." -ForegroundColor Yellow
        } else {
            Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
            Write-Host "Continuing anyway..." -ForegroundColor Yellow
        }
    }
    
    Write-Host ""
    Write-Host "Configuring git..." -ForegroundColor Yellow
    git remote remove origin 2>$null
    git remote add origin "https://$tokenPlain@github.com/$username/$repoName.git"
    
    Write-Host "Pushing code..." -ForegroundColor Yellow
    git push -u origin main 2>&1 | ForEach-Object {
        $_ -replace $tokenPlain, "***"
    }
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
        Write-Host "║   ✓ DEPLOYED SUCCESSFULLY!            ║" -ForegroundColor Green
        Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
        Write-Host ""
        Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
    }
    
    # Clear token from memory
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($BSTR)
    $tokenPlain = $null
    
} elseif ($method -eq "2") {
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
    Write-Host "  Creating Repository" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Opening GitHub in your browser..." -ForegroundColor Yellow
    Start-Process "https://github.com/new"
    Write-Host ""
    Write-Host "On GitHub:" -ForegroundColor White
    Write-Host "1. Repository name: $repoName" -ForegroundColor Yellow
    Write-Host "2. Description: Zesty Tour - Travel Planning Application" -ForegroundColor Yellow
    Write-Host "3. Choose Public or Private" -ForegroundColor Yellow
    Write-Host "4. DO NOT check README, .gitignore, or license" -ForegroundColor Red
    Write-Host "5. Click 'Create repository'" -ForegroundColor Yellow
    Write-Host ""
    
    $continue = Read-Host "Have you created the repository? (y/n)"
    
    if ($continue -eq "y" -or $continue -eq "Y") {
        Write-Host ""
        Write-Host "Configuring git..." -ForegroundColor Yellow
        git remote remove origin 2>$null
        git remote add origin "https://github.com/$username/$repoName.git"
        
        Write-Host ""
        Write-Host "Pushing code..." -ForegroundColor Yellow
        Write-Host "You'll be asked for credentials:" -ForegroundColor Yellow
        Write-Host "  Username: $username" -ForegroundColor White
        Write-Host "  Password: (use Personal Access Token - not your password)" -ForegroundColor White
        Write-Host ""
        Write-Host "Get token: https://github.com/settings/tokens/new" -ForegroundColor Cyan
        Write-Host ""
        
        git push -u origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
            Write-Host "║   ✓ DEPLOYED SUCCESSFULLY!            ║" -ForegroundColor Green
            Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
            Write-Host ""
            Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
        }
    }
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "  Next: Deploy to Production" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "Railway (Easiest): https://railway.app" -ForegroundColor White
Write-Host "Render: https://render.com" -ForegroundColor White
Write-Host ""
Write-Host "Connect your GitHub repo and deploy!" -ForegroundColor Yellow
Write-Host ""

