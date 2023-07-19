class Animal {
    constructor(nome, idade, cor) {
      this.nome = nome;
      this.idade = idade;
      this.cor = cor;
      this.consultas = [];
    }
  
    consultar(dataConsulta) {
      this.consultas.push(dataConsulta);
    }
  
    brincar() {
      console.log(`${this.nome} está brincando.`);
    }
  
    acariciar() {
      console.log(`Acariciando ${this.nome}.`);
    }
  
    alimentar(comida) {
      console.log(`${this.nome} está sendo alimentado com ${comida}.`);
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, cor, castrado, externo, vacinas, social) {
      super(nome, idade, cor);
      this.castrado = castrado;
      this.externo = externo;
      this.vacinas = vacinas;
      this.social = social;
    }
  
    miar() {
      if (this.social) {
        console.log(`${this.nome} está ronronando.`);
      } else {
        console.log(`${this.nome} está silvando.`);
      }
    }
  
    vacinar(vacina) {
      this.vacinas.push(vacina);
      this.consultas.push(new Date());
    }
  
    castrar() {
      if (!this.castrado) {
        this.castrado = true;
        this.consultas.push(new Date());
      } else {
        console.log(`${this.nome} já está castrado.`);
      }
    }
    
    brincar() {
      if (this.social) {
        console.log(`${this.nome} está brincando e se divertindo.`);
      } else {
        console.log(`${this.nome} não quer brincar com você.`);
      }
    }
    
    alimentar(comida) {
      if (["frango", "sachê", "peixe"].includes(comida)) {
        console.log(`${this.nome} ficou sociável ao comer ${comida}.`);
        this.social = true;
      } else {
        console.log(`${this.nome} não foi afetado pela comida.`);
      }
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, cor, castrado, raça) {
      super(nome, idade, cor);
      this.castrado = castrado;
      this.raça = raça;
      this.ferido = false;
    }
  
    latir() {
      console.log(`${this.nome} está latindo.`);
    }
    
    brincar() {
      if (this.ferido) {
        console.log(`${this.nome} está escondido porque está ferido.`);
      } else {
        console.log(`${this.nome} está pronto para brincar.`);
      }
    }
  
    setFerido(ferido) {
      this.ferido = ferido;
    }
  }
  
  class Hamster extends Animal {
    constructor(nome, idade, cor, tipo) {
      super(nome, idade, cor);
      this.tipo = tipo;
    }
  
    brincar() {
      console.log(`${this.nome} está brincando.`);
    }
  
    consultar() {
      console.log(`Brincando com ${this.nome} para evitar estresse.`);
      super.consultar(new Date());
    }
  }
  
  class Papagaio extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade, cor);
    }
  
    falar() {
      console.log(`${this.nome} está falando.`);
    }
  
    brincar() {
      console.log(`${this.nome} está brincando e falando.`);
    }
  }
  
  function chamar(listaAnimais) {
    const listaAnimaisQueResponderam = [];
  
    for (const animal of listaAnimais) {
      if (animal instanceof Cachorro || (animal instanceof Gato && animal.social)) {
        listaAnimaisQueResponderam.push(animal);
      }
    }
  
    return listaAnimaisQueResponderam;
  }
  
  // Exemplo de uso
  const gato1 = new Gato("Nina", 1.5, "frajola", true, false, ["raiva"], true);
  const cachorro1 = new Cachorro("Zeus", 3.5, "preto", false, "labrador");
  const hamster1 = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio");
  const papagaio1 = new Papagaio("José", 13, "verde");
  
  gato1.miar();
  gato1.vacinar("rinite");
  gato1.castrar();
  gato1.brincar();
  gato1.acariciar();
  gato1.alimentar("frango");
  
  cachorro1.latir();
  cachorro1.setFerido(true);
  cachorro1.brincar();
  
  hamster1.consultar();
  hamster1.brincar();
  hamster1.acariciar();
  hamster1.alimentar("semente");
  
  papagaio1.falar();
  papagaio1.consultar();
  papagaio1.brincar();
  papagaio1.acariciar();
  papagaio1.alimentar("frutas");
  
  const listaAnimais = [gato1, cachorro1, hamster1, papagaio1];
  const animaisQueResponderam = chamar(listaAnimais);
  console.log(`Os animais que responderam ao chamado foram: ${animaisQueResponderam.length}`);
  