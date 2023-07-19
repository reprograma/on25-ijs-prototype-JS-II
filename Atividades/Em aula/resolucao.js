function quantasChaves() {
    return Object.keys(this).length
}

Object.prototype.quantasChaves = quantasChaves

/* function brincar() {
    if (this.especie === "cachorro"){
        console.log("jogar bola")
    } else if (this.especie === "gato") {
        console.log("rato de brinquedo")
    } else if (this.especie === "cobra") {
        console.log("não brinque!!!")
    }
} */

/* const brincar = () => {
    if (this.especie === "cachorro"){
        console.log("jogar bola")
    } else if (this.especie === "gato") {
        console.log("rato de brinquedo")
    } else if (this.especie === "cobra") {
        console.log("não brinque!!!")
    }
} */

// Object.prototype.brincar = brincar

/* function Cachorro(nome, idade, cor, raça, especie) {
    this.nome = nome,
    this.idade = idade,
    this.cor = cor,
    this.raça = raça,
    this.especie = especie
} // letra maiuscula no inicio, construtor de cachorros */

// zeus = new Cachorro("Zeus", 42, "preto", "labrador", "cachorro")

// console.log(zeus.brincar())
// console.log(zeus.quantasChaves())

/* class Cachorro {
    #segredo 

    constructor(nome, idade, cor, castrado, raça, historico) {
        this.nome = nome,
        this.idade = idade,
        this.cor = cor,
        this.castrado = castrado,
        this.raça = raça,
        this.historico = historico
    } 

    latir() {
        console.log("auauau")
    }
}

sansao = new Cachorro("Sansao", 42, "preto", false, "labrador", "vacinado")
console.log(sansao)
console.log(sansao.brincar()) */

class Animal {
    constructor(nome, idade, cor, especie) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.especie = especie
    }

    brincar() {
        if (this.especie === "cachorro"){
            console.log("jogar bola")
        } else if (this.especie === "gato") {
            console.log("rato de brinquedo")
        } else if (this.especie === "cobra") {
            console.log("não brinque!!!")
        }
    }
}

class Gato extends Animal {}
class Cachorro extends Animal{}

nina = new Gato("Nina", 1.5, "frajola", "gato")
nina.brincar() 

tobias = new Cachorro("Tobias", 2, "Pinscher", "cachorro")
tobias.brincar()