@echo off
del /q /f /s %temp%\*
del /s /q C:\Windows\temp\*
del /q /f /s %appdata%\Microsoft\Windows\Recent\*
del /q /f /s C:\Windows\Prefetch\*
start cleanmgr
start ms-settings:storagesense
timeout /t 2 /nobreak > nul
echo Opening Temporary Files...
tree
