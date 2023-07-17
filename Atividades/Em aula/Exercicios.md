1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

```
Object.prototype.quantasChaves = function() {
    return Object.keys(this).length;
}

nina.quantasChaves();
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

Resolução:
```
class Cachorro{
    constructor(nome, idadeMeses, cor, castrado, raca){
        this.nome = nome,
        this.idade = idadeMeses,
        this.cor = cor,
        this.castrado = castrado,
        this.raca = raca,
        this.historico = []
    }

    latir() { console.log("au au au au") }
}

let zeus = new Cachorro("Zeus", 42, "preto", false, "labrador")
```

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

```
class Gato{}
class Cachorro{}
class Cobra{}
class Papagaio{}
class Hamster{}

function brincar(animal){
    switch(true) {
    case animal instanceof Gato:
      console.log("Brincar com corda");
      break;
    case animal instanceof Cachorro:
      console.log("Brincar com bola");
      break;
    case animal instanceof Cobra:
      console.log("Não dá pra brincar com cobra, cuidado!");
      break;
    case animal instanceof Papagaio:
      console.log("Brincar dizendo frases para ele repetir");
      break;
    case animal instanceof Hamster:
      console.log("Brincar fazendo carinho");
      break;
    default:
      console.log("Animal desconhecido");
  }
}
```