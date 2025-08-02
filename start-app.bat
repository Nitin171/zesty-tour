@echo off
echo Starting Zesty Tour Application...
echo.

echo Starting Backend Server (Node.js)...
start "Backend Server" cmd /k "npm start"

echo.
echo Starting Frontend Server (Python)...
start "Frontend Server" cmd /k "python -m http.server 8000"

echo.
echo Both servers are starting...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:8000
echo.
echo Press any key to exit this window...
pause > nul 