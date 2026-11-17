@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Starting local preview server at http://localhost:8899 ...
echo Close this window to stop the server.
start "" http://localhost:8899
python -m http.server 8899
if errorlevel 1 (
  echo.
  echo Python not found or port 8899 in use.
  echo Try: py -m http.server 8899
  pause
)
