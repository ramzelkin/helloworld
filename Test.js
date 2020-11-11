const fs = require('fs');

let fileContent = fs.readFileSync('./project-help/style.css', 'utf8');
let fileToInsert = fs.readFileSync('./Text/CssText.js', 'utf8');
let newText = 'This is css file' + fileContent + 'And also some text';

let varName = 'export let newTextCss = `';
let strStart = fileToInsert.slice(0, varName.length);
let lastText = fileToInsert.slice(varName.length);

let newTextToPublish = strStart + newText + lastText;

fs.writeFileSync('./Text/CssText.js', newTextToPublish);
