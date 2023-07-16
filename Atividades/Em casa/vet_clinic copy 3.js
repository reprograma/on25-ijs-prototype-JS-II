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

class Mouse extends Animal {
  constructor(nome, idade, cor, checkup) {
    super(nome, idade, cor, checkup);
    this.calmo = false;
  }

  alimentar() {
    console.log(`Hora da minha comida!`);
  }

  brincar() {
    this.calmo = true;
    console.log(`Está calmo`);
  }
  acariciar() {
    console.log(`snif sniff`);
  }

  checkups() {
    super.checkups()
    if (this.calmo) {
      let calmo = `fufufu `;
      console.log(`${this.nome} vou te examinar`);
      console.log(calmo);
    } else {
      this.checkup.pop();
      console.log(this.checkup);
    }
}

 
}

let candy = new Mouse("candy", 1.5 , "branco");

candy.checkups()
candy.brincar()
candy
