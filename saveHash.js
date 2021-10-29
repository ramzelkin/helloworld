const distFolder = './dist/';
const fs = require('fs');
const path = require('path');


let main = fs.readdir(distFolder, (err, files) => {
    files.filter(file => {
        return file.includes('main');
    })
});

let scriptName = path.basename(main);
console.log(scriptName);
