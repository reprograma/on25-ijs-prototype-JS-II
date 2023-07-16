//Nome: Dória Fernandes


class Animal {

    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
        this.vacinas = []
        this.social = false


    }

    consultar() {
        this.consultas.push(new Date())
    }

    vacinar(value) {
        this.vacinas.push(value)
        this.consultas.push(new Date())
    }


}

class Cat extends Animal {
    constructor(nome, idade, cor, castrado, externo) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.externo = externo
    }
    miar() {
        console.log("miau miau")
    }

    acariciar() {
        if (this.social) {
            console.log("ron ron ron")
        } else {
            console.log(`Atenção, ${this.nome} rosnou para você!`)
        }
    }
    alimentar() {
        this.social = true
        console.log(`${this.nome} agora confia em você!`)
    }

    castrar() {
        if (castrado = true) {
            console.log(`Atenção! ${this.nome}, já está castrado.`)
        } else {
            console.log(`${this.nome}, foi castrado com sucesso!!`)
            return castrado = true
        }
    }

}

class Dog extends Animal {
    #ferido
    constructor(nome, idade, cor, castrado, raça, ferido) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.#ferido = ferido
        this.raça = raça
    }
    latir() {
        console.log("au au")
    }

    brincar() {
        if (ferido == true) {
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
    alimentar() {
        this.social = true
        console.log(`${this.nome} agora confia em você!`)
    }

    castrar() {
        if (castrado = true) {
            console.log(`Atenção! ${this.nome}, já está castrado.`)
        } else {
            console.log(`${this.nome}, foi castrado com sucesso!!`)
            return castrado = true
        }
    }
}

// let Rock = new Dog("Rock", 2, "preto", false, "vira-lata", true)

class Hamster extends Animal {
    constructor(nome, idade, cor, tipo) {
        super(nome, idade, cor)
        this.tipo = tipo
        this.estressado = true
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
    alimentar() {
        this.social = true
        console.log(`${this.nome} agora confia em você!`)
    }
}

// let ronaldinho = new Hamster("Ronaldinho",3,"malhado","sírio")

class Papagaio extends Animal {

    falar() {
        console.log("Loro, quer biscoito?")
    }

    alimentar() {
        console.log(`${this.nome}, quer mais`)
    }

    brincar() {
        console.log(`${this.nome}, não quer brincar com você`)
    }

}