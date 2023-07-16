class AnimalDomestico {
  constructor(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
    this.vacinas = [];
    this.castrado = castrado;
  }
  consultar() {
    this.consultas.push(new Date());
  }
  vacinar(vacina) {
    this.vacinas.push(vacina);
  }
}

//nina = new Gato("Nina", 1.5, "frajola", true, false, false);

class Gato extends AnimalDomestico {
  constructor(nome, idade, cor, castrado, externo, social) {
    super(nome, idade, cor, castrado);
    this.externo = externo;
    this.social = social;
  }
  miar() {
    console.log("miau miau");
  }
  brincar() {
    console.log(`${this.nome} use uma varinha`);
  }
  acariciar() {
    if (this.social == true) {
      console.log("ron ron ron");
    } else {
      console.log("schiiii");
    }
  }
  alimentar() {
    if (this.social == false) {
      console.log(`${this.nome} recebe um delicioso peixe!`);
      return this.social == true;
    }
  }
}

Gato.prototype.especie = "doméstico";

Gato.prototype.vacinar = (vacina) => {
  this.vacinas.push(vacina);
};

Gato.prototype.consultar = (dataConsulta) => {
  this.consultas.push(dataConsulta);
};

nina = new Gato("Nina", 1.5, "frajola", true, false, false);
/* nina.vacinas = ["raiva"];
nina.consultar = [];
nina.alimentar();
 */
class Cachorro extends AnimalDomestico {
  #ferido;
  constructor(nome, idade, cor, castrado, raca, ferido) {
    super(nome, idade, cor, castrado);
    this.raca = raca;
    this.#ferido = ferido;
  }
  latir() {
    console.log("au au");
  }

  acariciar() {
    console.log(`${this.nome} abana o rabinho`);
  }
  brincar() {
    if (this.#ferido == true) {
      console.log(`${this.nome} está ferido e precisa de cuidados!`);
    }
  }
}

Cachorro.prototype.especie = "doméstico";

Cachorro.prototype.consultar = (dataConsulta) => {
  this.consultas.push(dataConsulta);
};

Cachorro.prototype.vacinar = (vacina) => {
  this.vacinas.push(vacina);
};

zeus = new Cachorro("zeus", 3.5, "preto", false, "labrador", true);
zeus.vacinas = [""];
zeus.consultas = [""];

class AnimalExotico {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.consultas = [];
  }

  consultar() {
    this.consultas.push(new Date());
  }
}

class Hamster extends AnimalExotico {
  constructor(nome, idade, cor) {}
}
