# Move all files from the root directory of the project to the public/ directory
# The .public workaround is so cp doesn’t also copy public/ to itself in an infinite loop
mkdir .public
cp -a dist/. .public
mv .public public
