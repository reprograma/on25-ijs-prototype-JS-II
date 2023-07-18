class AnimalDomestico {
  constructor(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
    this.vacinas = [];
    this.castrado = castrado;
  }
  consultar(data) {
    this.consultas.unshift(data);
  }
  vacinar(vacina) {
    this.vacinas.push(vacina);
  }
}

class Gato extends AnimalDomestico {
  constructor(nome, idade, cor, castrado, externo, social) {
    super(nome, idade, cor, castrado);
    this.externo = externo;
    this.social = social;
    this.consultas = [];
    this.vacinas = [];
  }
  miar() {
    console.log("miau miau");
  }
  brincar() {
    console.log(`${this.nome} use uma varinha`);
  }
  acariciar() {
    if (this.social == true) {
      console.log("ron ron ron");
    } else {
      console.log("schiiii");
    }
  }
  vacinar(vacina, data) {
    this.vacinas.push(vacina);
    this.consultar(data);
  }

  alimentar() {
    if (this.social == false) {
      console.log(`${this.nome} recebe um delicioso peixe!`);
      return this.social == true;
    }
  }
}

Gato.prototype.especie = "doméstico";

nina = new Gato("Nina", 1.5, "frajola", true, false, false);
nina.vacinar("raiva", "2023-5-12");

class Cachorro extends AnimalDomestico {
  #ferido;
  constructor(nome, idade, cor, castrado, raca, ferido) {
    super(nome, idade, cor, castrado);
    this.raca = raca;
    this.#ferido = ferido;
    this.consultas = [];
    this.vacinas = [];
  }
  latir() {
    console.log("au au");
  }

  acariciar() {
    console.log(`${this.nome} abana o rabinho`);
  }
  brincar() {
    if (this.#ferido == true) {
      console.log(`${this.nome} está ferido e precisa de cuidados!`);
    }
  }
  vacinar(vacina, data) {
    this.vacinas.push(vacina);
    this.consultar(data);
  }
}

Cachorro.prototype.especie = "doméstico";

Cachorro.prototype.consultar = (dataConsulta) => {
  this.consultas.push(dataConsulta);
};

Cachorro.prototype.vacinar = (vacina) => {
  this.vacinas.push(vacina);
};

zeus = new Cachorro("zeus", 3.5, "preto", false, "labrador", true);

class AnimalExotico {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
  }

  consultar() {
    this.consultas.push(new Date());
  }
}

class Hamster extends AnimalExotico {
  constructor(nome, idade, cor, tipo) {
    super(nome, idade, cor);
    this.tipo = tipo;
  }
  acariciar() {
    console.log(`${this.nome} vira uma bolinha`);
  }
  brincar() {
    console.log(`${this.nome} se exercita na rodinha`);
  }
  alimentar() {
    console.log(`${this.nome} come frutinhas`);
  }

  consultar() {
    return this.brincar();
  }
}

Hamster.prototype.especie = "exótico";

iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio");
console.log(iogurte);

class Papagaio extends AnimalExotico {
  constructor(nome, idade, cor) {
    super(nome, idade, cor);
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
  }
  falar() {
    console.log("Que loucura jovem!");
  }
  brincar() {
    console.log(`${this.nome} suba na minha mão`);
    return this.falar();
  }
  acariciar() {
    console.log(`Acaricia o peito de ${this.nome}`);
  }

  alimentar() {
    console.log(`${this.nome} come frutinhas`);
    return this.falar();
  }
}

Papagaio.prototype.especie = "exótico";

jose = new Papagaio("José", 13, "verde");
