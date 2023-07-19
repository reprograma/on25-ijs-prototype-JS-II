class Dog extends Animal {
  static comidas = [`biscoito scooby`, `osso`];
  #ferido;
  constructor(nome, idade, cor, raca) {
    super(nome, idade, cor);
    this.castrado = false;
    this.raca;
    this.social = true;
    this.#ferido = true;
    this.historico = new Historic();
  }

  examinar(value) {
    this.historico.examinar(value);
    this.historico.consultar();
    this.#ferido = false;
  }

  latir() {
    console.log(`Au!Au!`);
  }
  acariciar() {
    console.log(
      `${this.nome} demonstra felicidade e late para voce quando para de fazer carinho`
    );
  }

  alimentar(value) {
    if (Dog.comidas.includes(value)) {
      console.log(
        `o ${this.nome} esta a se deliciar!\nassim abanando o rabo parecendo que quer mais!`
      );
    } else {
      console.log(
        `os cachorros não gostam de ${value}\nsó gostam de ${Dog.comidas.toString()}`
      );
    }
  }

  brincar() {
    if (this.#ferido == false) {
      console.log(`${this.nome} brinca normalmente :3`);
    } else {
      console.log(`${this.nome} parece estar com dor\n-status ferido-`);
    }
  }
  castrar() {
    if (this.castrado == false) {
      this.castrado = true;
      console.log(`${this.nome} castrado`);
      this.historico.consultar();
    } else {
      this.castrado = false;
      this.historico.consultas.shift();
      console.log(`corrigido. ${this.nome} não castrado`);
    }
  }
}
