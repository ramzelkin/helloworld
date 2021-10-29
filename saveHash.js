const distFolder = './dist/';
const fs = require('fs');

fs.readdir(distFolder, (err, files) => {
    files.filter(file => {
        console.log(file.includes('main'));
        return file.includes('main');
    })
});
