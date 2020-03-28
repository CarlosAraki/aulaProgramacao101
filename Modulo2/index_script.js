console.log('ola mundo')

document.querySelector('html').onclick = function() {
    console.log(calculaSoma(0,4))
}
function calculaSoma(a,b){
    return a+b
}

window.onload = function(){
    console.log('Onload disparado');
    console.log(calculaSoma(0,2))
    _val = document.querySelector("#AQUI")
    _val.innerHTML = "<h1>Muda pra mim</h1>"; 
}

/** DOM tem Prioridade */
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente carregado e analisado");
    console.log(calculaSoma(0,1))

    _val2 = document.querySelector("#AQUI")
    _form = document.querySelector("form")
});

// // quebra o script a Partir daqui
// document.querySelector("#AQUI").onclick = function () {
//     alert();
// }

console.log(calculaSoma(0,3))