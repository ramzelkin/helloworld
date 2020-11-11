const fs = require('fs');

let fileContent = fs.readFileSync('./project-help/style.css', 'utf8');
let fileToInsert = fs.readFileSync('./Text/CssText.js', 'utf8');
let newText = 'This is css file' + fileContent + 'And also some text';

let newTextToPublish = fileToInsert.split('let newTextCss = `').join(newText);

fs.writeFileSync('./Text/CssText.js', newTextToPublish);
