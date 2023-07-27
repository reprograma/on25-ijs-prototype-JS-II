class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
  }
  consultar() {
    this.consultas.push(new Date());
  }
  brincar() {
    console.log(`${this.nome} gosta muito de brincar.`);
  }
  acariciar() {
    console.log(`${this.nome} gosta de ser acariciada.`);
  }
  alimentar() {
    console.log(`${this.nome}  esta bem alimentada.`);
  }
  castrar() {
    if (!this.castrado) {
      console.log(`${this.nome} foi castrada`);
      this.castrado = true;
      this.consultar();
    } else {
      throw new Error(`${this.nome} já é castrada`);
    }
  }
  vacinar(vacina) {
    this.vacinas.push(vacina);
    this.consultar();
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor, castrado, externo, social) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.externo = externo;
    this.social = social;
    this.vacinas = [];
    this.comidasFavoritas = ["frango", "sachê", "peixe"];
  }
  miar() {
    console.log(this.social ? "miau" : "miiii");
  }

  alimentar(comida) {
    this.sociavel = this.comidasFavoritas.includes(comida);
    console.log(`${this.nome} está comendo ${comida}.`);
  }
  acariciar() {
    if (this.social) {
      console.log(
        `${this.nome} está ${
          this.sociavel ? "ronronando" : "sendo"
        } acariciado.`
      );
    } else {
      console.log(`${this.nome} está salivando quando acariciada.`);
    }
  }
}

agatha.vacinar("raiva");
agatha.vacinas;
agatha.castrar();

class Cachorro extends Animal {
  #ferido;

  constructor(nome, idade, cor, raca, ferido) {
    super(nome, idade, cor);
    this.raca = raca;
    this.#ferido = ferido;
    this.vacinas = [];
  }

  latir() {
    console.log("Auuuu!");
  }
  brincar() {
    if (this.#ferido) {
      console.log(
        `${this.nome} está machucado e se escondendo, precisa de cuidados!`
      );
    } else {
      console.log(`${this.nome} está se divertindo!`);
    }
  }
  setFerido(ferido) {
    this.#ferido = ferido;
  }
}

sook.brincar();
sook.setFerido(true);
sook.brincar();
sook.vacinar("raiva");
sook.castrar();

class Hamster extends Animal {
  constructor(nome, idade, cor, tipo) {
    super(nome, idade, cor);
    this.tipo = tipo;
  }
  consultar() {
    super.consultar();
    console.log(this.brincar(), `${this.nome} está se divertindo na consulta`);
  }
}

joey.consultar();

class Papagaio extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade, cor);
  }

  falar() {
    console.log(`${this.nome} está falando: "Da o pé louro!"`);
  }
  brincar() {
    this.falar();
  }
  alimentar() {
    this.falar();
  }
}

let agatha = new Gato("agatha", 1, "tricolor", false, false, true);
let alexa = new Gato("alexa", 3, "branca", true, false, true);
let sook = new Cachorro(
  "sook",
  10,
  "branca",
  false,
  "cotton de tullear",
  false
);
let joey = new Hamster("joey", 1, "albina", "hamster");
let teko = new Papagaio("teko", 7, "verde e amarelo");
