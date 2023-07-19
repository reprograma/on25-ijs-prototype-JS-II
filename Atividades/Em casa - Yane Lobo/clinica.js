class AnimalDomestico {
    constructor(nome, idade, cor, castrado) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.consultas = []
        this.vacinas = []
    }

    consultar() {
        this.consultas.push(new Date())
    }

    vacinar (vacina) {
        this.vacinas.push(vacina)
        this.consultar()
    }

    castrar () {
        if(!this.castrado){
        this.castrado = true
        this.consultar()
        } else {
            console.log('ERRO: O animal já é castrado!')
        }
    }

    brincar() {
        console.log("brincamos!")
    }

    acariciar() {
        console.log("hmm carinho")
    }

    alimentar() {
        console.log("comida!")
    }

}

class Gato extends AnimalDomestico {
    constructor(nome, idade, cor, castrado, externo, social) {
        super(nome, idade, cor, castrado) 
            this.externo = externo
            this.social = social
    }
    
    miar () {
        console.log("miau miau")
    }

    acariciar () {
        this.social  ? console.log("hmmm carinho ron ron ron") : console.log("não toque em mim, hsssss");
    }

    alimentar(alimento) {
        const comidasFavoritas = ["frango", "sache", "peixe"];
        if (comidasFavoritas.includes(alimento)) {
            this.social = true;
            console.log("nham nham, comida gostosa")
            console.log(`agora ${this.nome} é sociável!`)
        } else {
            console.log("não gostei disso, miau")
    }
}

}

class Cachorro extends AnimalDomestico {
    #ferido
    constructor(nome, idade, cor, castrado, raça, ferido) {
        super(nome, idade, cor, castrado)
        this.raça = raça,
        this.#ferido = false
    }
    latir () {
        console.log("au au au")
    }

    brincar() {
        this.#ferido ? console.log('doguinho está ferido') : console.log(`${this.nome} brincou com você!`)
    }

}

class AnimalExotico {
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }

    consultar() {
        this.consultas.push(new Date())
    }

    brincar() {
        console.log("brincamos!")
    }

    acariciar() {
        console.log("hmm carinho")
    }

    alimentar() {
        console.log("comida!")
    }
}

class Hamster extends AnimalExotico {
    constructor(nome, idade, cor, tipo) {
        super(nome, idade, cor)
        this.tipo = tipo
    }

    consultar() {
        super.brincar()
        console.log("agora você pode me consultar")
        this.consultas.push(new Date())
    }
}
class Papagaio extends AnimalExotico {
    constructor(nome, idade, cor) {
        super(nome, idade, cor)
    }

    falar() {
        console.log("papagaio falou: ")
    }

    brincar() {
        super.brincar()
        this.falar()
        console.log('obrigado por brincar comigo!')
    }

    alimentar() {
        super.alimentar()
        this.falar()
        console.log('obrigado por me alimentar!')
    }

}

function chamar(listaAnimais) {
    const resultado = listaAnimais.filter(animal => animal instanceof Cachorro || (animal instanceof Gato && animal.social === true));
    if (resultado){
    const nomesAnimais = resultado.map(animal => animal.nome);
    console.log(nomesAnimais + ' foram chamados e vieram!')
    } else {
        console.log('nenhum bichinho veio :(')
    }
}

nina = new Gato("nina", 2, "preto", true, false, false)
tobias = new Cachorro("tobias", 2, "preto", false, "labrador", true)
rafael = new Cachorro("rafael", 3, "amarelo", false, "labrador", true)
hamtaro = new Hamster("hamtaro", 2, "laranja", "sírio")
louro = new Papagaio('louro', 2, 'verde')

chamar([tobias, rafael, nina])