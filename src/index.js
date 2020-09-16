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