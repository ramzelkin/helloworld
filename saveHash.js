const distFolder = './dist/';
const fs = require('fs');
const path = require('path');


let main = fs.readdir(distFolder, (err, files) => {
    files.filter(file => {
        return file.includes('main');
    })
});

console.log(main);
console.log(typeof(main));