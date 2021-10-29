const distFolder = './dist/';
const fs = require('fs');

fs.readdir(distFolder, (err, files) => {
    files.filter(file => {
        console.log(files.includes('main'));
        return files.includes('main');
    })
});
