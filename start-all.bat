@echo off
echo Starting CipherGate Application...

echo Starting Backend...
start cmd /k "cd c:\Users\Administrator\Downloads\ciphergate\backend && npm start"

timeout /t 5

echo Starting Frontend...
start cmd /k "cd c:\Users\Administrator\Downloads\ciphergate\frontend && npm run dev"

echo Both servers are starting. Please check the new command windows for status.
pause