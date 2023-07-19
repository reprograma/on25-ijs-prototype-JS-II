class Hamster extends Animal {
  #confianca;
  constructor(nome, idade, cor, tipo) {
    super(nome, idade, cor);
    this.tipo;
    this.consultas = [];
    this.#confianca = true;
  }
  consultar() {
    this.consultas.push(Date());
    this.#confianca = false;
  }
  brincar() {
    if (this.#confianca == false) {
      this.#confianca = true;
      console.log(
        `${this.nome} parece estar contente e mais calmo\n+confiança restaurada+`
      );
    } else {
      console.log(`parece que ${this.nome} já esta muito feliz`);
    }
  }
  acariciar() {
    console.log(`${this.nome} esta mais calmo`);
  }
  alimentar() {
    console.log(`hmm... alimentos\n${this.nome} parece satisfeito`);
  }
}
