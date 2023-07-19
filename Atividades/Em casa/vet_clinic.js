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

class Gato extends Animal {
  constructor(nome, idade, cor, externo, social, checkup, neutered) {
    super(nome, idade, cor, checkup);
    this.externo = externo;
    this.social = social;
    this.vacina = [];
    this.checkup = [];
    this.neutered = neutered;
  }

  miar() {
    console.log("miau miau miau");
  }

  alimentar() {
    this.social = true;
    console.log(`Miau comi todo o sache. Agora quero carinho`);
  }

  acariciar() {
    if (this.social) {
      console.log(`Rororon`);
    } else {
      console.log("dont touch me zzzzzzzz");
    }
  }

  vacinar(vacinas) {
    this.vacina.push(vacinas);
    console.log(this.vacina);
    super.checkups();
  }

  neuter() {
    this.neutered = true;
    console.log(this.neutered);
    super.checkups();
  }

  checkups() {
    super.checkups();
    if (this.vacina.length > 0) {
      console.log(this.checkup);
    } else if (this.neutered) {
      console.log(`${this.checkup} status realizado`);
    } else if (Gato.neutered === this.neutered) {
      console.log(`${this.checkup} status`);
    }
  }
}

let meowth = new Gato("Meowth", 24, "black", true, false,false);
meowth;
meowth.miar();
meowth.checkups();
meowth.acariciar();
meowth.alimentar();
meowth.acariciar();
meowth.vacinar("flu");
meowth.vacinar("V3");
meowth.vacinar("V5");
meowth.vacinar("Anti-rabies");

meowth.neuter();
