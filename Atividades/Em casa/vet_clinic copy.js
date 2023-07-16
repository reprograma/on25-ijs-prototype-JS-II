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
    // this.checkup.push(checkupDate);
    // this.checkup.sort((dateA, dateB) => dateB - dateA);
    this.checkup.unshift(checkupDate);
    this.checkup.sort((dateA, dateB) => dateB - dateA);
    console.log(this.checkup);
  }
}

class Dog extends Animal {
  #escondido;

  constructor(nome, idade, cor, checkup, escondido) {
    super(nome, idade, cor, checkup);
    this.#escondido = escondido;
    this.ferido = false;
  }

  bark() {
    console.log("Au Au Au");
  }

  alimentar() {
    console.log(`Quero franguinho, estou cansada de ração!`);
  }

  acariciar() {
    console.log(`AU AU AU coça minha barrinha`);
  }

  esconder() {
    this.ferido = true;
    console.log(`buah buah, vou para minha casinha`);
  }

  brincar() {
    if (this.ferido) {
      let choro = `Não quero brincar, ${this.#escondido}`;
      console.log(`${this.nome} onde você está? Vamos brincar`);
      console.log(choro);
      console.log(`${this.nome}, vamos para o veterinário agora!`)
    } else {
      console.log(`${this.nome} onde você está? Vamos brincar`);
      console.log(`Au Au Au ...Cadê minha bolinha. Au Au Au`);
    }
  }
}

let suzy = new Dog("Suzy", 24, "black",true,"minha perna está doendo");
suzy;
suzy.bark();
suzy.checkups();
suzy.esconder();
suzy.brincar();
suzy.escondido;
suzy.alimentar();
suzy.acariciar();


 // nome: "Zeus",
// idade: 3.5
// cor: "preto",
// castrado: false, --falta
// raça: "labrador",  --falta
// vacinas: [], --falta
// consultas: [],
// ferido: false,

// latir(),
// vacinar(),
// consultar(),
// castrar(),  --falta
// brincar(),
// acariciar(),