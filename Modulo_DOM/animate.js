var parar = false;

function pare() {
  parar = true
}

function corre() {
  parar = false
  move()
  moveInimigo()
}


function move() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var posT = 0;
    var posL = 0;
    elem.style.top = 0
    elem.style.left = 0
    var id = setInterval(frame, 5);
    function frame() {
      if (parar) {
        clearInterval(id);
      }

      if(posL==0 && posT>=0 && posT!=350){
        elem.style.top  = posT + "px"; 
        posT++;
      }
      else if(posT == 350 && posL < 350){
        elem.style.left = posL + "px"; 
        posL++;
      }
      else if(posL==350 && posT <=350 && posT!=0){
        elem.style.top  = posT + "px"; 
        posT--;
      } 
      else {
        elem.style.left = posL + "px"; 
        posL--; 
      }
    }
  }


window.vcT = 0
window.vcL = 0
function moveVc() {
    let elem = document.getElementById("animate3");  
    let vcL = window.vcL;
    let vcT = window.vcT;

    if (event.key=='a') {
        vcL -= 10;
    } 
    if (event.key=='w') {
        vcT -= 10;
    } 
    if (event.key=='d') {
        vcL += 10;
    } 
    if (event.key=='s') {
        vcT += 10;
    } 
    vcT = (vcT <= 0)    ?  0:vcT
    vcT = (vcT >= 350)  ?  350:vcT
    vcL = (vcL <= 0)    ?  0:vcL
    vcL = (vcL >= 350)  ?  350:vcL
    elem.style.top  = vcT + "px"; 
    elem.style.left = vcL + "px";
    window.vcL      =  vcL 
    window.vcT      =  vcT  

}



window.iniT = 0
window.iniL = 0
function moveInimigo() {
    let elem = document.getElementById("animate4");  
    var id2 = setInterval(frame, 300);
    function frame() {
        let iniL = window.iniL;
        let iniT = window.iniT;
        if (parar) {
            clearInterval(id2);
        }
        rand = Math.random()
        if (rand<0.3) {
            iniL -= 10;
        } 
        else if (rand<0.5) {
            iniT -= 10;
        } 
        else  if (rand<0.6) {
            iniL += 10;
        } 
        else {
            iniT += 10;
        } 
        iniT = iniT*rand*3.14
        iniL = iniL*rand*3.14
        iniT = (iniT <= 0)    ?  0:iniT
        iniT = (iniT >= 350)  ?  300:iniT
        iniL = (iniL <= 0)    ?  0:iniL
        iniL = (iniL >= 350)  ?  300:iniL
        elem.style.top  = iniT + "px"; 
        elem.style.left = iniL + "px";
        window.iniL      =  iniL 
        window.iniT      =  iniT  
    }
   
}
