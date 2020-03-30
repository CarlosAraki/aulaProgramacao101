// JS só permite herança simples
// Temos 2 tipos de NCs (Amassado,Pintura), além disso temos 3 tipos de Classificação de Equipamentos(Classe A, Classe B, Classe C) as seguintes regras para armazenar o equipamento são:
// Se não haver NC estocar equipamento
// Se houver NC de Pintura estocar no Galpão de Retoques
// Se houver NC de não Conformidade estocar na Qualidade
// Se o equipamento é de Classe A e Houver NC é levado ao Scrap
// Se o equipamento é de Classe C pode ser estocado se a NC não for de Amassado

const classe ={
    A: 'classe A',
    B: 'classe B',
    C: 'classe C'
}

const armazenamento = {
    ANALISE     : "Analise",
    RETOQUES    : "Galpão de Retoques",
    ARMAZEM     : "Armazem",
    QUALIDADE   : "Qualidade",
    SCRAP       : "Scrap"
}


class Equipamento {
    constructor(nome = 'Equipamento Padrão',preco = 1.00,peso = 1.00,classe = 'classe B',localizacao = "Analise") {
        this.id             = generateUUID()
        this.nome           = nome
        this.nc             = {
            pintura         : false,
            amassado        : false,
        }
        this.preco          = preco
        this.peso           = peso
        this.classe         = classe
        this.localizacao    = localizacao
    }
}

Equipamento.prototype.amassar = function (amassou = true) {
    switch (this.classe) {
        case classe.A:
            this.nc.amassado = amassou
            if(this.nc.amassado)this.localizacao = armazenamento.SCRAP
            break;
        default:
            this.nc.amassado = amassou
            if(this.nc.amassado)this.localizacao = armazenamento.QUALIDADE
            break;
    }
}


Equipamento.prototype.riscar = function (riscou = true) {
    switch (this.classe) {
        case classe.A:
            this.nc.pintura = riscou
            if(this.nc.pintura)this.localizacao = armazenamento.SCRAP
            break;
        case classe.C:
            this.nc.pintura = riscou
            if(!this.nc.amassado)this.localizacao = armazenamento.ARMAZEM
            break;
        default:
            this.nc.pintura = riscou
            if(this.localizacao != armazenamento.QUALIDADE)this.localizacao = armazenamento.RETOQUES
            break;
    }
}

Equipamento.prototype.estocar = function () {
    let checaNC = Object.values(this.nc).some(elem => elem)
    if(!checaNC){
        this.localizacao = armazenamento.ARMAZEM;
    }
}
