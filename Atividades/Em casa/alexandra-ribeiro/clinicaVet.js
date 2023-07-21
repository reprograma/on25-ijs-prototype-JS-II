class HistoricoMedico {
    constructor() {
        this.vacinas = [];
        this.consultas = [];
    }
}

class Animal {
    constructor(nome, idade, cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.historico = new HistoricoMedico();
    }

    brincar() { console.log(`${this.nome} está brincando`)}

    consultar() {
        this.historico.consultas.push(new Date())
    }

    acariciar() { console.log(`${this.nome} foi acariciado`)}

    alimentar() { console.log(`${this.nome} foi alimentado`)}
    
}

class Gato extends Animal {
    constructor(nome, idade, cor, castrado, externo, social) {
        super(nome, idade, cor)
        this.castrado = castrado;
        this.externo = externo;
        this.social = social;
    }

    miar() { console.log("miau") }

    vacinar(vacina) {
        this.historico.vacinas.push(vacina)
        this.consultar()
    }

    consultar() {
        super.consultar();
    }

    castrar() {
        if(this.castrado) {
            console.log("O gato já foi castrado")
        } else{
            this.castrado = true;
            console.log("O gato foi castrado")
            this.consultar();
        }
    }

    brincar() {
        super.brincar()
    }

    acariciar() { 
        if(this.social) {
            console.log("ron ron ron") 
        } else {
            console.log("silvando")
        }
    }

    alimentar(comida) {
        const comidasFavoritas = ["frango", "sache", "peixe"];
        if(comidasFavoritas.includes(comida)) {
            console.log(`${this.nome} está sendo alimentado com ${comida}`);
            this.social = true
        }
    }
}

let nida = new Gato("Nida", 1.5, "preto", true, true, true);
let margot = new Gato("Margot", 3, "branca", true, true, false);

class Cachorro extends Animal {
    #ferido
    constructor(nome, idade, cor, castrado, raca, ferido) {
        super(nome, idade, cor)
        this.castrado = castrado;
        this.raca = raca;
        this.#ferido = ferido
    }

    latir() { console.log("au au au")}

    vacinar(vacina) {
        this.historico.vacinas.push(vacina)
        this.consultar()
    }

    consultar() {
        super.consultar();
    }
    
    brincar() {
        if(this.#ferido) {
            console.log(`${this.nome} está ferido e não quer brincar`)
        } else {
            console.log(`${this.nome} está brincando com a bolinha`)
        }
    }

    estaFerido() { return this.#ferido }

    castrar() {
        if(this.castrado) {
            console.log("O cachorro já foi castrado")
        } else{
            this.castrado = true;
            console.log("O cachorro foi castrado")
            this.consultar();
        }
    }

    acariciar() {
        super.acariciar();
    }

    alimentar() {
        super.alimentar();
    }
}

let sushi = new Cachorro("Sushi", 48, "bege", true, "Pug", true);
let saroo = new Cachorro("Saroo", 60, "marrom", true, "Yorkshire", false);

class Hamster extends Animal {
    constructor(nome, idade, cor, tipo) {
        super(nome, idade, cor)
        this.tipo = tipo
        this.consultas = []
    }

    consultar() {
        super.brincar();
        console.log(`${this.nome} está mais calmo e pode fazer a consulta`)
        super.consultar();
    }

    brincar() {
        console.log(`${this.nome} está brincando na rodinha`)
    }

    acariciar() {
        super.acariciar();
    }

    alimentar() {
        super.alimentar();
    }
}

let cookie = new Hamster("Cookie", 3, "marrom e branco", "Sírio")

class Papagaio extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade, cor)
        this.consultas = [];
    }

    falar() { console.log("Olá")}

    consultar() {
        super.consultar();
        this.brincar();
    }

    brincar() {
        return this.falar()
    }

    acariciar() {
        return this.falar()
    }

    alimentar() {
        super.alimentar()
    }
}

let loro = new Papagaio("Loro", 2, "verde")

function chamar(animais) {
    let animaisChamados = [];

    for(let animal of animais) {
        if(animal instanceof Cachorro && !animal.estaFerido()) {
            animaisChamados.push(animal.nome);
        } else if(animal instanceof Gato && animal.social) {
            animaisChamados.push(animal.nome);
        }
    }

    return animaisChamados;
}

let animais = [nida, margot, sushi, saroo, cookie, loro];
chamar(animais);
