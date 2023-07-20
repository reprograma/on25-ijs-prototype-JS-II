class HistoricoMedico {
    constructor() {
      this.consultas = [];
      this.vacinas = [];
      this.procedimento = [];
    }
  }
  
  class Animal {
    constructor(nome, idade, cor, consultas = []) {
      this.nome = nome;
      this.idade = idade;
      this.cor = cor;
      this.historico = new HistoricoMedico();
    }
  
    consultar() {
      const dataConsulta = new Date();
      this.consultas.push(dataConsulta);
      this.historico.consultas.push(dataConsulta);
    }
  
    registrarProcedimento(procedimento) {
      this.historico.procedimento.push(procedimento);
    }
  
    brincar() {
      console.log(`${this.nome} está brincando.`);
    }
  
    acariciar() {
      console.log(`${this.nome} está sendo acariciado.`);
    }
  
    alimentar() {
      console.log(`${this.nome} está sendo alimentado.`);
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, cor, consultas = []) {
      super(nome, idade, cor, consultas);
      this.social = true;
    }
  
    miar() {
      if (this.social) {
        console.log(`${this.nome} está ronronando.`);
      } else {
        console.log(`${this.nome} está sibilando.`);
      }
    }
  
    vacinar(vacina) {
      this.historico.vacinas.push(vacina);
    }

  
    brincar() {
      console.log(`${this.nome} está brincando com uma bola de lã.`);
    }
  
    acariciar() {
      super.acariciar();
      if (this.social) {
        console.log(`${this.nome} está ronronando de felicidade.`);
      }
    }
  
    alimentar(comida) {
        super.alimentar();
        const comidasFavoritas = ["frango", "sachê", "peixe"];
        let encontrouComidaFavorita = false;
      
        for (let i = 0; i < comidasFavoritas.length; i++) {
          if (comidasFavoritas[i] === comida) {
            encontrouComidaFavorita = true;
            break;
          }
        }
      
        if (this.social && encontrouComidaFavorita) {
          console.log(`${this.nome} está mais sociável agora.`);
          this.social = true;
        }
      }
  }
  

gato.miar(); // Saída: Nina está ronronando.
gato.vacinar("gripe"); // Adiciona uma nova vacina e consulta
gato.consultar(new Date()); // Adiciona uma nova consulta
gato.brincar(); // Saída: Nina está brincando com uma bolinha de lã.
gato.acariciar(); // Saída: Nina está sendo acariciado. Nina está ronronando de felicidade.
gato.alimentar("frango"); // Saída: Nina está sendo alimentado. Nina está mais sociável agora.

class Cachorro extends Animal {
  constructor(nome, idade, cor, consultas = [], raça = []) {
    super(nome, idade, cor, consultas);
    this.raça = raça;
    this.castrado = false;
    this.ferido = false;
  }

  definirRaca(raça) {
    this.raça = raça;
    console.log(`${this.nome} é da raça ${this.raça}.`);
  }

  latir() {
    console.log(`${this.nome} está latindo.`);
  }

  vacinar(vacina) {
    this.historico.vacinas.push(vacina);
    this.consultar();
  }

  brincar() {
    if (this.ferido) {
      console.log(`${this.nome} está escondendo-se. Ele está ferido.`);
    } else {
      console.log(`${this.nome} está correndo atrás da bolinha.`);
    }
  }

  acariciar() {
    super.acariciar();
    console.log(`${this.nome} está abanando o rabo.`);
  }

  alimentar(comida) {
    super.alimentar();
    const comidasFavoritas = ["carne", "biscoito", "frango"];
    if (this.social && comidasFavoritas.includes(comida)) {
      console.log(`${this.nome} está mais animado agora.`);
      this.social = true;
    }
  }

  castrar() {
    if (this.castrado) {
      console.log(`${this.nome} já foi castrado.`);
      return;
    }
    this.castrado = true;
    this.registrarProcedimento("Castração");
    console.log(`${this.nome} foi castrado.`);
  }
}

const cachorro = new Cachorro("Zeus", 3.5, "preto", [], "Labrador");

console.log(cachorro.raça); // Saída: Labrador
cachorro.definirRaca("Poodle"); // Saída: Zeus é da raça Poodle.
console.log(cachorro.raça); // Saída: Poodle
cachorro.latir(); // Saída: Zeus está latindo.
cachorro.vacinar("raiva");
console.log(cachorro.historico.vacinas); // Saída: ['raiva']
cachorro.brincar(); // Saída: Zeus está correndo atrás da bolinha.
cachorro.ferido = true;
cachorro.brincar(); // Saída: Zeus está escondendo-se. Ele está ferido.
cachorro.acariciar(); // Saída: Zeus está sendo acariciado. Zeus está abanando o rabo.
cachorro.alimentar("frango"); // Saída: Zeus está sendo alimentado. Zeus está mais animado agora.
cachorro.castrar(); // Saída: Zeus foi castrado.
cachorro.castrar(); // Saída: Uncaught Error: Zeus já foi castrado.