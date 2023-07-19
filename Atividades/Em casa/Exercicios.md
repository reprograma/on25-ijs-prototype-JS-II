Nome:Ellie

# Lição feita!

```js
class Historic {
  constructor() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimento = [];
  }
  consultar() {
    this.consultas.push(Date());
  }
  vacinar(value) {
    this.vacinas.push(value);
    consultar();
  }
  examinar(value) {
    this.procedimento.push(value);
    consultar();
  }
}

class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
  }
}

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

let crys = new Cat("Crys", 12, "cinza com branco");
let scooby = new Dog("Scooby", 15, "marrom", "dogue alemão");
let iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio");
let jose = new Papagaio("José", 13, "verde");

let listaAnimais = [crys, scooby, iogurte, jose];

function chamar(listaAnimais) {
  const isAnimalCallable = (animal) =>
    animal instanceof Dog || (animal instanceof Cat && animal.social == true);

  console.log("psiu");
  return listaAnimais.filter(isAnimalCallable);
}
```

Nossa veterinária agora atende quatro espécies diferentes de animais: dois domésticos (`Gato` e `Cachorro`), e dois exóticos (`Hamster` e `Papagaio`). Usando o que você aprendeu essa semana (classes, herança, sobrescritas, campos privados...) e os exemplos de animais abaixo, escreva um sistema que atenda aos critérios listados:

1. Gatos

```
{
    nome: "Nina",
    idade: 1.5
    cor: "frajola",
    castrado: true,
    externo: false,
    vacinas: ["raiva],
    consultas: [],
    social: true,

    miar(),
    vacinar(),
    consultar(),
    castrar(),
    brincar(),
    acariciar(),
    alimentar(),
}
```

- Gatos sociáveis ronronam ao serem acariciados. Se um gato não for sociável, ele deve silvar.
- Você pode tornar um gato sociável alimentando ele com uma das comidas favoritas dos gatos: frango, sachê ou peixe.

2.  Cachorro

```
{
   nome: "Zeus",
   idade: 3.5
   cor: "preto",
   castrado: false,
   raça: "labrador",
   vacinas: [],
   consultas: [],
   ferido: false,

   latir(),
   vacinar(),
   consultar(),
   castrar(),
   brincar(),
   acariciar(),
   alimentar(),
}
```

- Cachorros costumam esconder quando estão feridos. Use um campo privado para essa informação, e só a exiba ao tentar `brincar()` com um cãozinho que está ferido.

3. Hamster

```
{
    nome: "Iogurte",
    idade: 1.5,
    cor: "branco e laranja",
    tipo: "sírio",
    consultas: [],

    consultar(),
    brincar(),
    acariciar(),
    alimentar(),
}
```

- Ao consultar um hamster, você deve brincar com ele para que ele não fique estressado e tente fugir.

4. Papagaio

```
{
    nome: "José",
    idade: 13,
    cor: "verde"
    consultas: [],

    falar(),
    consultar(),
    brincar(),
    acariciar(),
    alimentar(),
}
```

- Ao brincar com ou alimentar um papagaio, ele deve falar com você.

5. Outros

- Sempre que vacinar um paciente, você deve adicionar uma nova consulta na lista. O mesmo vale para castrar um animal.
- Você deve ter uma função `chamar()`, que recebe uma lista de animais e retorna quais dos animais da lista responderam e vieram brincar. Todos os cachorros respondem quando chamados, assim como os gatos que são sociais. Hamsters, papagaios e gatos não sociais não virão.
- Tentar castrar um animal que já está castrado deve retornar um erro.

**Dica:** assinaturas possíveis para as funções:

```
function acariciar() { ... }

function alimentar(comida) { ... }

function brincar() { ... }

function castrar() { ... }

function chamar([listaAnimais]) { ... return [listaAnimaisQueResponderam] }

function consultar(dataConsulta) { ... }

function falar() { ... }

function latir() { ... }

function miar() { ... }

function vacinar(vacina) { ... }
```
