# Start both backend and frontend servers
Write-Host "========================================" -ForegroundColor Green
Write-Host "    Starting Zesty Tour Application" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Start backend server
Write-Host "🚀 Starting Backend Server (Port 3001)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; node backend/server.js" -WindowStyle Normal

# Wait a moment
Start-Sleep -Seconds 2

# Start frontend server
Write-Host "🌐 Starting Frontend Server (Port 8000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; node frontend-server.js" -WindowStyle Normal

# Wait a moment
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "    Application URLs" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "🌐 Frontend: http://localhost:8000/frontend/index.html" -ForegroundColor Cyan
Write-Host "🔧 Backend API: http://localhost:3001" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Both servers are running!" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to open the application in your browser..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Start-Process "http://localhost:8000/frontend/index.html"

