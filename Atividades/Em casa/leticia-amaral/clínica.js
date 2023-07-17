class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.consultas = []
  }

  consultar(data) {
    this.consultas.unshift(data)
  }

  brincar() {
    console.log(`Você tentou brincar com ${this.nome}`)
  }

  acariciar() {
    console.log(`Você tentou acariciar ${this.nome}`)
  }

  alimentar(alimento) {
    console.log(`Você tentou alimentar ${this.nome} com ${alimento}`)
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor, castrado, externo, social) {
    super(nome, idade, cor)
    this.castrado = castrado
    this.externo = externo
    this.vacinas = []
    this.social = social
  }

  miar() {
    console.log("Minhau!")
  }

  vacinar(vacina) {
    this.vacinas.push(vacina)
    super.consultar(new Date())
  }

  castrar() {
    if(this.castrado) return console.log(`Animal já castrado.`)
    this.castrado = true
    this.consultar(new Date())
  }

  acariciar() {
    super.acariciar()
    if(this.social) {
      console.log(`${this.nome} ronronou ao ser acariciado.`)
    } else {
      console.log(`${this.nome} silvou ao ser acariciado, este gato não é sociável.`)
    }
  }

  alimentar(alimento) {
    super.alimentar(alimento)
    if(alimento === "frango" || alimento === "sachê" || alimento === "peixe") {
      this.social = true
      console.log(`${this.nome} adorou sua comida, agora vocês são amigos!`)
    } else {
      console.log(`${this.nome} está bem alimentado.`)
    }
  }
}

class Cachorro extends Animal {
  #ferido

  constructor(nome, idade, cor, castrado, raca, ferido) {
    super(nome, idade, cor)
    this.castrado = castrado
    this.raca = raca
    this.vacinas = []
    this.#ferido = ferido
  }

  latir() {
    console.log("AU AU!")
  }

  vacinar(vacina) {
    this.vacinas.push(vacina)
    this.consultar(new Date())
  }

  castrar() {
    if(this.castrado) return console.log(`Animal já castrado.`)
    this.castrar = true
    this.consultar(new Date())
  }

  brincar() {
    super.brincar()
    if(this.#ferido) {
      console.log(`${this.nome} não pode brincar, ele(a) está ferido`)
    } else {
      console.log(`${this.nome} está correndo junto com você!`)
    }
  }
}

let contador = 0
class Hamster extends Animal {
  #calmo

  constructor(nome, idade, cor, tipo) {
    super(nome, idade, cor)
    this.tipo = tipo
    this.#calmo = false
  }

  brincar() {
    super.brincar()

    const numero = Math.random() * 11
    if(numero > 5) {
      this.#calmo = true
      console.log(`${this.nome} ficou calmo depois de brincar.`)
    } else {
      this.#calmo = false
      console.log(`${this.nome} ainda está agitado, brinque mais com ele(a).`)
    }
  }

  consultar(data) {
    if(contador >= 3) {
      contador = 0
      console.log(`Cuidado! ${this.nome} está muito estressado, brinque com ele para poder prosseguir.`)
    } else if(!this.#calmo) {
      contador++
      console.log(`${this.nome} está muito estressado(a) para consultar, tente brincar um pouco com ele(a)`)
    } else {
      contador = 0
      super.consultar(data)
    }
  }
}

class Papagaio extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade, cor)
  }

  falar() {
    console.log(`${this.nome} disse "OLÀ!"`)
  }

  brincar() {
    super.brincar()
    console.log(`${this.nome} disse "UHUU LORO"`)
  }

  alimentar(alimento) {
    super.alimentar(alimento)
    console.log(`${this.nome} disse "NHAM NHAM, LORO QUER BISCOITO"`)
  }
}

function chamar(animais = []) {
  return console.log(animais.filter(animal => animal instanceof Cachorro || (animal instanceof Gato && animal.social === true)))
}