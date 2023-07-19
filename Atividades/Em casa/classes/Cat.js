class Cat extends Animal {
  static comidas = ["frango", "sache", "peixe"];
  constructor(nome, idade, cor) {
    super(nome, idade, cor);
    this.castrado = false;
    this.externo = false;
    this.social = false;
    this.historico = new Historic();
  }

  miar() {
    console.log("Miau!");
  }
  acariciar() {
    if (this.social == false) {
      console.log(`${this.nome} esta salivando`);
    } else {
      console.log(`${this.nome} esta ronronando e te amando`);
    }
  }
  alimentar(value) {
    if (Cat.comidas.includes(value)) {
      this.social = true;
      console.log(
        `o ${this.nome} esta a se deliciar!\nassim ficando mais proximo a você :3`
      );
    } else {
      console.log(
        `os gatinhos não gostam de ${value}\nsó gostam de ${Cat.comidas.toString()}`
      );
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
  brincar() {
    console.log(`${this.nome} esta se divertindo com a brincadeira`);
  }
}
