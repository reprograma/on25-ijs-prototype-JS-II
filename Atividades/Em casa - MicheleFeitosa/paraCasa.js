class Animais {
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
    console.log(`${this.nome} está brincando.`);
  }
  acariciar() {
    console.log(`${this.nome} está sendo acariciado.`);
  }
  alimentar() {
    console.log(`${this.nome} está sendo alimentado.`);
  }
}

class Gato extends Animais {
  constructor(nome, idade, cor, castrado, externo, social) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.externo = externo;
    this.social = social;
    this.vacinas = [];
    this.comidasFavoritas = ["frango", "sachê", "peixe"];
  }
  miar() {
    console.log(this.social ? "miaaaaaau" : "grrrrrr");
  }
  castrar() {
    if (!this.castrado) {
      console.log(`${this.nome} foi castrada(o)`);
      this.castrado = true;
      this.consultar(); // Adiciona uma nova consulta
    } else {
      throw new Error(`${this.nome} já é castrada(o)`);
    }
  }
  vacinar(vacina) {
    this.vacinas.push(vacina);
    this.consultar();
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
      console.log(`${this.nome} está silvando ao ser acariciado.`);
    }
  }
}


bela.vacinar("raiva")  
bela.vacinas // saida: ['raiva']
bela.castrar() // saida:  Bela foi castrada(o)

class Cachorro extends Animais {
  #ferido;

  constructor(nome, idade, cor, castrado, raca, ferido) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.raca = raca;
    this.#ferido = ferido;
    this.vacinas = [];
  }

  latir() {
    console.log("Au au!");
  }
  castrar() {
    if (!this.castrado) {
      console.log(`${this.nome} foi castrado.`);
      this.castrado = true;
      this.consultar(); // Adiciona uma nova consulta
    } else {
      throw new Error(`${this.nome} já é castrado.`);
    }
  }
  vacinar(vacina) {
    this.vacinas.push(vacina);
    this.consultar(); // Adiciona uma nova consulta
  }
  brincar() {
    if (this.#ferido) {
      console.log(`${this.nome} está ferido e esta se encondendo, precisa de cuidados!`);
    } else {
      console.log(`${this.nome} está feliz e brincando!`);
    }
  }
  setFerido(ferido) {
    this.#ferido = ferido;
  }
}

gudan.brincar(); // Saída: "Gudan está brincando."
gudan.setFeridotFerido(true);
gudan.brincar(); // Saída: "Gudan está ferido e se escondendo."
gudan.vacinar("raiva");


class Hamster extends Animais {
  constructor(nome, idade, cor, tipo) {
    super(nome, idade, cor);
    this.tipo = tipo;
  }
  consultar() {
    super.consultar();
    console.log(this.brincar(), `${this.nome} está brincando ao ser consultado`);
  }
}

pipoca.consultar() // saida: pipoca está brincando ao ser consultado

class Papagaio extends Animais {
  constructor(nome, idade, cor) {
    super(nome, idade, cor);
  }

  falar() {
    console.log(`${this.nome} está falando: "Oi, Oi, Oi!"`);
  }
  brincar() {
    this.falar();
  }
  alimentar() {
    this.falar();
  }
}

// Função para chamar e retornar os animais que responderam 
function chamar(listaAnimais) {
  const animaisQueResponderam = listaAnimais.filter(animal => animal instanceof Cachorro || (animal instanceof Gato && animal.social));
  animaisQueResponderam.forEach(animal => console.log(`${animal.nome} respondeu e veio brincar.`));
  return animaisQueResponderam;
}

// Criando instâncias dos animais
let bela = new Gato("Bela", 9, "tigrada", false, false, true);
let marciaTeresa = new Gato("Márcia Teresa", 18, "frajola", true, false, true);
let gudan = new Cachorro("Gudan", 20, "marrom", false, "Labrador", false);
let pipoca = new Hamster("pipoca", 4, "marrom", "hamster");
let zezinho = new Papagaio("Zezinho", 2, "verde");

// array com os animais 
const listaAnimais = [bela, marciaTeresa, gudan, pipoca, zezinho];

// Chamando a função
const animaisQueResponderam = chamar(listaAnimais);