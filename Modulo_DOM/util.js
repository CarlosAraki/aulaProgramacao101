function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const skip = (num) => new Array(num)


// https://discourse.wicg.io/t/passing-an-object-of-attributes-to-document-createelement-as-the-second-argument/809/19
document.createElement = function(elementName, attributes) {
    var element = Document.prototype.createElement.call(document, elementName);
    if(attributes && !(attributes instanceof Object)) {
        throw Error('Idk what to put, give feedback');	
    } else if(attributes) {
        for(var attr of Object.keys(attributes)) {
            if(element[attr] !== undefined) {
                element[attr] = attributes[attr];
            } else if (!element.hasAttribute(attr)) {
                element.setAttribute(attr, attributes[attr]);
            }
        }
    }
    return element;
}

// _getElementById         = document.getElementById("aqui") // pega id
// _getElementsByClassName = document.getElementsByClassName('container') //pega classe
// _getElementsByTagName   = document.getElementsByTagName('form') //pega todos elementos da tag
// _querySelector          = document.querySelector("#selector") //pega CSS
// _querySelectorAll       = document.querySelectorAll('.container')
// _getElementById.addEventListener('click',function(event){
//     alert('EventListenerClick')
// },false)

// _querySelector.addEventListener('select',function(event){
//     alert('EventListenerSelect')
// },false)

// _getContainerChilds     = _getElementById.childNodes;
// _getFirstChild          = _getElementById.firstChild;
// _getName                = _getElementById.nodeName;
// _getValue               = _getElementById.nodeValue;
// _getType                = _getElementById.nodeType;
// _getParent              = _getElementById.parentNode;
// _getElementChild        = _getElementById.firstElementChild;
// _getElementLast         = _getElementById.lastElementChild;
