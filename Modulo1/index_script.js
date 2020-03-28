console.log('ola mundo')

document.querySelector('html').onclick = function() {
    console.log(calculaSoma(0,4))
    alert('Para de clicar em Mim');
}
function calculaSoma(a,b){
    return a+b
}

console.log(calculaSoma(0,3))