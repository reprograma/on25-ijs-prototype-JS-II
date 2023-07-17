1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

```
function quantasChaves() {
  console.log(Object.keys(this).length);
}

Object.prototype.quantasChaves = quantasChaves;
nina.quantasChaves(); //4
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
        this.historico = new HistoricoMedico()
    }

    latir() {
        console.log("AU AU")
    }
}

class HistoricoMedico {
    constructor() {
        this.vacinas = []
        this.consultas = []
    }
}

let zeus = new Cachorro("Zeus", 42, "preto", false, "labrador")
```

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

```
class Gato(especie) {
    this.especie = especie
}
class Cachorro(especie) {
    this.especie = especie
}
class Cobra(especie) {
    this.especie = especie
}
class Papagaio(especie) {
    this.especie = especie
}
class Hamster(especie) {
    this.especie = especie
}

function brincar() {
    if(this.especie === "gato") {
        console.log("Usar um ratinho de borracha")
    } else if(this.especie === "cachorro") {
        console.log("Usar um osso de borracha")
    } else if(this.especie === "cobra") {
        console.log("Não brincar")
    } else if(this.especie === "papagaio") {
        console.log("Falar frases para ele")
    } else {
        console.log("Animal não listado")
    }
}

gato.brincar() //Usar um ratinho de borracha
cachorro.brincar() //Usar um osso de borracha
cobra.brincar() //Não brincar
papagaio.brincar() //Falar frases para ele
iguana.brincar() //Animal não listado
```

```
class Gato {}
class Cachorro {}
class Cobra {}
class Papagaio {}
class Hamster {}

function brincar(animal) {
    if(animal instanceof Gato) {
        console.log("use a cordinha")
    } else if(animal instanceof Cachorro) {
        console.log("Se enconda depois apareça")
    } else if(animal instanceof Papagaio) {
        console.log("Imita ele")
    } else if(animal instanceof Hamster) {
        console.log("Alise a cabeça dele")
    } else {
        console.log("melhor não brincar...")
    }
}
```
