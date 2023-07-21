class Animal {
    constructor (nome, idade, cor, consultas = []) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.consultas = consultas;
    }

    consultar = () => {
        console.log(`${this.nome} foi consultado`);
    }

    brincar = () => {
        console.log(`${this.nome} está brincando.`)
    }

    acariciar = () => {
        console.log(`${this.nome} está sendo acariciado.`);
    }

    alimentar = () => {
        console.log(`${this.nome} está comendo.`);
    }
}


class Gato extends Animal {
    constructor(nome, idade, cor, vacinas, consultas, castrado, externo, social) {
        super(nome, idade, cor, consultas);
        this.vacinas = vacinas;
        this.castrado = castrado;
        this.externo = externo;
        this.social = social;
    }

    miar() {
        console.log(`${this.nome} está ${this.social ? "ronronando" : "silvando"}.`);
    }
}