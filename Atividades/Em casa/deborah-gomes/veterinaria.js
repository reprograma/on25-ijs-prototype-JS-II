class Animal {
    constructor (nome, idade, cor, consultas = []) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.consultas = consultas;
    }

    consultar () {
        console.log(`${this.nome} foi consultado`);
    }

    brincar() {
        console.log()
    }

    acariciar() {
        console.log(`${this.nome} está sendo acariciado.`)
    }

    alimentar () {
        console.log(`${this.nome} está comendo.`)
    }




}