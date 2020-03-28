window.onload = function(){
    console.log('Onload disparado');
    _val = document.querySelector("#AQUI")
}

/** DOM tem Prioridade */
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    _getElementById         = document.getElementById("aqui") // pega id
    _getElementsByClassName = document.getElementsByClassName('container') //pega classe
    _getElementsByTagName   = document.getElementsByTagName('button') //pega todos elementos da tag
    _querySelector          = document.querySelector("#selector") //pega CSS
    _querySelectorAll       = document.querySelectorAll('.container')
    _getElementById.addEventListener('click',function(event){
        alert('EventListenerClick')
    },false)

    _querySelector.addEventListener('select',function(event){
        alert('EventListenerSelect')
    },false)

    _getContainerChilds     = _querySelectorAll.childNodes;
    _getFirstChild          = _querySelectorAll.firstChild;
    _getName                = _querySelectorAll.nodeName;
    _getValue               = _querySelectorAll.nodeValue;
    _getType                = _querySelectorAll.nodeType;
    _getParent              = _querySelectorAll.parentNode;
    _getElementChild        = _querySelectorAll.firstElementChild;
    _getElementLast         = _querySelectorAll.lastElementChild;

},false); 

const PI = 3.14
var _var = 1
let _let = 2
window._globalVar = 3

function initFuncao() {
    let _let_1 = 1
    var _var_1 = 1
    window._globalVar = 1
    const CONST = 1
    console.log('Init')
}

function testeDeFuncao() {
    _let = 4
    _var = 4
    window._globalVar = 4
    PI = 4
}

