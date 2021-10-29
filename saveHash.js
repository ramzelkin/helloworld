const distFolder = './dist/';
const fs = require('fs');
const path = require('path');

var main;

fs.readdir(distFolder, (err, files) => {
    main = files.filter(file => {
        console.log(file.includes('main'));
        return file.includes('main');
    })
});

console.log(main);
console.log(typeof(main));