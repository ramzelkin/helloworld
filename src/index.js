import '../Content/css/style.css';
import textEx from '../Text/text.html';
import otherTextEx from '../Text/other-text.html';
import img from './Components/img.html';
import { newTextCss } from '../Text/CssText.js';

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
        container.insertAdjacentHTML('afterend', '<a href="https://gitlab.com/-/snippets/2038621">View snippet</a>');
    });
}

insertOtherText();

function showMobileTemplate() {
    var targetButton = document.getElementById('showMobile');
    targetButton.addEventListener("click", function(){
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=375,height=500,left=500,top=150`;
        let newWindow = open('mobile-index.html', 'index', params);
        newWindow.name = "myWindow";
    });
}

showMobileTemplate();

function showCss() {
    var targetButton = document.getElementById('showCss');
    targetButton.addEventListener("click", function(){
        var container = document.getElementById('container');
        container.innerHTML= '';
        container.innerHTML= newTextCss;
    });
}

showCss();

function feelGood() {
    var targetButton = document.getElementById('feelGood');
    targetButton.addEventListener("click", function(){
        alert('You are so cool!!!!!!!!!!!!!!!!!!!!!!!!!');
    });
}

feelGood();
