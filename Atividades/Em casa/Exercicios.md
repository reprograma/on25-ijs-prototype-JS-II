Nome: **Mariana Inoue**

## Exercício

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

 2. Cachorro
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
 - Ao brincar com ou alimentar um papagaio, ele deve falar com você. OK

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

## Resposta

### Animal
```
class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.consultas = []
  }

  acariciar() {
    console.log(`Você fez carinho em ${this.nome}! :D`)
  }

  alimentar(comida) {
    console.log(`${this.nome} comeu ${comida}`)
  }

  brincar() {
    console.log(`Você brincou com ${this.nome}! :D`)
  }

  consultar() {
    const hoje = new Date()
    this.consultas.push(hoje)
    console.log(`A consulta de hoje (dia ${hoje.getDate()}) foi adicionada ao histórico de ${this.nome}`)
  }

  static chamar(listaAnimais) {
    return listaAnimais.filter( animal => (
      (animal instanceof Cachorro) ||
      (animal instanceof Gato && animal.social)
    ))
  }
}
```

### Doméstico
```
class Domestico extends Animal {
  constructor(nome, idade, cor, castrado) {
    super(nome, idade, cor)
    this.castrado = castrado
    this.vacinas = []
  }

  vacinar(vacina) {
    this.vacinas.push(vacina)
    this.consultar()

    console.log(`Nessa consulta, ${this.nome} recebeu a vacina ${vacina}`)
  }

  castrar() {
    if (this.castrado) {
      console.log(`Você não pode castrar novamente um animal que já foi castrado.`)
    } else {
      this.castrado = true
      this.consultar()

      console.log(`Nessa consulta, ${this.nome} passou pela castração.`)
    }
  }
}
```

### Gato
```
class Gato extends Domestico {
  static comidasFavoritas = ["frango", "sachê", "peixe"]

  constructor(nome, idade, cor, castrado, externo, social) {
    super(nome, idade, cor, castrado)
    this.externo = externo
    this.social = social
  }

  acariciar() {
    let som = this.social ? "ron ron ron" : "hiiissssssss"
    super.acariciar()
    console.log(`${this.nome}: ${som}`)
  }

  alimentar(comida) {
    super.alimentar(comida)

    if(!this.social && Gato.comidasFavoritas.includes(comida)) {
      this.social = true
      console.log(`${this.nome} agora é social!`)
    }
  }
} 
```

### Cachorro
```
class Cachorro extends Domestico {
  #ferido

  constructor(nome, idade, cor, castrado, raca, ferido) {
    super(nome, idade, cor, castrado)
    this.raca = raca
    this.#ferido = ferido
  }

  brincar() {
    if(this.#ferido) {
      console.log(`${this.nome} não consegue brincar, porque está machucado.`)
    } else {
      super.brincar()
    }
  }
}
```

### Hamster
class Hamster extends Animal {
  constructor(nome, idade, cor, tipo) {
    super(nome, idade, cor)
    this.tipo = tipo
  }

  consultar() {
    super.brincar()
    super.consultar()
  }
}

### Papagaio
```
class Papagaio extends Animal {
  falar() {
    console.log(`${this.nome}: curupaco`)
  }

  alimentar(comida) {
    super.alimentar(comida)
    this.falar()
  }

  brincar() {
    super.brincar()
    this.falar()
  }
}
```

### Testando
```
let nina = new Gato("Nina", 1.5, "frajola", true, false, true)
nina.acariciar()
nina.alimentar("cenoura")
nina.alimentar("peixe") 
nina.brincar()
nina.consultar()

let chris = new Gato("Chris", 3, "branco e cinza", true, false, false)
chris.acariciar()
chris.alimentar("peixe")

let zeus = new Cachorro("Zeus", 3, "preto", false, "labrador", false)
let apollo = new Cachorro("Apollo", 2, "branco", false, "pitbull", true)
zeus.brincar()
apollo.brincar()

let iogurte = new Hamster("Iogurte", 1.7, "branco e creme", "sírio")
iogurte.consultar() 

let jose = new Papagaio("José", 7, "verde")
jose.brincar()

let princeso = new Gato("Princeso", 4, "cinza", false, true, false)
let tobias = new Gato("Tobias", 12, "branco", true, false, false)
Animal.chamar([nina, chris, princeso, tobias, apollo, zeus, iogurte, jose]) 
```