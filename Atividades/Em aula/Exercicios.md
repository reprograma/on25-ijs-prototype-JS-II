1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

```
function quantasChaves() {
    return Object.keys(this).length
}

Object.prototype.quantasChaves = quantasChaves

({}).quantasChaves() // 0
({ nome: "Layla" }).quantasChaves() // 1
```

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

```
class Cachorro {
    constructor(nome, idade, cor, castrado, raca) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.raca = raca
        this.historico = []
    }

    latir() {
        console.log("au au au")
    }
}
// como instanciar
let apollo = new Cachorro("Apollo", 2, "branco", false, "pitbull")

// como adicionar novos métodos
Cachorro.prototype.brincar = () => console.log("yipyeeeee")
apollo.brincar()

```

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

```
    class Gato {}
    class Cachorro {}
    class Cobra {}
    class Papagaio {}
    class Hamster {}

    function brincar(animal) {
        if (animal instanceof Gato) {
            console.log("Use uma cordinha" )
        } else if (animal instanceof Cachorro) {
            console.log("Se esconda e depois apareça" )
        } else if (animal instanceof Papagaio) {
            console.log("Imite ele" )
        }  else if (animal instanceof Hamster) {
            console.log("Alise a cabeça dele" )
        } else {
            console.log("melhor não brincar...")
        }
    }
```