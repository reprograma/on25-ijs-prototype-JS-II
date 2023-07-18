function quantasChaves(value) {
  this.value = value;
  return Object.keys(value);
}

// quantasChaves(nina);

// 2. A partir do nosso objeto de Cachorro da semana passada, escreva um novo construtor que utilize classes. Lembre-se que cachorros precisam latir().

// {
//     nome: "Zeus",
//     idade: 42, //em meses
//     cor: "preto",
//     castrado: false,
//     raça: "labrador",
//     historico: []
// }

class Cachorro {
  constructor(nome, idade, cor, castrado, raca) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;

    //this.historico = new historico();
  }
  latir() {
    console.log("au au");
  }
}

let apollo = new Cachorro("Apollo", 86, "branco", true, "vira-lata");
apollo.latir();

Cachorro.prototype.brincar = () => {
  console.log("ypieee");
};

/* console.log(apollo); */
