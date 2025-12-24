@echo off
echo.
echo ========================================
echo  Deploy Zesty Tour to GitHub
echo ========================================
echo.

echo Step 1: Create a new repository on GitHub
echo Go to: https://github.com/new
echo.
echo Step 2: After creating the repository, run:
echo.
echo    git add .
echo    git commit -m "Deploy Zesty Tour application"
echo    git branch -M main
echo    git remote add origin YOUR_REPOSITORY_URL
echo    git push -u origin main
echo.
echo Step 3: Deploy to hosting platform
echo - Railway: https://railway.app
echo - Render: https://render.com
echo.
echo See DEPLOYMENT.md for detailed instructions
echo.
pause

