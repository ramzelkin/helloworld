import _ from 'lodash';
import textEx from '../Text/text.html';
import otherTextEx from '../Text/other-text.html';
import img from './Components/img.html';


function insertText(){
    var targetButton = document.getElementById('insert-text');
    targetButton.addEventListener("click", function(){
        var container = document.getElementById('container');
        container.innerHTML= '';
        container.innerHTML= textEx + img;
    });
}

insertText();

function insertOtherText(){
    var targetButton = document.getElementById('insert-other-text');
    targetButton.addEventListener("click", function(){
        var container = document.getElementById('container');
        container.innerHTML= '';
        container.innerHTML= otherTextEx;
    });
}

insertOtherText();

function showMobileTemplate() {
    var targetButton = document.getElementById('showMobile');
    targetButton.addEventListener("click", function(){
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=375,height=500,left=500,top=150`;
        let newWindow = open('', 'index', params);
        newWindow.name = "myWindow";
        newWindow.document.write(`<!doctype html>
        <html>
            <head>
                <title>test</title>
            <link href="./project-help/test/from/style-test-mobile.css" rel="stylesheet">
            </head>
            <body>
            <p>Mobile</p></body></html>`);
    });
}

showMobileTemplate();
