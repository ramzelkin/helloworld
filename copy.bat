RD /S /Q "Content\fonts"
del /S /Q "Content\m-style.css"
del /S /Q "Content\style.css"
RD /S /Q "Content\css\from"
xcopy "project-help\from\fonts" "Content\fonts\" /Y
xcopy "project-help\from\style-test-mobile.css" "Content\css" /Y
xcopy "project-help\style.css" "Content\css" /Y
xcopy "project-help\from\fonts" "Content\css\from\fonts\" /Y
