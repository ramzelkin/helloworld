mkdir .public
cp -a dist/. .public
mkdir .public/Content
mkdir .public/Content/css
cp -f src/testAdditional.js .public/Content
cp -f project-help/from/style-test-mobile.css .public/Content/css
cp -f project-help/from/jquery.min.js .public/Content
mv .public public
