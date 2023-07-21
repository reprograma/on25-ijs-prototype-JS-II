//construtor Animais
class Animais {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
  }
  consultar(data) {
    this.consultas.unshift(data);
  }
  brincar() {
    console.log(`Você está brincando com ${this.nome}... `);
  }
  acariciar() {
    console.log(`Você está acariciando ${this.nome}!`);
  }
  alimentar() {
    console.log(`Você está alimentando ${this.nome}!`);
  }
}

//construtor Domesticos
class Domesticos extends Animais {
  constructor(nome, idade, cor, castrado) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.vacinas = [];
  }
  vacinar(vacina, data) {
    this.vacinas.push(vacina);
    this.consultar(data);
  }
  castrar(data) {
    if (this.castrado) {
      return "O animal já foi castrado.";
    } else {
      this.consultar(data);
      this.castrado = true;
      return `O animal foi castrado em ${data}`;
    }
  }
}

//construtor Gato
class Gato extends Domesticos {
  constructor(nome, idade, cor, castrado, externo, social) {
    super(nome, idade, cor, castrado);
    this.externo = externo;
    this.social = social;
  }
  miar() {
    console.log("miau miau");
  }
  acariciar() {
    if (this.social === true) {
      console.log("ron ron ron");
    } else {
      console.log(
        `${this.nome} não é sociável, ele(a) está silvando. Alimente-o(a) com sua comida favorita, ele(a) vai ser social e pode ser acariciado(a)`
      );
    }
  }
  alimentar(comida) {
    if (this.social === false && (comida === "peixe" || comida === "frango" || comida === "sache")) {
      this.social = true;
      console.log(`Você alimentou ${this.nome} e agora ele é sociável.`);
    }
  }
}

let nina = new Gato("nina", 2, "branca", false, false, false);
nina.miar(); //miau miau
nina.vacinar("raiva", "15/05/2020");
nina.consultas;
nina.castrar("15/08/2021");
nina.acariciar(); // nina não é sociável, ele(a) está silvando. Alimente-o(a) com sua comida favorita, ele(a) vai ser social e pode ser acariciado(a)
nina.alimentar("peixe"); //Você alimentou nina e agora ele é sociável.
nina.acariciar(); //ron ron ron

//construtor Cachorro
class Cachorro extends Domesticos {
  #ferimento;
  constructor(nome, idade, cor, castrado, raca, ferido, ferimento) {
    super(nome, idade, cor, castrado);
    this.raca = raca;
    this.ferido = ferido; //false ou true
    this.#ferimento = ferimento; //descrição do ferimento
  }
  latir() {
    console.log("au au au");
  }
  brincar() {
    if (this.ferido) {
      console.log(
        `O cachorro está escondido por estar ferido: ${this.#ferimento}`
      );
    } else {
      console.log("Não estou ferido e adoro brincar");
    }
  }
}
let pancho = new Cachorro(
  "Pancho",
  12,
  "ruivo",
  false,
  "Pastor Belga Malinois",
  true,
  "machucou a pata"
);

pancho.brincar(); //O cachorro está escondido por estar ferido: machucou a pata
pancho.ferido = false;
pancho.brincar(); // Não estou ferido e adoro brincar

//construtor Hamster
class Hamster extends Animais {
  constructor(nome, idade, cor, tipo) {
    super(nome, idade, cor);
    this.tipo = tipo;
    this.tranquilo = false;
  }
  consultar(data) {
    if (!this.tranquilo) {
      this.brincar();
    }
    super.consultar(data);
    console.log("...Uma nova data de consulta foi adicionada.");
  }
  brincar() {
    super.brincar();
    this.tranquilo = true;
  }
}

let hamtaro = new Hamster("hamtaro", 1, "branco", "sírio");
hamtaro.consultar("15/08/2022");
// Você está brincando com hamtaro e agora ele está tranquilo...
//...Uma nova data de consulta foi adicionada.
hamtaro.brincar(); //Você está brincando com hamtaro...
hamtaro.acariciar(); // Você está acariciando hamtaro!
hamtaro.alimentar(); // Você está alimentando hamtaro!

//construtor Papagaio
class Papagaio extends Animais {
  constructor(nome, idade, cor) {
    super(nome, idade, cor);
  }
  falar() {
    console.log("Oi, eu sou um papagaio!");
  }
  brincar() {
    super.brincar();
    this.falar();
  }
  alimentar() {
    super.alimentar();
    this.falar();
  }
}

let gaio = new Papagaio("Gaio", 39, "branco");
gaio.falar(); //Oi, eu sou um papagaio!
gaio.consultar("18/12/2019");
gaio.brincar();
// Você está brincando com Gaio...
// Oi, eu sou um papagaio!
gaio.acariciar(); // Você está acariciando Gaio!
gaio.alimentar();
// Você está alimentando Gaio!
// Oi, eu sou um papagaio!

function chamar(animais) {
  let animaisQueVieram = [];
  for (let animal of animais) {
    if ((animal instanceof Gato && animal.social) || animal instanceof Cachorro) {
      animaisQueVieram.push(animal.nome);
    }
  }
  return animaisQueVieram;
}
console.log(chamar([nina, pancho, gaio, hamtaro]));
