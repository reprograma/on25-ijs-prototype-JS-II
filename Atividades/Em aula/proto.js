Object.prototype.quantasChaves = function quantasChaves() {
  Object.keys(this).length;
};

function Gato(name, idade, cor) {
  this.name;
  this.idade;
  this.cor;
}

// james = new Gato("James", 10, "cinza");

Gato.prototype.especie = "felino";

james = {
  nome: "James",
  idade: 10,
  cor: "cinza",
};

Object.keys(james);

// resultado = 3

// Object.keys() vai mostrar keys que estao fora de __proto__ então
// o resultado vai ser 3 pq so tem nome, idade, cor.

// Não é boa pratica add coisas em algo que a linguagem ja deu como
// Object
