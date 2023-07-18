//Nome: Cibele Takaoka Yammoto

class Animal {

  constructor(nome, idade, cor, consultas) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = consultas;
  }

  consultar(dataConsulta) {
    this.consultas.push(dataConsulta)
  }

  brincar() {
    console.log("Que comece a brincadeira!")
  }

  acariciar() {
    console.log("Eba, carinho!")
  }

  alimentar(comida) {
    console.log("Nham! Quero " + comida + "!")
  }
}

class AnimalDomestico extends Animal{
  constructor(nome, idade, cor, consultas, castrado, vacinas) {
    super(nome, idade, cor, consultas);
    this.castrado = castrado;
    this.vacinas = vacinas;
  }

  
  vacinar(vacina) {
    this.vacinas.push(vacina);
    super.consultar(new Date());
  }

  castrar() {
    if(this.castrado == true) {
      console.log("Opa, animal já castrado!")
    } else{
      this.castrado = true;
      super.consultar(new Date());
    }
  }
}


class Gato extends AnimalDomestico {
  constructor(nome, idade, cor, castrado, externo, vacinas, consultas, social) {
    super(nome, idade, cor, consultas, castrado, vacinas);
    this.externo = externo;
    this.social = social;
  }

  acariciar() {
    if(this.social == true) {
      console.log("rrrrrr...");
    } else {
      console.log("ssssss!")
    }
  }

  alimentar(comida) {
    super.alimentar(comida);
    if(comida == "frango" || comida == "sache" || comida == "peixe") {
      this.social = true;
    }
  }

  miar() {
    console.log("Miau miau!");
  }

}

class Cachorro extends AnimalDomestico {
  #ferido
  constructor(nome, idade, cor, castrado, raca, vacinas, consultas, ferido) {
    super(nome, idade, cor, consultas, castrado, vacinas);
    this.raca = raca;
    this.#ferido = ferido;
  }

  latir() {
    console.log("Au au!")
  }

  brincar() {
    if(this.#ferido) {
      console.log("Desculpe! Cachorro não encontrado!")
    } else {
      console.log("Vamos brincar!")
    }
  }


}

class Hamster extends Animal{
  constructor(nome, idade, cor, tipo, consultas) {
    super(nome, idade, cor, consultas);
    this.tipo = tipo;
  }

  consultar(dataConsulta) {
    super.brincar();
    super.consultar(dataConsulta);
  }

}

class Papagaio extends Animal {
  constructor(nome, idade, cor, consultas) {
    super(nome, idade, cor, consultas);
  }
  
  falar() {
    console.log("Olá! Olá!")
  }

  brincar() {
    super.brincar();
    this.falar();
  }

  alimentar(comida) {
    super.alimentar(comida);
    this.falar();
  }
}

function chamar(listaAnimais) {
  listaAnimaisQueResponderam = [];

  listaAnimais.forEach( animal => {
    if((animal instanceof Cachorro) || ((animal instanceof Gato) && (animal.social == true))) {
      listaAnimaisQueResponderam.push(animal);
    } 
  })

  return listaAnimaisQueResponderam
}

/* 
GATO
- Gatos sociáveis ronronam ao serem acariciados. Se um gato não for sociável, ele deve silvar.
- Você pode tornar um gato sociável alimentando ele com uma das comidas favoritas dos gatos: frango, sachê ou peixe.
*/
let nina = new Gato("Nina", 1.5, "frajola", true, false, ["raiva"], [], true)
let juno = new Gato("Juno", 3, "cinza", false, false, ["raiva"], [], false) // Gato não sociável que depois alimento e vira sociável
let blue = new Gato("Blue", 1, "azul acizentado", false, false, [], [], false) // Gato não sociável que não responde a chamado

console.log("NINA:")
nina.miar();
nina.vacinar("pneumonia");
nina.consultar(new Date()); 
nina.castrar(); // Retorna erro
nina.brincar();
nina.acariciar();
nina.alimentar("racao");
console.log(nina);

console.log("JUNO:");
juno.acariciar();
juno.alimentar("frango");
juno.acariciar();
console.log(juno);


/*
CACHORRO
- Cachorros costumam esconder quando estão feridos. 
Use um campo privado para essa informação, e só a exiba ao tentar `brincar()` com um cãozinho que está ferido.
*/

let zeus = new Cachorro("Zeus", 3.5, "preto", false, "labrador", [], [], false)
let thor = new Cachorro("Thor", 2, "marrom", true, "labrador", [], [], true) // Cachorro ferido!

console.log("ZEUS:")
zeus.latir();
zeus.vacinar("z8");
zeus.consultar(new Date()); 
zeus.castrar();
zeus.brincar();
zeus.acariciar();
zeus.alimentar("petisco");
console.log(zeus); // Retorna 3 consultas, 1 para vacinar, 1 consultar e 1 castrar

console.log("THOR:")
thor.brincar()
console.log(thor)

/*
HAMSTER
- Ao consultar um hamster, você deve brincar com ele para que ele não fique estressado e tente fugir.
*/

let iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio", [])

console.log("IOGURTE:")
iogurte.consultar(new Date()); // brincando uma vez
iogurte.brincar(); // brincando a segunda vez
iogurte.acariciar();
iogurte.alimentar("cenoura");
console.log(iogurte)

/* 
PAPAGAIO
- Ao brincar com ou alimentar um papagaio, ele deve falar com você.
*/
let jose = new Papagaio("José", 13, "verde", [])

console.log("JOSÉ:")
jose.falar() // falar uma vez
jose.consultar(new Date())
jose.brincar() // falar segunda vez
jose.acariciar()
jose.alimentar("alpiste") //falar terceira vez
console.log(jose)

/*
CHAMAR
  - Você deve ter uma função `chamar()`, que recebe uma lista de animais e retorna quais dos animais da lista responderam
   e vieram brincar. Todos os cachorros respondem quando chamados, assim como os gatos que são sociais. 
   Hamsters, papagaios e gatos não sociais não virão.
*/
console.log("CHAMANDO TODO MUNDO!")
console.log(chamar([nina, juno, blue, zeus, thor, iogurte, jose]))



/*
1. Gatos
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

 2. Cachorro
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
    
3. Hamster
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

4. Papagaio
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
*/