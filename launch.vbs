Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.Run "taskkill /im babyweb.exe", 0, True

WshShell.Run "c:\Programmi\Babywebssl\babyweb.exe", 2

WshShell.Run "iexplore.exe http://localhost/gworks/Login.asp", 1




