# Zesty Tour Application Launcher for VS Code
Write-Host "Starting Zesty Tour Application..." -ForegroundColor Green

# Start backend server in background
Write-Host "Starting Backend Server..." -ForegroundColor Yellow
Start-Job -ScriptBlock { 
    Set-Location $using:PWD
    node backend/server.js 
} | Out-Null

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Start frontend server in background
Write-Host "Starting Frontend Server..." -ForegroundColor Yellow
Start-Job -ScriptBlock { 
    Set-Location $using:PWD
    python -m http.server 8000 
} | Out-Null

# Wait a moment for frontend to start
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "✅ Application is starting..." -ForegroundColor Green
Write-Host "🌐 Frontend: http://localhost:8000/frontend/index.html" -ForegroundColor Cyan
Write-Host "🔧 Backend: http://localhost:3001" -ForegroundColor Cyan
Write-Host ""

# Open the application in browser
Write-Host "Opening application in browser..." -ForegroundColor Yellow
Start-Process "http://localhost:8000/frontend/index.html"

Write-Host ""
Write-Host "🎉 Application is now running!" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the servers" -ForegroundColor Red

# Keep the script running to maintain the background jobs
try {
    while ($true) {
        Start-Sleep -Seconds 10
        Write-Host "Application is running... (Press Ctrl+C to stop)" -ForegroundColor Gray
    }
} catch {
    Write-Host "Stopping servers..." -ForegroundColor Yellow
    Get-Job | Stop-Job
    Get-Job | Remove-Job
    Write-Host "Servers stopped." -ForegroundColor Green
} 