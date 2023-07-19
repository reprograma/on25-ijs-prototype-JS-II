1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

### Lição feita 🤣👌

```
Object.prototype.quantasChaves = function quantasChaves() {
  Object.keys(this).length;
};

function Gato(name, idade, cor) {
  this.name;
  this.idade;
  this.cor;
}

let james = new Gato("James", 10, "cinza");

Gato.prototype.especie = "felino";

james = {
  nome: "James",
  idade: 10,
  cor: "cinza",
};

Object.keys(james);

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
class Dogo {
  constructor(nome, idade, cor, castrado, raca) {
    this.name;
    this.idade;
    this.cor;
    this.castrado;
    this.raca;
    this.historico = [];
  }
  latir() {
    console.log("AuAu!");
  }
}


const Kank = new Dogo("Kank", 10, "cinza", true, "Border Collie");


```

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

```
function brincar(animal) {
  if (animal instanceof Dogo) {
    console.log("brincar de bolinha");
  } else if (animal instanceof Cat) {
    console.log("brincar de laser");
  } else if (animal instanceof Papagaio) {
    console.log("brincar de cantar");
  } else if (animal instanceof Hamister) {
    console.log("brincar de roda de hamister");
  } else if (animal instanceof Macaco) {
    console.log("brincar de jogar banana");
  } else {
    console.log("não da para brincar");
  }
}

```
