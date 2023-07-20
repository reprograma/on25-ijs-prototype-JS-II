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

  brincar(brincadeira) {
    console.log(`brincando de ${brincadeira} com ${this.nome}`);
  }

  acariciar() {
    console.log(`Você está acariciando o(a) ${this.nome} *-*`);
  }

  alimetar() {
    console.log(`Você está alimentando o(a) ${this.nome} :)`);
  }
}

class Domestico extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade, cor);

    this.castrado = false;
    this.vacinas = [];
    this.consultas = [];
  }

  vacinar(vacina) {
    this.vacinas.push(vacina);
    this.consultar();
  }

  castrar(data) {
    this.castrado = true;
    this.consultar(data);
  }
}

class Gatos extends Domestico {
  constructor(nome, idade, cor) {
    super(nome, idade, cor);
  }

  miar() {
    console.log('miau miau');
  }

  alimetar(comida) {
    if ((comida == 'frango') | (comida == 'sachê') | (comida == 'peixe')) {
      console.log('gato alimetado e sociável!!!');
    } else {
      console.log('gato alimentado mas não sociável!');
    }
  }
}

let charmoso = new Gatos('Charmoso', 12, 'branco'); //idade em meses

class Cachorros extends Domestico {
  #ferido;

  constructor(nome, idade, cor, raca) {
    super(nome, idade, cor);

    this.raca = raca;
    this.#ferido = false;
  }

  latir() {
    console.log('auu auu');
  }

  mudarFerido(ferido) {
    this.#ferido = ferido;
  }

  brincar(brincadeira) {
    if (this.#ferido) {
      console.log('cachorro feriado, não pode brincar.');
      return;
    }
    console.log(`brincando de ${brincadeira} com ${this.nome}`);
  }
}

let boris = new Cachorros('Bóris', 36, 'branco', 'shitzu'); //idade em meses
