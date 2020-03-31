function animacoes(){
    div1 = document.createElement("div",{
        id:'animate2'
    })
    p1  = document.createElement("p")
    vc  = document.createElement("p")
    inimigo  = document.createElement("p")
    vc.innerHTML ='vc'
    inimigo.innerHTML ='inimigo'

    p1.innerHTML = 'Começa'
    div1.appendChild(p1)

    div2 = document.createElement("div",{
        id:'container'
    })

    animate1 = document.createElement("div",{
        id:'animate'
    })

    animate2 = document.createElement("div",{
        id:'animate3'
    })

    animate3 = document.createElement("div",{
        id:'animate4'
    })
    p2  = document.createElement("p",{
        id:"pega1"
    })
    animate2.appendChild(vc)
    animate3.appendChild(inimigo)
    animate1.appendChild(p2)

    p2.innerHTML = 'pega eu'
    div2.appendChild(animate1)
    div2.appendChild(div1)
    div2.appendChild(animate2)
    div2.appendChild(animate3)   
    document.body.appendChild(div2)
    container   = document.getElementById('container')
    start       = document.getElementById('animate2')
    document.getElementById('pega1').onmouseover  = pare;
    document.getElementById('animate2').onclick = corre;
    document.addEventListener("keypress", moveVc);
    
    delete container
    delete start
}