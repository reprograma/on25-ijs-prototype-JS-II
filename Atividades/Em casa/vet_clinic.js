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
    this.checkup.push(checkupDate);
    this.checkup.sort((dateA, dateB) => dateB - dateA);
    console.log(this.checkup);
  }
}

// class Gato extends Animal {
//   constructor(nome, idade, cor, externo, social, checkup) {
//     super(nome, idade, cor, checkup);
//     this.externo = externo;
//     this.social = social;
//   }

//   miar() {
//     console.log("miau miau miau");
//   }

//   alimentar() {
//     this.social = true;
//     console.log(`Miau comi todo o sache. Agora quero carinho`);
//   }

//   acariciar() {
//     if (this.social) {
//       console.log(`Rororon`);
//     } else {
//       console.log("dont touch me zzzzzzzz");
//     }
//   }
// }

// let meowth = new Gato("Meowth", 24, "black", true, false);
// meowth;
// meowth.miar();
// meowth.checkups();
// meowth.acariciar();
// meowth.alimentar();
// meowth.acariciar();

