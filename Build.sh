rm -rf Content/fonts
rm -f Content/css/style-test-mobile.css
cp -R -f project-help/from/fonts Content
cp -f project-help/from/style-test-mobile.css Content/css
npm run pages-build
mkdir public
cp -r * public
# mkdir .public
# cp -r * .public
# mv .public public
