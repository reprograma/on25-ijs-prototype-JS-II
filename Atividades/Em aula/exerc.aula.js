//1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

function quantasChaves() {
  return Object.keys(this).length;
}

//Alteração do prototype(lembrando que não é uma boa pratica)

Object.prototype.quantasChaves = quantasChaves;
nina.quantasChaves();

//2. A partir do nosso objeto de `Cachorro` da semana passada, escreva um novo construtor que utilize classes. Lembre-se que cachorros precisam `latir()`.

class Cachorro {
  constructor(nome, idade, cor, castrado, raca) {
    this.name = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = [];
  }
  latir() {
    console.log("Au Au");
  }
  vacinar(vacina) {
    this.historico.push(vacina);
  }
}

let zeus = new Cachorro("Zeus", 42, "preto", false, "labrador");
zeus.vacinar("raiva");

/*3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal.
 A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e,
  baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.*/

class Gato {}
class Cachorro {}
class Cobra {}
class Papagaio {}

function brincar(animal) {
  if (animal instanceof Gato) {
    return "brinque com uma corda.";
  } else if (animal instanceof Cachorro) {
    return "brinque com uma bolinha.";
  } else if (animal instanceof Papagaio) {
    return "brinque falando com ele.";
  } else {
    return "não brinque com esse animal, é perigoso!";
  }
}

let nina = new Gato();
brincar(nina);
let apolo = new Cachorro();
brincar(apolo);
let severina = new Cobra();
brincar(severina);
let gaio = new Papagaio();
brincar(gaio);
