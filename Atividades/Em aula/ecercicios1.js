class Cachorro {
  constructor(nome, idade, cor, castrado, raça, historico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    this.historico = historico;
  }

  latir() {
    console.log("Au au!");
  }
}

class Gato {
  constructor(nome, idade, cor, raça) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.raça = raça;
  }

  miar() {
    console.log("Miau!");
  }
}

class Cobra {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
  }
}

class Papagaio {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
  }

  falar(frase) {
    console.log(frase);
  }
}



const meuCachorro = new Cachorro("Fido", 2, "marrom", true, "vira-lata", []);
console.log(brincar(meuCachorro)); // Output: Use uma bola para brincar com o cachorro.

const meuGato = new Gato("Miau", 1, "branco", "Siamês");
console.log(brincar(meuGato)); // Output: Use uma varinha com penas para brincar com o gato.

const minhaCobra = new Cobra("Venom", 5, "verde");
console.log(brincar(minhaCobra)); // Output: Não brinque com a cobra!

const meuPapagaio = new Papagaio("Loro", 3, "colorido");
console.log(brincar(meuPapagaio)); // Output: Ofereça um espelho para o papagaio se entreter.

const outroAnimal = { tipo: "Outro" };
console.log(brincar(outroAnimal)); // Output: Use um brinquedo adequado para esse animal.
