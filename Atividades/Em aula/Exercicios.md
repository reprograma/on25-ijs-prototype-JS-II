1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

function quantasChaves(){
    return Object.keys(this).length
}

Object.prototype.quantasChaves = quantasChaves

nina.quantasChaves()

2. A partir do nosso objeto de `Cachorro` da semana passada, escreva um novo construtor que utilize classes. Lembre-se que cachorros precisam `latir()`.
```
{
    nome: "Zeus",
    idade: 42, //em meses
    cor: "preto",
    castrado: false,
    raça: "labrador",
    historico: []
}
```

class Cachorro {
    constructor(nome, idade, cor, castrado, raça) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = cor
        this.raça = raça
        this.historico = []
    }

    latir (){
        console.log("au au")
    }

}

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

class Animal {
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }

    brincar() {
        console.log("Meu brinquedo favorito é: ")
    }
}

class Gato extends Animal{
 brincar (){
     super.brincar()
    console.log("Novelo de lã")
}
}

class Dog extends Animal{
 brincar (){
     super.brincar()
    console.log("Bolinha")
}
}

class Cobra extends Animal{
 brincar (){
     super.brincar()
    console.log("ratinhos de brinquedo")
}
}

class Papagaio extends Animal{
 brincar (){
     super.brincar()
    console.log("ursinho de pelúcia")
}
}

class Hamster extends Animal{
 brincar (){
     super.brincar()
    console.log("rodinhas")
}
}

Brutos = new Dog("Brutos", 3, "preto")

Cams = new Hamster("Cams", 1, "mesclado")

Brutos.brincar()
Cams.brincar()