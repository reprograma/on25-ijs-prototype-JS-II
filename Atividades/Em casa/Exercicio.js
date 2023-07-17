//Nome: Dória Fernandes


class Animal {
    static chama = []
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
        this.vacinas = []
        this.social = false
    }

    consultar() {
        this.consultas.unshift(new Date())
    }

    vacinar(value) {
        this.vacinas.push(value)
        this.consultas.unshift(new Date())
    }

    chamar() {
        if (this.social == true || this.especie == "cachorro") {
            return Animal.chama
        }
    }

    alimentar() {
        this.social = true
        Animal.chama.unshift(this.nome)
        console.log(`${this.nome} agora confia em você!`)
    }


}

class Cat extends Animal {

    constructor(nome, idade, cor, castrado, externo) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.externo = externo
        this.especie = "gato"
    }
    miar() {
        console.log("miau miau")
    }

    brincar() {
        console.log("gatinhos gostam de brincar de novelo de lã")
    }

    acariciar() {
        if (this.social) {
            console.log("ron ron ron")
        } else {
            console.log(`Atenção, ${this.nome}, rosnou para você!`)
        }
    }

    alimentar(value) {
        if (value == "peixe" || value == "frango" || value == "sachê") {
            console.log(`${this.nome}, agora confia em você!`)
            Animal.chama.unshift(this.nome)
            return this.social = true
        } else {
            console.log(`${this.nome}, não gosta de ${value}`)
        }
    }


    castrar() {
        if (this.castrado == true) {
            console.log(`Atenção! ${this.nome}, já está castrado(a).`)
        } else {
            console.log(`${this.nome}, foi castrado(a) com sucesso!!`)
            this.consultas.unshift(new Date())
            return this.castrado = true
        }
    }

}

// let Lua = new Cat("Lua", 2, "preta", true, false)

class Dog extends Animal {

    #ferido
    constructor(nome, idade, cor, castrado, raça, ferido) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.#ferido = ferido
        this.raça = raça
        this.especie = "cachorro"
        Animal.chama.unshift(this.nome)
    }
    latir() {
        console.log("au au")
    }

    brincar() {
        if (this.#ferido == true) {
            console.log("Esse doguinho está ferido e não sairá para brincar")
        } else {
            console.log(`${this.nome} gosta de brincar com bolinha`)
        }
    }

    acariciar() {
        if (this.social) {
            console.log(`${this.nome}, abanou o rabo`)
        } else {
            console.log(`Atenção, ${this.nome} rosnou para você!`)
        }
    }


    castrar() {
        if (this.castrado == true) {
            console.log(`Atenção! ${this.nome}, já está castrado(a).`)
        } else {
            console.log(`${this.nome}, foi castrado(a) com sucesso!!`)
            this.consultas.unshift(new Date())
            return this.castrado = true
        }
    }
}

// let Rock = new Dog("Rock", 2, "preto", false, "vira-lata", true)

class Hamster extends Animal {

    constructor(nome, idade, cor, tipo) {
        super(nome, idade, cor)
        this.tipo = tipo
        this.estressado = true
        this.especie = "hamster"
    }

    brincar() {
        this.estressado = false
        console.log(`${this.nome}, gosta de brincar na rodinha`)
    }

    consultar() {
        if (this.estressado == false) {
            this.consultas.push(new Date())
        } else {
            console.log(`Eita, ${this.nome} fugiu!!`)
        }
    }

    acariciar() {
        if (this.social) {
            console.log(`${this.nome}, balançou o bumbunzinho`)
        } else {
            console.log(`Atenção, ${this.nome}, mordeu você!`)
        }
    }

}

// let ronaldinho = new Hamster("Ronaldinho",3,"malhado","sírio")

class Papagaio extends Animal {

    constructor(nome, idade, cor) {
        super(nome, idade, cor)
        this.especie = "papagaio"
    }

    falar() {
        console.log("Loro, quer biscoito?")
    }

    alimentar() {
        console.log(`${this.nome}, quer mais`)
    }

    brincar() {
        console.log(`${this.nome}, não quer brincar com você`)
    }

    acariciar() {
        if (this.social) {
            console.log(`${this.nome}, deixou você acariciar`)
        } else {
            console.log(`Atenção, ${this.nome}, bicou você!`)
        }
    }

}

//let Loro = new Papagaio("Louro", 10, "verde")
