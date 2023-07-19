class Animal {
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }

    consultar(dataConsulta) {
        this.consultas.push(dataConsulta)
    }
}

class AnimaisDomesticos extends Animal{
    constructor(nome, idade, cor, castrado) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.vacinas = []
    }

    vacinar(vacina, dataConsulta) {
        this.vacinas.push(vacina)
        this.consultas.push(dataConsulta)
    }

    castrar(dataConsulta) {
        if (this.castrado == false) {
            this.castrado = true
        } else {
        console.log("Não é possível realizar a castração. Animal já castrado!")
        }
        this.consultas.push(dataConsulta)
    }
}

class Gato extends AnimaisDomesticos{
    constructor(nome, idade, cor, castrado, externo, sociavel) {
        super(nome, idade, cor, castrado)
        this.externo = externo 
        this.sociavel = sociavel 
        }

    miar() {
        console.log("Miaaaau")
    }

    brincar() {
        console.log(`Você brincou com ${this.nome}. Agora está mais feliz =D`)
    }

    acariciar() {
        if (this.sociavel == true) {
            console.log("ron ron ron")
        } else {
            console.log("ssschiiii")
        }
    }
   
    alimentar(alimento) {
        if (alimento == "frango") {
            this.sociavel = true
        } else if (alimento == "sachê") {
            this.sociavel = true
        } else if (alimento == "peixe") {
            this.sociavel = true
        } else {
            return
        }
    }
}

marrie = new Gato("Marrie", 1, "branca", true, false, true)
marrie.miar()
marrie.brincar()
marrie.acariciar()
marrie.consultar("2023-02-10")
marrie.vacinar("raiva", "2023-07-18")
marrie.alimentar("racao")
marrie.castrar()
harry = new Gato("Harry", 3, "preto", false, true, false)
harry.acariciar()
harry.vacinar("raiva", "2023-01-06")
harry.alimentar("racao")
harry.alimentar("frango")
harry.castrar()



class Cachorro extends AnimaisDomesticos{
    #ferido
    constructor(nome, idade, cor, castrado, raça, ferido) {
        super(nome, idade, cor, castrado)
        this.raça = raça
        this.#ferido = ferido 
    }

    latir() {
        console.log("Au Au")
    }

    brincar() {
        if (this.#ferido == true){
            console.log(`${this.nome} se escondeu, pois está ferido(a)!`)
        }
        else {
            console.log(`Você brincou com ${this.nome}. Agora está mais feliz =D`)
        }
    }

    acariciar() {
        console.log(`Você acariciou ${this.nome}. Agora está se sentindo amado(a) <3`)
    }
   
    alimentar() {
        console.log(`Você alimentou ${this.nome}. Agora está saciado(a)!`)
    }
}

bella = new Cachorro("Bella", 3, "branco e preto", true, "dálmata", false)
bella.brincar()
tico = new Cachorro("Tico", 4, "branco e preto", false, "dálmata", true)
tico.brincar()
tico.acariciar()
bella.alimentar()
tico.vacinar("raiva", "2021-06-10")




class Hamster extends Animal{
    constructor(nome, idade, cor, tipo) {
        super(nome, idade, cor)
        this.tipo = tipo
        this.relaxado = false
    }

    brincar() {
        console.log(`Você brincou com ${this.nome}.`)
        this.relaxado = true
        return this.relaxado
    }

    acariciar() {
        console.log(`Você acariciou ${this.nome}. Agora está se sentindo amado <3`)
    }
   
    alimentar() {
        console.log(`Você alimentou ${this.nome}. Agora está saciado!`)
    }

    consultar(dataConsulta) {
        if (this.relaxado == true) {
            console.log(`Muito bem! ${this.nome} está relaxado e será possível realizar a consulta!`)
            this.consultas.push(dataConsulta)
        } else {
            console.log(`Oh não! ${this.nome} fugiu! Você precisa brincar com ele para acalmá-lo!`)
        }
    }
    
}

alfred = new Hamster("Alfred", 1, "caramelo", "Roborovski")
alfred.brincar()
alfred.acariciar()
alfred.alimentar()
alfred.consultar("2023-06-10")
hamtaro = new Hamster("Hamtaro", 2, "cinza", "Anão Russo")
hamtaro.consultar("2022-10-10")


class Papagaio extends Animal{
    constructor(nome, idade, cor) {
        super(nome, idade, cor)
    }

    acariciar() {
        console.log(`Você acariciou ${this.nome}. Agora está se sentindo amado <3`)
    }

    falar() {
        console.log("Papagaio! Papagaio!")
    }

    brincar() {
        return this.falar()
    }

    alimentar() {
        return this.falar()
    }
}

pacco = new Papagaio("Pacco", 18, "verde")
pacco.acariciar()
pacco.falar()
pacco.brincar()
pacco.alimentar()



let listaAnimais = [marrie, harry, tico, bella, alfred, hamtaro, pacco]

function chamar(animaisQueResponderam) {
    if (animaisQueResponderam == Cachorro || animaisQueResponderam == Gato.sociavel(true))
    return "Animais que responderam";
}

function chamar(animaisQueNaoResponderam) {
    if (animaisQueNaoResponderam == Hamster || animaisQueNaoResponderam == Papagaio)
    return "Animais que não responderam";
}
