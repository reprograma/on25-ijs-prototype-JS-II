
function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [{
        tipo: [],
        motivo: []
    }]
}

HistoricoMedico.prototype.vacinar = function(vacina) {this.vacinas.push(vacina); } 
HistoricoMedico.prototype.consultar = function(consultas) {this.consultas.unshift(consultas); } 

function quantasChaves(){
    return Object.keys(this).length
}

Object.prototype.quantasChaves = quantasChaves //atrelar ao prototype


class Cachorros{
    constructor(nome, idade, cor, castrado, raca){
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.raca = raca
        this.historico = new HistoricoMedico()
    }
    latir() { 
        console.log("Guauu Guauu")
    }
}

//dinamo.quantasChaves()



// Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.
class Gato{}
class Cachorro{}
class Cobra{}
class Papagaio{}
class BichoPreguica{}


function brincar(animal){
    if(animal instanceof Cachorro){
        return "brinque com qualquer coisa"
    }else if(animal instanceof Gato){
        return "Jogue bola"
    }else{
        return "nao brinque com ela"
    }
}