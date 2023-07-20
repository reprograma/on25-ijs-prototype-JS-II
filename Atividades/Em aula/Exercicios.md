1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

## Resolução exercício ##
function quantasChaves() {
    return Object.keys(this).length
}
Object.prototype.quantasChaves = quantasChaves
Object.nina = quantasChaves
//f quantasChaves
Object.keys(nina)
//(4) ['nome', 'idade', 'cor', 'castrado'] 


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
## Resolução exercício ##
class Cachorro {
    constructor(nome, idade, cor, castrado, raca, historico) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.raca = raca
        this.historico = []
    }
    latir() {
        console.log("Au! Au!")
    }
}

//como instanciar
let perola = new Cachorro("Perola", 120, "preto", true, "sem raça definida")

//como adicionar novos métodos
Cachorro.prototype.brincar = () => console.log("pega bolinha")
perola.brincar()

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

## Resolução exercício ##
//problema caixa de joias

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
            console.log("Acaricie a cabeça dele" )
        } else {
            console.log("melhor não brincar...")
        } else {
            console.log("Classe de animal não reconhecida")
        }
    }
