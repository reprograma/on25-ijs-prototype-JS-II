//construtor de animais
class Animal {
  constructor(nome, idade, cor, consultas) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = consultas || []; 
  }

  consultar() {
  const data = new Date();
    this.consultas.push(`fazendo nova consulta ${formataData(data)}`)
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

function  colocarZeroAEsquerda(num) {
  return num <= 10 ? `0${num}` : `${num}`;
}

  
  //usando método static para o método formatar data
 function  formataData(data) {
    const dia = colocarZeroAEsquerda(data.getDate().toString());
    const mes = colocarZeroAEsquerda((data.getMonth() + 1).toString());
    const ano = colocarZeroAEsquerda(data.getFullYear()).toString();
    const hora = colocarZeroAEsquerda(data.getHours()).toString();
    const minuto = colocarZeroAEsquerda(data.getMinutes()).toString();

    return `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
  }

class Gato extends Animal {
  constructor(nome, idade, cor, consultas, castrado, externo, vacinas, social) {
    super(nome, idade, cor, consultas);
    this.castrado = castrado;
    this.externo = externo;
    this.vacinas = vacinas || []; 
  }

  miar() {
    console.log(`${this.nome} ${this.social ? 'está ronronando.' : 'está silvando.'}`);
  }

  vacinar(vacina) {
    const data = new Date();
    this.vacinas.push(vacina); // Adiciona a vacina ao array de vacinas
    this.consultas.push(formataData(data)); // Registra a data da consulta no array de consultas
    console.log(`${this.nome} foi vacinado contra ${vacina}.`);
  }

  castrar() {
    if (this.castrado) {
      console.log(`${this.nome} já foi castrado.`);
    } else {
      const data = new Date();
      this.castrado = true;
      this.consultas.push(formataData(data)); // Registra a data da consulta no array de consultas
      console.log(`${this.nome} foi castrado.`);
    }
  }

  brincar() {
    super.brincar(); //usando super para chamar o método brincar da classe Animal
    if (this.social) {
      console.log(`${this.nome} está brincando alegremente.`);
    }
  }

  alimentar(comida) {
    super.alimentar(); //usando super para chamar o  método alimentar da classe Animal
    const comidasFavoritas = ["frango", "sachê", "peixe"];
    if (this.social && comidasFavoritas.includes(comida)) {
      console.log(`${this.nome} está se tornando mais sociável.`);
    }
  }

}

class Cachorro extends Animal {
  constructor(nome, idade, cor, consultas, castrado, raca) {
    super(nome, idade, cor, consultas);
    this.castrado = castrado;
    this.raca = raca;
    this.vacinas = []; // Array vazio para armazenar vacinas
    this.ferido = false;
  }

  latir() {
    console.log(`${this.nome} está latindo.`);
  }

  vacinar(vacina) {
    const data = new Date();
    this.vacinas.push(vacina); // Adiciona a vacina ao array de vacinas
    this.consultas.push(formataData(data)); // Registra a data da consulta no array de consultas
    console.log(`${this.nome} foi vacinado contra ${vacina}.`);
  }

  castrar() {
    if (this.castrado) {
      console.log(`${this.nome} já foi castrado.`);
    } else {
      const data = new Date();
      this.castrado = true;
      this.consultas.push(formataData(data)); // Registra a data da consulta no array de consultas
      console.log(`${this.nome} foi castrado.`);
    }
  }

  brincar() {
    super.brincar(); // usando super para chamar o  método brincar da classe Animal
    if (this.ferido) {
      console.log(`${this.nome} está escondido por estar ferido.`);
    }
  }

  alimentar() {
    super.alimentar(); // usando super para chamar o  método  alimentar da classe Animal
    console.log(`${this.nome} está feliz.`);
  }
  

}

class Hamster extends Animal {
  constructor(nome, idade, cor, consultas, tipo) {
    super(nome, idade, cor, consultas);
    this.tipo = tipo;
  }

  consultar() {
    super.consultar(); // usando super para chamar o  método  consultar da classe Animal
    console.log(`${this.nome} precisa brincar para evitar estresse.`);
  }

  brincar() {
    super.brincar(); // usando super para chamar o  método  brincar da classe Animal
    console.log(`${this.nome} é um hamster muito ativo.`);
  }

  alimentar() {
    super.alimentar(); //usando super para chamar o  método  alimentar da classe Animal
    console.log(`${this.nome} está satisfeito com sua comida.`);
  }
}

class Papagaio extends Animal {
  constructor(nome, idade, cor, consultas) {
    super(nome, idade, cor, consultas);
  }

  falar() {
    console.log(`${this.nome} olá, eu sei falar.`);
  }

  brincar() {
    super.brincar(); // usando super para chamar o  método brincar da classe Animal
    console.log(`${this.nome} está brincando.`);
  }

  alimentar() {
    super.alimentar(); //usando super para chamar o  método alimentar da classe Animal
    console.log(`${this.nome} está feliz e falando.`);
  }
}

function chamar(listaAnimais) {
  return listaAnimais.filter(
    (animal) => animal instanceof Cachorro || (animal instanceof Gato && animal.social)
  );
}


const nina = new Gato("Nina", 1.5, "frajola", [], true, false, ["raiva"], true);
nina.miar(); 
nina.vacinar("leucemia"); 
nina.castrar(); 
nina.alimentar("peixe");
nina.acariciar(); 
nina.alimentar("cenoura"); 
console.log(nina); // Exibe os detalhes do objeto Gato

const zeus = new Cachorro("Zeus", 3.5, "preto", [], false, "labrador");
zeus.latir();
zeus.vacinar("raiva");
zeus.castrar(); 
zeus.brincar(); 
zeus.alimentar()
zeus.acariciar(); 
console.log(zeus); 

const iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", [], "sírio");
iogurte.consultar(); 
iogurte.brincar(); 
iogurte.acariciar();
iogurte.alimentar();
console.log(iogurte); // Exibe os detalhes do objeto Hamster

const jose = new Papagaio("José", 13, "verde", []);
jose.falar();
jose.consultar();
jose.brincar();
jose.acariciar(); 
jose.alimentar(); 
console.log(jose); // Exibe os detalhes do objeto Papagaio

function listaAnimaisQueResponderam(listaAnimais) {
  return listaAnimais.filter(
    (animal) => animal instanceof Cachorro || (animal instanceof Gato && animal.social)
  );
}

const listaAnimais = [nina, zeus, iogurte, jose];
const animaisQueResponderam = listaAnimaisQueResponderam(listaAnimais);
console.log(animaisQueResponderam);

