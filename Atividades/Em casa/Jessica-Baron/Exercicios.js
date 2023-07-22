class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
  }

  consultar() {
    this.consultas.unshift(new Date());
  }

  brincar() {
    console.log("Vamos brincaarrr");
  }

  acariciar() {
    console.log("Faça um carinho");
  }

  alimentar() {
    console.log("Alimente-o");
  }
}

class Gato extends Animal {
  constructor(
    nome,
    idade,
    cor,
    castrado,
    externo,
    vacinas = [],
    consultas = [],
    social
  ) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.externo = externo;
    this.vacinas = vacinas;
    this.consultas = consultas;
    this.social = social;
  }

  miar() {
    if (this.social) {
      console.log(`${this.nome} está ronronando`);
    } else {
      console.log(`${this.nome} está rosnando`);
    }
  }

  vacinar(vacina) {
    this.vacinas.push(vacina);
    this.consultas.push("vacinação");
  }

  castrar() {
    if (this.castrado) {
      console.log(`${this.nome} is already neutered`);
    } else {
      this.castrado = true;
      this.consultas.push("castracao");
    }
  }
}

class Cachorro extends Animal {
  constructor(
    nome,
    idade,
    cor,
    castrado,
    raca,
    vacinas = [],
    consultas = [],
    ferido = false
  ) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.raca = raca;
    this.vacinas = vacinas;
    this.consultas = consultas;
    this.ferido = ferido;
  }

  latir() {
    console.log(`${this.nome} is barking`);
  }

  vacinar(vacina) {
    this.vacinas.push(vacina);
    this.consultas.push("vacinação");
  }

  castrar() {
    if (this.castrado) {
      console.log(`${this.nome} is already neutered`);
    } else {
      this.castrado = true;
      this.consultas.push("castracao");
    }
  }

  brincar() {
    super.brincar();
    if (this.ferido) {
      console.log(`${this.nome} está se escondendo porque está ferido`);
    }
  }
}

class Hamster extends Animal {
  constructor(nome, idade, cor, tipo, consultas = []) {
    super(nome, idade, cor);
    this.tipo = tipo;
    this.consultas = consultas;
  }

  brincar() {
    super.brincar();
    console.log(`${this.nome} está brincando na rodinha`);
  }
}

class Papagaio extends Animal {
  constructor(nome, idade, cor, consultas = []) {
    super(nome, idade, cor);
    this.consultas = consultas;
  }

  falar() {
    console.log(`${this.nome} is talking`);
  }

  brincar() {
    super.brincar();
    console.log(`${this.nome} is mimicking sounds`);
  }
}

function chamar(listaAnimais) {
  const animaisChamados = [];

  for (const animal of listaAnimais) {
    if (
      animal instanceof Cachorro ||
      (animal instanceof Gato && animal.social)
    ) {
      animaisChamados.push(animal);
    }
  }

  return animaisChamados;
}

const nina = new Gato("Nina", 1.5, "frajola", true, false, ["raiva"], [], true);
nina.miar();
nina.vacinar("outra vacina");
nina.consultar();
nina.castrar();
nina.brincar();
nina.acariciar();
nina.alimentar();

const zeus = new Cachorro("Zeus", 3.5, "preto", false, "labrador");
zeus.latir();
zeus.vacinar("alguma vacina");
zeus.consultar();
zeus.castrar();
zeus.brincar();
zeus.acariciar();
zeus.alimentar();

const hamtaro = new Hamster("Hamtaro", 1.5, "branco e laranja", "sírio");
hamtaro.consultar();
hamtaro.brincar();
hamtaro.acariciar();
hamtaro.alimentar();

const loro = new Papagaio("Loro", 13, "verde");
loro.falar();
loro.consultar();
loro.brincar();
loro.acariciar();
loro.alimentar();

const animais = [nina, zeus, hamtaro, loro];
const animaisRespondidos = chamar(animais);
console.log(
  `Animais que responderam o chamado: ${animaisRespondidos
    .map((animal) => animal.nome)
    .join(", ")}`
);
