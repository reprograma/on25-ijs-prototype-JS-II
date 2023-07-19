1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

```
function quantasChaves() {
    return Object.keys(this).length //this pq ele precisa saber qual objeto ele precisa contar as chaves
}

Object.prototype.quantasChaves = quantasChaves //object pq os objetos herdam tudo de Object.prototype.

nina.quantasChaves() // o resutado dá 4 considerando o exemplo da aula 
//pode usar tb Object.keys(nina) que ele mostra quais são as chaves
```

// NÃO É BOA PRÁTICA TROCAR OS PROTOTYPES DE OBJETOS  QUE NÃO FORAM CRIADOS POR NÓS


2. A partir do nosso objeto de `Cachorro` da semana passada, escreva um novo construtor que utilize classes. Lembre-se que cachorros precisam `latir()`.

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
    constructor(nome, idade, cor, castrado, raça){
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.raça = raça
        this.historico = []
    }

    latir() {
        console.log("au au au")
    }
}

let zeus = new Cachorro("Zeus", 42, "preto", false, "labrador")
```

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

```
class Gato {}
class Cachorro {}
class Cobra {}
class Papagaio {}
class Hamster {}


function brincar(animal) {
    if {animal instanceof Gato} {
        console.log("Use uma cordinha")
    }

    else if {animal instanceof Cachorro} {
        console.log("Se esconda e depois apareça")
    }

    else if {animal instanceof Papagaio} {
        console.log("Imite ele")
    }

    else if {animal instanceof Hamster} {
        console.log("Alise a cabeça dele")
    }

    else {
        console.log("Melhor não brincar...")
    }
}

let nina = new Gato()
brincar(nina)

let zeus = new Cachorro()
brincar(zeus)

brincar({})
brincar(Celeste)
```
