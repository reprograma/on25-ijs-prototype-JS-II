//1
function quantasChaves() {
  return Object.keys(this).length;
}

//atrelar ao prototype. porém não é uma boa pratica alterar o prototype do object
Object.prototype.quantasChaves = quantasChaves;
nina.quantasChaves();

//2
class Cachorro {
  constructor(nome, idade, cor, castrado, raca) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = [];
  }
  latir() {
    console.log("AU AU");
  }
  vacinar(vacina) {
    this.historico.push(vacina);
  }
}

let zeus = new Cachorro("Zeus", 42, "preto", false, "labrador");
zeus.vacinar("raiva");

//3
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
