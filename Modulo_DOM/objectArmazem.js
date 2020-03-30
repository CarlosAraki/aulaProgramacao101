
class Armazem {
    constructor(nome = 'Analise'){
        this.nome   = nome
        this.areas  = new Array()
    }
}

class Area extends Armazem {
    constructor(nome = 'Analise'){
        super(nome);
        this.equipamentos = new Array()
    }

    get quantidadeEquipamentos(){
        return this.equipamentos.length
    }

}

//Força um equipamento mudar de área
Area.prototype.salvaEquipamentoArea = function (equipamento) {
    equipamento.localizacao = this.nome
    this.equipamentos.push(equipamento)
}

Area.prototype.getEquipamentoById = function (id) {
    let equip = false
    this.equipamentos.forEach(
        function (elem,index,array) {
            if(elem.id == id) return equip = elem
        }
    )
    return equip
}


Armazem.prototype.getEquipamentoByIdAllArea = function (id) {
    let equip = false
    this.areas.forEach(
        function (elem,index,array) {
            if(elem.getEquipamentoById(id)) return equip = elem.getEquipamentoById(id)
        }
    )
    return equip
}

//area 1 para area 2
function transferencia(idequipamento,distribuicao,index1,index2) {
    let area1       = distribuicao.areas[index1];
    let area2       = distribuicao.areas[index2];
    let equipamento = area1.getEquipamentoById(idequipamento)
    let position    = area1.equipamentos.indexOf(equipamento)
    
    if(position < 0) return false
    let _equipamento = area1.equipamentos.splice(position,1)
    _equipamento[0].localizacao = area2.nome
    area2.equipamentos.push(_equipamento[0])
    return true
}


var distribuicao    = new Armazem('Centro de Distribuição')
areasArray          = new Array()
function criaAreas(element,index,array){
    let newArea     = new Area(element);
    areasArray.push(newArea);
}
Object.values(armazenamento).forEach(criaAreas)
distribuicao.areas  = areasArray;
delete areasArray
