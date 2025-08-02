@echo off
echo Starting Zesty Tour Application for VS Code...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "node backend/server.js"

echo.
echo Starting Frontend Server...
start "Frontend Server" cmd /k "python -m http.server 8000"

echo.
echo Waiting for servers to start...
timeout /t 3 /nobreak > nul

echo.
echo Opening application in browser...
start http://localhost:8000/frontend/index.html

echo.
echo Application is now running!
echo Backend: http://localhost:3001
echo Frontend: http://localhost:8000/frontend/index.html
echo.
echo Press any key to close this window...
pause > nul 