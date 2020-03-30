window.onload = function(){
    console.log('Onload disparado');
    //inicializacao de animacao caso necessário
    container   = document.getElementsByClassName('container')
    start       = document.getElementById('animate2')
    container[0].setAttribute('hidden','hidden')
    start.setAttribute('hidden','hidden')
    delete container
    delete start
    document.getElementById('pega1').onmouseover  = pare;
    document.getElementById('animate2').onclick = corre;
    document.addEventListener("keypress", moveVc);
}

/** DOM tem Prioridade */
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    //variaveis de teste
    var equipamento1       = new Equipamento('equipamento 1')
    var equipamento2       = new Equipamento('equipamento 2')
    distribuicao.areas[0].salvaEquipamentoArea(equipamento1)
    distribuicao.areas[1].salvaEquipamentoArea(equipamento2)

    //preparando um HTML total

    animacoes()

    refDiv = document.createElement("div",{
        id:'_id_ref'
    })
    document.body.appendChild(refDiv);
    h1 = document.createElement("h1");
    nodeH1 = document.createTextNode(distribuicao.nome);
    br = document.createElement("br");
    //title
    h1.appendChild(nodeH1);  
    
    //table
    t = document.createElement('table',{
        id:'_id_ref_table',
        class:'table' 
    })
    atualizaDataTable(completeTable(t),distribuicao)

    //select transfer
    st1 = document.createElement('select',{
        id:"id_select_armazem1",
        name:"name_select_armazem1"
    })
    st2 = document.createElement('select',{
        id:"id_select_armazem2",
        name:"name_select_armazem2"
    })
    se1 = document.createElement('select',{
        id:"id_select_equipamento1",
        name:"name_select_equipamento1",
        hidden:false
    })
    addOption(st1,'Selecione...','')
    addOption(st2,'Selecione...','')
    addOption(se1,'Selecione...','')
    addArmazem(st1,distribuicao)
    addArmazem(st2,distribuicao,false)

    st1.onchange = addOptionEquipamento
    se1.onchange = enableBtn

    //button
    btn1 = document.createElement('button',{
        id:"id_button_transfer",
        class:"btn",
        disabled:true
    })
    btn1.innerHTML  ='Transferir'

    btn1.onclick    = submitTransf 

    refDiv.appendChild(h1)
    refDiv.appendChild(t)
    refDiv.appendChild(br)
    refDiv.appendChild(st1)
    refDiv.appendChild(se1)
    refDiv.appendChild(br)
    refDiv.appendChild(st2)
    refDiv.appendChild(btn1)
    
    delete h1
    delete nodeH1
    delete br
    delete st1
    delete se1
    delete st2
    delete t

},false); 
        
function completeTable(t,head = ['Area','Qtd Equipamentos']) {
    //head
    let thead = t.createTHead()
    let thead_row = thead.insertRow(0)
    head.forEach(function(elem,index) {
        let thead_cell = thead_row.insertCell(index)
        thead_cell.innerHTML = elem
    })
    //body
    return t.createTBody()
}

function addRow(t,key,value) {
    let tbody_row = t.insertRow(0)
    let tbody_cell_key = tbody_row.insertCell(0)
    tbody_cell_key.innerHTML = key
    tbody_cell_key.setAttribute('class','ind_table_body')
    let tbody_cell_value = tbody_row.insertCell(1)
    tbody_cell_value.innerHTML = value
}

function atualizaDataTable(tbody,distribuicao) {
    tbody.innerHTML = ''
    distribuicao.areas.forEach(function(elem,index,arr) {
        addRow(tbody,elem.nome,elem.quantidadeEquipamentos)
    })
}

function addOption(select,text,value) {
    let option = document.createElement("option")
    option.text = text
    option.value = value
    select.add(option)
}

function addArmazem(select,distribuicao,withEquip = true){
    distribuicao.areas.forEach(
        function (elem,index,arr) {
            if(withEquip){
                if((elem.quantidadeEquipamentos > 0)){
                    addOption(select,elem.nome,index)
                }
            }
            else{
                addOption(select,elem.nome,index)
            }
        }
    )
}

function addOptionEquipamento(){
    let value = this.value
    let se1 = document.getElementById("id_select_equipamento1")
    let firstChild = se1.firstChild
    se1.innerHTML  = '';
    se1.appendChild(firstChild)
    if(!value && (value !== 0)) return false
    let equip = distribuicao.areas[value].equipamentos
    equip.forEach(
        function (elem,index,arr) {
            addOption(se1,elem.nome,elem.id)
        }
    )
    return true
}

function submitTransf(){
    let se1 = document.getElementById("id_select_equipamento1")
    let st1 = document.getElementById("id_select_armazem1")
    let st2 = document.getElementById("id_select_armazem2")
    if(se1.value && st1.value && st2.value){
        transferencia(se1.value,distribuicao,st1.value,st2.value)
        let t = document.getElementById('_id_ref_table')
        t.lastChild.innerHTML = ''
        atualizaDataTable(t.lastChild,distribuicao)
        limpaMenosFirstChild(st1)
        limpaMenosFirstChild(st2)
        limpaMenosFirstChild(se1)
        addArmazem(st1,distribuicao)
        addArmazem(st2,distribuicao,false)
        let btn = document.getElementById('id_button_transfer')
        btn.setAttribute('disabled',true)
    }
}

function limpaMenosFirstChild(elem){
    let firstChild = elem.firstChild
    elem.innerHTML = ''
    elem.appendChild(firstChild)
}

function enableBtn() {
    let btn = document.getElementById('id_button_transfer')
    btn.removeAttribute('disabled')
}


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

    p2.innerHTML = 'pega eu'
    div2.appendChild(animate1)
    div2.appendChild(div1)
    div2.appendChild(animate2)
    div2.appendChild(animate3)   
}