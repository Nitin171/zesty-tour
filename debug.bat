@echo off
echo ========================================
echo    Zesty Tour - Debug Mode
echo ========================================
echo.

echo Starting Backend Server with debugging...
start "Backend Debug" cmd /k "node --inspect=0.0.0.0:9229 backend/server.js"

echo.
echo Starting Frontend Server...
start "Frontend Server" cmd /k "python -m http.server 8000"

echo.
echo ========================================
echo    Debug Information
echo ========================================
echo Backend Debug URL: http://localhost:9229
echo Backend API: http://localhost:3001
echo Frontend: http://localhost:8000/frontend/index.html
echo.
echo To debug in VS Code:
echo 1. Press F5 or go to Run and Debug
echo 2. Select "Launch Backend (Node.js)" or "Launch Full Stack"
echo 3. Set breakpoints in your code
echo.
echo Press any key to exit this window...
pause > nul 