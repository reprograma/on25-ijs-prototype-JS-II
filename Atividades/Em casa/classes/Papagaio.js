class Papagaio extends Animal {
  #confianca;
  constructor(nome, idade, cor) {
    super(nome, idade, cor);
    this.consultas = [];
    this.#confianca = false;
  }
  consultar() {
    this.consultas.push(Date());
  }

  falar() {
    if (this.#confianca == true) {
      this.#confianca = false;
      console.log(
        `oi amigo eu sou ${this.nome} e estou feliz!\nagradeço o alimento.`
      );
    } else {
      console.log(`...\n parece que ${this.nome} quer algo`);
    }
  }
  brincar() {}
  acariciar() {}
  alimentar() {
    this.#confianca = true;
    console.log(`voce alimentou e ${this.nome} fica dançando`);
  }
}
