function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
}

class Animal {
    constructor(nome, idade, cor, castrado, raca) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = [] 
        this.castrado = true
        this.raca = raca
    }

    consulta() {
        this.consultas.push(new Date())
    }
}

class Gatos extends Animal  {
    miar() {
        console.log("miau miau")
    }
}

class Cachorros extends Animal {
    latir(){
        console.log("auu auu")
    }
}

let boris = new Cachorros("Bóris", 36, "branco", "shitzu") //idade em meses

