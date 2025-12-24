@echo off
echo ========================================
echo    Starting Zesty Tour Application
echo ========================================
echo.

echo Starting Backend Server (Port 3001)...
start "Backend Server" cmd /k "node backend/server.js"

timeout /t 2 /nobreak >nul

echo Starting Frontend Server (Port 8000)...
start "Frontend Server" cmd /k "node frontend-server.js"

timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo    Application URLs
echo ========================================
echo Frontend: http://localhost:8000/frontend/index.html
echo Backend API: http://localhost:3001
echo.
echo Both servers are running in separate windows!
echo Close those windows to stop the servers.
echo.
pause

start http://localhost:8000/frontend/index.html

