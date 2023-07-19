
class Animal {
  constructor(nome, idade, cor){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
  }

  consultar(){
    this.consultas.push(new Date())
  }

  brincar(){
    console.log(`${this.nome} está brincando!`)
  }

  acariciar(){
    console.log(`${this.nome} está recebendo carinho!`)
  }

  alimentar(){
    console.log(`${this.nome} está recebendo alimentado!`)
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor, externo){
    super(nome, idade, cor);
    this.externo = externo;
    this.vacinas = [];
    this.consultas = []
    this.social = false;
    this.castrado = false;
  }

  miar() {
    console.log("Miau miau")
  }

  vacinar(vacina){
    this.vacinas.push(vacina)
    this.consultar()
  }

  castrar(){
    if(this.castrado){
      console.log(`${this.nome} já está castrada!` )
    } else{
    this.castrado = true;
    console.log(`${this.nome} foi castrada!`);
    this.consultar()
    }
  }

  acariciar(){
    if(this.social){
      console.log("ron ron ron")
    } else{
      console.log("fssssssssssssssss!")
    }
  }

  alimentar(alimento){
    if(this.social && alimento === "frango" || alimento === "peixe" || alimento === "sache"){
      console.log(`${this.nome} adorou o ${alimento}! Agora ela está bem!`)
      return this.social = true
    } else{
    console.log("ainda não quero conversa! miau!")

    }
    
  }
}

// =============RETORNOS GATO================
//let felicia = new Gato("felicia", 1.5, "cinza", "sim")

//felicia.acariciar() //fssssssssssssssss!

//felicia.alimentar("massa") //ainda não quero conversa! miau!

//felicia.alimentar("peixe") //felicia adorou o peixe! Agora ela está bem!

//felicia.acariciar() //ron ron ron

//felicia.vacinar("raiva") // consultas: [Tue Jul 18 2023 21:28:49 GMT-0300 (Horário Padrão de Brasília)] e vacinas:['raiva']

//felicia.castrar() //felicia foi castrada! 
//consultas: Array(2) 
//0: Tue Jul 18 2023 21:45:55 GMT-0300 (Horário Padrão de Brasília) {} 
//1: Tue Jul 18 2023 21:46:24 GMT-0300 (Horário Padrão de Brasília) {}

class Cachorro extends Animal {
  #ferido
  constructor(nome, idade, cor, raca, ferido){
    super(nome, idade, cor)
    this.raca = raca;
    this.#ferido = ferido;
    this.castrado = false;
    this.vacinas = [];
    this.consultas = [];
  }

  latir() {
    console.log("au au")
  }

   vacinar(vacina){
    this.vacinas.push(vacina)
    this.consultar()
  }

  castrar(){
    if(this.castrado){
      console.log(`${this.nome} já está castrada!` )
    } else{
    this.castrado = true;
    console.log(`${this.nome} foi castrada!`);
    this.consultar()
    }
  }

  brincar(){
    console.log(`não posso brincar, estou ${this.#ferido}`);
  }
}
//======RETORNO CACHORRO===
//let natacha = new Cachorro("Natacha", 24, "preta", "vira-lata", "estou com minha pata machucada")

//natacha.brincar() //não posso brincar, estou estou com minha pata machucada
//natacha.castrar() // Natacha foi castrada!

class Hamster extends Animal{
  constructor(nome, idade, cor, tipo){
    super(nome, idade, cor)
    this.tipo = tipo;
    this.consultas = [];
    this.vacinas = [];
  }

  consultar(data){
      console.log(`${this.nome} está muito bravo e não quer colaborar!`)
    }
  
  brincar(){
    super.consultar()
    console.log(`${this.nome} está se divertindo com a brincadeira!`);
  }
}

//====RETORNO HAMSTER=====
//let iogurte = new Hamster("iogurte", 1.5, "branco e laranja", "sírio")

//iogurte.consultar(new Date()) // iogurte está muito bravo e não quer colaborar!
//iogurte.brincar() // iogurte está se divertindo com a brincadeira!
//consultas: [Wed Jul 19 2023 17:01:15 GMT-0300 (Horário Padrão de Brasília)] // quando brinca
//com ele, já pode fazer a consulta ao mesmo tempo

class Papagaio extends Animal{
  constructor(nome, idade, cor){
    super(nome, idade, cor)
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
  }

  falar(){
    console.log(`${this.nome} está falando com você!`)
  }

  brincar(){
    this.falar();
  }
  alimentar(){
    this.falar();
  }
}

//=====RETORNO PAPAGAIO=====
//let jose = new Papagaio("jose", 13, "verde")

//jose.brincar() //jose está falando com você!
//jose.alimentar() // jose está falando com você!