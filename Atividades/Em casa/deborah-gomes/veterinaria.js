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

    alimentar = (comida) => console.log(`${this.nome} está comendo ${comida}.`);
    
    
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

    setFerido = (estado) => {
        this.#ferido = estado;
      }

    brincar = () => (this.#ferido ? console.log(`${this.nome} está escondido porque está ferido.`) : console.log(`${this.nome} está brincando.`));

    latir = () => console.log(`${this.nome} está latindo`);

    consultar = () => {
        super.consultar();
        this.brincar();
    }
}

class Hamster extends Animal {
    constructor(nome, idade, cor, tipo, consultas) {
        super(nome, idade, cor, consultas);
        this.tipo = tipo;
    }

    brincar = () => console.log(`${this.nome} está brincando`);

    consultar = () => {
        super.consultar();
        this.brincar();
    }
}

class Papagaio extends Animal {
    constructor(nome, idade, cor, consultas) {
        super(nome, idade, cor, consultas);
    }

    brincar = () => console.log(`${this.name} está brincando.`)

    alimentar = (comida) => {
        super.alimentar(comida);
    }

    falar = () => {
        this.brincar() || this.alimentar();
        console.log(`${this.name} está falando.`)}
}

const gato = new Gato("Nina", 1.5, "frajola", ["raiva"], [], true, false, true);
const cachorro = new Cachorro("Zeus", 3.5, "preto", [], [], false, "labrador");
const hamster = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio");
const papagaio = new Papagaio("José", 13, "verde", []);



//para testar é só chamar o animal e o método a ser testado como por exemplo:
gato.alimentar("ovo");
gato.miar();
cachorro.brincar();


   