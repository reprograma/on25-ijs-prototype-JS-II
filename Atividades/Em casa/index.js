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
//-----------------------------------------------------------------------
class Gato extends Animal {
  constructor(nome, idade, cor, externo, social, checkup) {
    super(nome, idade, cor, checkup);
    this.externo = externo;
    this.social = social;
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
}

//-------------------------------------------------------------------

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
      console.log(`${this.nome}, vamos para o veterinário agora!`);
    } else {
      console.log(`${this.nome} onde você está? Vamos brincar`);
      console.log(`Au Au Au ...Cadê minha bolinha. Au Au Au`);
    }
  }
}

//-----------------------------------------------------------------

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

//-------------------------------------------------------------------

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
    super.checkups();
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

//--------------------------------------------------------------------------------

function chamar(animal) {
  if (animal instanceof Gato) {
    console.log("Use uma cordinha");
  } else if (animal instanceof Cachorro) {
    console.log("Use uma cordinhabolinh");
  }
}
