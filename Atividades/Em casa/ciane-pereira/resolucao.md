// Nome: Ciane Aparecida Pereira

class Animal {

    constructor(nome, idade, cor, consultas) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = consultas
    }

    consultar(dataConsulta) {
        this.consultas.push(dataConsulta)
    }

    brincar() {
        console.log("Vamos buscar o brinquedo!!")
    }

    acariciar() {
        console.log("Hummm, que delícia esse carinho!!")
    }

    alimentar(comida) {
        console.log(`${this.nome} está comendo ${comida}`)
    }
}

class AnimalDomestico extends Animal {

    constructor(nome, idade, cor, consultas, castrado) {
        super(nome, idade, cor, consultas)
        this.castrado = castrado
        this.vacinas = []
    }

    vacinar(vacina) {
        this.vacinas.push(vacina)
        super.consultar()
    }

    castrar() {
        if(this.castrado == true) {
            console.log(`${this.nome} já castrou!`)
            this.castrado = true
            this.consultar()
        } else {
            console.log(`Erro!! ${this.nome} já está castrado.`)
        }
    }

}

class Gato extends AnimalDomestico {

    constructor(nome, idade, cor, consultas, castrado, externo, social) {
        super(nome, idade, cor, consultas, castrado)
        this.externo = externo
        this.social = social
    }

    miar() {
        console.log("Miau!!! Miau!!!")
    }

    acariciar() {
        super.acariciar()
        if(this.social == true) {
            console.log("ron ron")
        } else {
            console.log("SSSSS!!!")//não sei chamar
        }
    }

    alimentar(comida) {
        super.alimentar(comida)
        if(comida == "frango" || comida == "sachê" || comida == "peixe") {
            this.social = true
        }
    }

}
let nicolau = new Gato("Nicolau", 3, "cinza", true, false, false, true)


class Cachorro extends AnimalDomestico {
    #ferido

    constructor(nome, idade, cor, consultas, castrado, raca, ferido) {
        super(nome, idade, cor, consultas, castrado)
        this.raca = raca
        this.#ferido = true       
        }

    latir() {
    console.log("Au!! Au!!")
    }
    
    brincar() {
        if(this.#ferido == true) {
            console.log("Cachorro está sumido")
        } else {
            super.brincar()
        }              
    }    
}
let reina = new Cachorro("Reina", 8, "branca", true, "boxer", false)

class Hamster extends Animal {

    constructor(nome, idade, cor, tipo, consultas) {
        super(nome, idade, cor, consultas)
        this.tipo = tipo
    }

    consultar(dataConsulta) { 
    this.brincar() 
    super.consultar(dataConsulta)   
    }
}
let chuchu = new Hamster("Chuchu", 1, "branco e laranja", "sírio")

class Papagaio extends Animal {

    constructor(nome, idade, cor) {
        super(nome, idade, cor)
    }

    falar() {
        console.log("Cadê Naná!")
    }

    brincar() {
    super.brincar();
    this.falar();
  }

    alimentar(comida) {
    super.alimentar(comida);
    this.falar();
  }
}
let loro = new Papagaio("Loro", 35, "verde e amarelo")

let listaAnimais = [nicolau, reina, loro, chuchu] 

function chamar(listaAnimais) {
    let listaAnimalResponde = (animal) => 
    animal instanceof Cachorro || (animal instanceof Gato && animal.social == true) 

    console.log("Psiu!!!")
    return listaAnimais.filter(listaAnimalResponde)
}

