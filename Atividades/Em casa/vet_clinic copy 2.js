class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.checkup = [];
  }

  checkups() {
    let tempo = new Date();
    let checkupDate = tempo.toGMTString();
    this.checkup.unshift(checkupDate);
    this.checkup.sort((dateA, dateB) => dateB - dateA);
    console.log(this.checkup);
  }
}

class Parrot extends Animal {
  constructor(nome, idade, cor, checkup) {
    super(nome, idade, cor, checkup);
    this.comida = false;
    this.brinquedo = false;
  }

  alimentar() {
    this.comida = true;
    console.log(`Hora da minha comida!`);
  }

  brincar() {
    this.brinquedo = true;
    console.log(`Hora de brincar om minha cordinha!`);
  }
  acariciar() {
    console.log(`loro, loro`);
  }

  falar() {
    if (this.brinquedo || this.comida) {
      console.log(`${this.nome}, me conte uma piada`);
      console.log(
        "...Tentaram me vender um óculos sem armação. Não comprei, era armação. hahaha"
      );
    } else {
      console.log(`${this.nome} me conte uma piada`);
      console.log(`...............`);
    }
  }
}

let jade = new Parrot("Jade", 13, "verde");
jade.falar();
jade.falar();
jade.checkups()
