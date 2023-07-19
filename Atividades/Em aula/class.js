class Dogo {
  constructor(nome, idade, cor, castrado, raca) {
    this.name;
    this.idade;
    this.cor;
    this.castrado;
    this.raca;
    this.familia = "canidae"; // liçao 3
    this.historico = [];
  }
  latir() {
    console.log("AuAu!");
  }
}

let Kank = new Dogo("Kank", 10, "cinza", true, "Border Collie");

///////////////////

function brincar() {
  if (this.familia == "canidae") {
    return console.log("brincar de bolinha");
  }
}

Dogo.prototype.brincar = function brincar() {
  if (this.familia == "canidae") {
    return console.log("brincar de bolinha");
  }
};

// Object.defineProperty(Dogo, "brincar", {});

///////////////////////////////////////////

class Historic {
  constructor() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimento = [];
  }
  consultar() {
    this.historico.consultas.push(Date());
  }
  vacinar(value) {
    this.historico.vacinas.push(value);
  }
  examinar(value) {
    this.historico.procedimento.push(value);
  }
}

function brincar() {
  if (this.familia == "canidae") {
    return console.log("brincar de bolinha");
  } else if (this.familia == "felinus") {
    return console.log("brincar de laser");
  }
}

class Animal {
  constructor(nome, idade, cor) {
    this.nome;
    this.idade;
    this.cor;
  }
  
}

class Cat extends Animal {
  constructor(nome, idade, cor, raca) {
    super(nome, idade, cor);
    this.raca;
    this.historico = new Historic();
  }
  super()
  miar() {
    console.log("Miau!");
  }
}


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