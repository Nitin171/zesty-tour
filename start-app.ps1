# Zesty Tour Application Startup Script
Write-Host "========================================" -ForegroundColor Green
Write-Host "    Zesty Tour - Starting Application" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if Python is installed
try {
    $pythonVersion = python --version
    Write-Host "✅ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Python not found. Please install Python first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Starting Backend Server (Node.js)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "node backend/server.js" -WindowStyle Normal

Write-Host "Starting Frontend Server (Python)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "python -m http.server 8000" -WindowStyle Normal

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "    Application URLs" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "🌐 Frontend: http://localhost:8000/frontend/index.html" -ForegroundColor Cyan
Write-Host "🔧 Backend API: http://localhost:3001" -ForegroundColor Cyan
Write-Host "📊 API Endpoints:" -ForegroundColor Cyan
Write-Host "   GET  /api/recipes" -ForegroundColor White
Write-Host "   POST /api/recipes" -ForegroundColor White
Write-Host "   POST /api/tour-details" -ForegroundColor White
Write-Host ""
Write-Host "🎯 To open the application in your browser:" -ForegroundColor Yellow
Write-Host "   Start-Process 'http://localhost:8000/frontend/index.html'" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to open the application in your browser..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Open the application in the default browser
Start-Process "http://localhost:8000/frontend/index.html" 