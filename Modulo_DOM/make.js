
/**
 * @abstract 
 * Make ChildNode with represents <br> tag
 * @author Carlos Araki
 * @returns {ChildNode}
 */
function br() {
    return (document.createElement("br"))
}

/**
 * @abstract 
 * Make Select Node By two Arrays options and Options values
 * @author Carlos Araki
 * @param {String} id 
 * @param {String} name 
 * @param {String} classe 
 * @param {Array} options 
 * @param {Array} optionsvalues 
 * @returns {ChildNode} 
 */
function makeSelect(id,name,classe = 'select_pattern' ,options = [],optionsvalues = []){
    let select = document.createElement('select',{
        id:id,
        name:name,
        class:classe
    })
    addOption(select,'Selecione...','')
    options.forEach(
        function (elem,index,arr) {
            addOption(select,elem,optionsvalues[index])
        }
    )
    return select
}

/**
 * 
 * @author Carlos Araki
 * @param {*} select 
 * @param {*} text 
 * @param {*} value 
 */
function addOption(select,text,value) {
    let option = document.createElement("option")
    option.text = text
    option.value = value
    select.add(option)
}

/**
 * 
 * @author Carlos Araki
 * @param {*} id 
 * @param {NodeList} elements 
 * @param {*} classe 
 * @param {*} spam 
 * @param {*} style 
 * @returns {ChildNode}
 */
function makeDiv(id,elements,classe = 'div_pattern',spam,style='') {
    div = document.createElement('div',{
        id:id,
        class:classe,
        style:style
    })
    if(spam)div.appendChild(makeSpam(id,classe,spam))
    elements.forEach(element => {
        div.appendChild(element)
    });
    return div 
}

/**
 * 
 * @author Carlos Araki
 * @param {*} id 
 * @param {*} classe 
 * @param {*} msg 
 * @param {*} style 
 * @returns {*} spam
 */
function makeSpam(id,classe='spam',msg = '',style=''){
    let spam = document.createElement('spam',{
        id:id+'_spam',
        class:classe+'_spam',
        style:style
    })
    spam.innerHTML = msg;
    return spam
}

/**
 * 
 * @author Carlos Araki
 * @param {*} id 
 * @param {*} labels 
 * @param {*} types 
 * @param {*} brh 
 */
function makeForm(id,labels,types,brh = true){
    let form = document.createElement('form',{
        id:id,
        method:'POST',
        name:'name_'+id,
        target:'_self'
    })
    labels.forEach(
        function (elem,index) {
            let label = makeLabel(elem,'input_name_'+index+'_form_'+id)
            let input = makeInput('input_id_'+index+'_form_'+id,'input_name_'+index+'_form_'+id,types[index])
            form.appendChild(document.createElement("br"))
            form.appendChild(label)
            if(brh)form.appendChild(document.createElement("br"))
            form.appendChild(input)
        }
    )
    return form
}

/**
 * 
 * @author Carlos Araki
 * @param {*} label 
 * @param {*} forLabel 
 */
function makeLabel(label,forLabel) {
    let _label = document.createElement('label',{
        for:forLabel
    })
    _label.innerHTML = label
    return _label
}

/**
 * 
 * @author Carlos Araki
 * @param {*} id 
 * @param {*} name 
 * @param {*} type 
 */
function makeInput(id,name,type) {
    return document.createElement('input',{
        id:id,
        name:name,
        type:type
    })
}

/**
 * @abstract This function make a table DOM
 * @author Carlos Araki
 * @param {*} id 
 * @param {*} classe 
 * @param {*} head 
 * @param {*} dataBody 
 * @throws {Error} Length of head is Zero
 * @throws {Error} Length of dataBody is Zero
 * @throws {Error} Length of dataBody[0] is Zero
 * @throws {Error} Length of cols between head and dataBody is different
 * @returns {*} table
 */
function makeTable(id,classe = 'table_pattern',head =['kh1','kh2'],dataBody =[['k1','d1'],['k2','d2']]) {
    if(head.length == 0) throw  new Error("Length of head is Zero");
    if(dataBody.length == 0) throw  new Error("Length of dataBody is Zero");
    if(dataBody[0].length == 0) throw  new Error("Length of dataBody[0] is Zero");
    if(head.length != dataBody[0].length) throw  new Error("Length of cols between head and dataBody is different");
    let table = document.createElement('table',{
        id:id,
        class:classe 
    })
    refreshDataBodyTable(makeTableHeadAndBody(table,head),dataBody)
    return table
}
      
/**
 * 
 * @author Carlos Araki
 * @param {*} table 
 * @param {*} head 
 */
function makeTableHeadAndBody(table,head) {
    let thead = table.createTHead()
    let thead_row = thead.insertRow(0)
    head.forEach(
        function(elem,index) {
            let th = document.createElement("TH");
            th.innerHTML = elem
            thead_row.appendChild(th)
        }
    )
    table.createTBody()
    return table
}

/**
 * 
 * @author Carlos Araki
 * @param {*} table 
 * @param {*} data 
 */
function refreshDataBodyTable(table,data) {
    tbody = table.lastChild
    tbody.innerHTML = ''
    data.forEach(function(row,indRow) {
        let tbodyRow = tbody.insertRow(0)
        row.forEach(function(col,indCol) {
            tbodyCell = tbodyRow.insertCell(indCol)
            tbodyCell.innerHTML = col
        });
    })
}
