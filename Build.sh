rm -rf Content/fonts
rm -f Content/css/style-test-mobile.css
cp -R -f project-help/from/fonts Content
cp -f project-help/from/style-test-mobile.css Content/css
rm -f Content/css/style.css
cp -f project-help/style.css Content/css
rm -rf Content/css/from
cp -R -f project-help/from/fonts Content/css/from/fonts
npm run pages-build
