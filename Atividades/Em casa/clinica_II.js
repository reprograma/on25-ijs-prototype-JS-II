class Animal {
    constructor(nome, idade) {
      this._nome = nome;
      this._idade = idade;
    }
  
    emitirSom() {}
  
    alimentar(comida) {}
  
    consultar() {}
  }
  
  //Gato
  class Gato extends Animal {
    constructor(nome, idade, cor, castrado, externo, vacinas) {
      super(nome, idade);
      this._cor = cor;
      this._castrado = castrado;
      this._externo = externo;
      this._vacinas = vacinas;
      this._consultas = [];
      this._sociavel = false;
    }
  
    miar() {
      console.log("Miau!");
    }
  
    ronronar() {
      if (this._sociavel) {
        console.log("Ronronando...");
      } else {
        console.log("Sssss...");
      }
    }
  
    vacinar(vacina) {
      this._vacinas.push(vacina);
    }
  
    castrar() {
      this._castrado = true;
    }
  
    brincar() {
      console.log("Brincando com seu ratinho eletrico!");
    }
  
    acariciar() {
      if (this._sociavel) {
        console.log("Ronronando de felicidade ao ser acariciado.");
      } else {
        console.log("Sssss... (não é sociável)");
      }
    }
  
    alimentar(comida) {
      const comidasFavoritas = ["frango", "sachê", "peixe"];
      if (comidasFavoritas.includes(comida)) {
        this._sociavel = true;
        console.log("O gato agora é sociável!");
      } else {
        this._sociavel = false;
      }
    }
  
    consultar() {
      this._consultas.push("Consulta realizada");
    }
  }
  
 
  const nina = new Gato("Nina", 1.5, "frajola", true, false, ["raiva"]);
  

  nina.miar();
  nina.vacinar("tríplice viral");
  nina.alimentar("peixe");
  nina.alimentar("rato"); // o gato nao fica sociavel com essa comida
  nina.acariciar(); 
  nina.acariciar(); 
  nina.brincar();
  nina.castrar();
  nina.consultar();
  console.log(`Nome do gato: ${nina._nome}`);
  console.log(`Idade do gato: ${nina._idade} anos`);
  

//Cachorro
class Cachorro extends Animal {
  constructor(nome, idade, cor, castrado, raca, vacinas) {
    super(nome, idade);
    this._cor = cor;
    this._castrado = castrado;
    this._raca = raca;
    this._vacinas = vacinas;
    this._consultas = [];
    this._ferido = false;
  }

  latir() {
    console.log("Au au!");
  }

  vacinar(vacina) {
    this._vacinas.push(vacina);
  }

  castrar() {
    this._castrado = true;
  }

  brincar() {
    if (this._ferido) {
      console.log(`${this._nome} está escondido. Ele está dodói.`);
    } else {
      console.log(`${this._nome} está brincando.`);
    }
  }

  acariciar() {
    console.log(`${this._nome} está sendo acariciado.`);
  }

  alimentar(comida) {
    console.log(`${this._nome} está sendo alimentado com ${comida}.`);
  }

  consultar() {
    this._consultas.push("Consulta realizada");
  }

  setFerido(ferido) {
    this._ferido = ferido;
  }
}

const zeus = new Cachorro("Zeus", 3.5, "preto", false, "labrador", []);

zeus.latir();
zeus.vacinar("raiva");
zeus.alimentar("ração");
zeus.castrar();
zeus.brincar(); 
zeus.setFerido(true);
zeus.brincar(); 


// Hamster
class Hamster extends Animal {
  constructor(nome, idade, cor, tipo) {
    super(nome, idade);
    this._cor = cor;
    this._tipo = tipo;
    this._consultas = [];
  }

  consultar() {
    console.log(`${this._nome} está em consulta.`);
    this.brincar();
  }

  brincar() {
    console.log(`${this._nome} está brincando. Agora ele esta calminho.`);
  }

  acariciar() {
    console.log(`${this._nome} está sendo acariciado.`);
  }

  alimentar(comida) {
    console.log(`${this._nome} está sendo alimentado com ${comida}.`);
  }
}


const iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio");


iogurte.consultar(); 
iogurte.acariciar();
iogurte.alimentar("sementes");


