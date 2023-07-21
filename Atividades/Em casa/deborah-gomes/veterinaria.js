class Animal {
    constructor (nome, idade, cor, consultas = []) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.consultas = consultas;
    }

    consultar = () => console.log(`${this.nome} foi consultado`);
    

    brincar = () => console.log(`${this.nome} está brincando.`)
    

    acariciar = () => console.log(`${this.nome} está sendo acariciado.`);
    

    alimentar = () => console.log(`${this.nome} está comendo.`);
    
}

class AnimalDomestico extends Animal {
    constructor (nome, idade, cor, vacinas, consultas, castrado) {
        super(nome, idade, cor, consultas);
        this.vacinas = vacinas;
        this.castrado = castrado;
    }

    vacinar = (novaVacina) => {
        this.vacinas.push(novaVacina);
        console.log(`${novaVacina} aplicada a ${this.nome}`)
    };

    castrar = () => {
        this.castrado = true;
        console.log(`${this.nome} foi castrado`);
    };
}


class Gato extends AnimalDomestico {
    constructor(nome, idade, cor, vacinas, consultas, castrado, externo, social) {
        super(nome, idade, cor, consultas, vacinas, castrado);
        this.externo = externo;
        this.social = social;
    }

    alimentar = (comida) => {
        this.social = comida === "frango" || comida === "sachê" || comida === "peixe";
        super.alimentar(comida);
      }
      

    miar = () => {
        console.log(`${this.nome} está ${this.social ? "ronronando" : "silvando"}.`);  //decidi usar ternário, não sei se atrapalha a legibilidade do código.
    };
}

class Cachorro extends AnimalDomestico {
    constructor(nome, idade, cor, vacinas, consultas, castrado, raça) {
        super(nome, idade, cor, consultas, vacinas, castrado);
        this.raça = raça;
        this.#ferido = false;
    }

    #ferido;

    brincar = () => this.#ferido ? console.log(`${this.nome} está escondido porque está ferido.`) : super.brincar();

    latir = () => console.log(`${this.nome} está latindo`);

    consultar = () => {
        super.consultar();
        this.brincar();
    }


}

    

   