Nome: Dória Fernandes

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

 Resposta: 
 
 class Cat extends Animal {
    constructor(nome, idade, cor, castrado, externo) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.externo = externo
    }
    miar() {
        console.log("miau miau")
    }

    brincar() {
        console.log("gatinhos gostam de brincar de novelo de lã")
    }

    acariciar() {
        if (this.social) {
            console.log("ron ron ron")
        } else {
            console.log(`Atenção, ${this.nome}, rosnou para você!`)
        }
    }

    alimentar(value) {
        if (value == "peixe" || value == "frango" || value == "sachê") {
            console.log(`${this.nome}, agora confia em você!`)
            return this.social = true
        } else {
            console.log(`${this.nome}, não gosta de ${value}`)
        }
    }


    castrar() {
        if (this.castrado == true) {
            console.log(`Atenção! ${this.nome}, já está castrado(a).`)
        } else {
            console.log(`${this.nome}, foi castrado(a) com sucesso!!`)
            this.consultas.unshift(new Date())
            return this.castrado = true
        }
    }

}

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

  RESPOSTA: class Dog extends Animal {
    #ferido
    constructor(nome, idade, cor, castrado, raça, ferido) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.#ferido = ferido
        this.raça = raça
    }
    latir() {
        console.log("au au")
    }

    brincar() {
        if (this.#ferido == true) {
            console.log("Esse doguinho está ferido e não sairá para brincar")
        } else {
            console.log(`${this.nome} gosta de brincar com bolinha`)
        }
    }

    acariciar() {
        if (this.social) {
            console.log(`${this.nome}, abanou o rabo`)
        } else {
            console.log(`Atenção, ${this.nome} rosnou para você!`)
        }
    }


    castrar() {
        if (this.castrado == true) {
            console.log(`Atenção! ${this.nome}, já está castrado(a).`)
        } else {
            console.log(`${this.nome}, foi castrado(a) com sucesso!!`)
            this.consultas.unshift(new Date())
            return this.castrado = true
        }
    }

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

  class Hamster extends Animal {
    constructor(nome, idade, cor, tipo) {
        super(nome, idade, cor)
        this.tipo = tipo
        this.estressado = true
    }

    brincar() {
        this.estressado = false
        console.log(`${this.nome}, gosta de brincar na rodinha`)
    }

    consultar() {
        if (this.estressado == false) {
            this.consultas.push(new Date())
        } else {
            console.log(`Eita, ${this.nome} fugiu!!`)
        }
    }

    acariciar() {
        if (this.social) {
            console.log(`${this.nome}, balançou o bumbunzinho`)
        } else {
            console.log(`Atenção, ${this.nome}, mordeu você!`)
        }
    }
   
}


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

 class Papagaio extends Animal {

    falar() {
        console.log("Loro, quer biscoito?")
    }

    alimentar() {
        console.log(`${this.nome}, quer mais`)
    }

    brincar() {
        console.log(`${this.nome}, não quer brincar com você`)
    }

    acariciar() {
        if (this.social) {
            console.log(`${this.nome}, deixou você acariciar`)
        } else {
            console.log(`Atenção, ${this.nome}, bicou você!`)
        }
    }

}

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
