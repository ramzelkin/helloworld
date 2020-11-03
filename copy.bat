RD /S /Q "Content\fonts"
del /S /Q "Content\m-style.css"

xcopy "project-help\from\fonts" "Content\fonts\" /Y
xcopy "project-help\from\style-test-mobile.css" "Content\" /Y
