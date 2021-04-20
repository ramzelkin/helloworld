# Move all files from the root directory of the project to the public/ directory
# The .public workaround is so cp doesn’t also copy public/ to itself in an infinite loop
mkdir .public
cp -a dist/. .public
mkdir .public/Content
mkdir .public/Content/css
cp -f src/testAdditional.js .public/Content
cp -f project-help/from/style-test-mobile.css .public/Content/css
cp -f project-help/from/jquery.min.js .public/Content
mv .public public
