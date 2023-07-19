
class Animal{
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }

    consultar(dataConsulta) {
        this.consultas.unshift(dataConsulta)
    }

    brincar() {
        console.log(`Vamos brincar ${this.brincadeira}`)
    }

    acariciar(){
        console.log('hmmm recebendo um carinho')
    }

    alimentar(comida){
        console.log(`Seu bichinho está sendo alimentado com ${comida}.`)
    }
}


class AnimalDomestico extends Animal{
    constructor(nome, idade, cor, castrado) {
        super(nome, idade, cor)
        this.castrado = castrado
        this.vacinas = []
    }

    vacinar(vacinas) {
        this.vacinas.push(vacinas)
        this.consultar(new Date())
    }

    castrar(){
        if (this.castrado === false) {
            this.castrado = true,
            this.consultar(new Date())
            console.log('Seu bichinho acaba de ser castrado!')
        } else {
           console.log('Ops, ocorreu um erro! Esse animal já é castrado.')
        }
    }
}


class Gato extends AnimalDomestico {
    constructor(nome, idade, cor, castrado, externo, social){
        super(nome, idade, cor, castrado)
        this.externo = externo
        this.social = social
        this.brincadeira = 'usando uma cordinha!'
    }

    miar() {
        if(this.social == true){
            console.log('ron ron ron')
        } else {
            console.log('Parece que seu gatinho não é sociável, ele está silvando. Teste dar a comida preferida dele!')
        }
    }

    alimentar(comida) {
        super.alimentar(comida)
        if(comida === 'frango'|| comida === 'sachê'||comida === 'peixe') {
            return this.social = true
        }  else {
            return this.social = false
        }
    }
}

class Cachorro extends AnimalDomestico {
    #ferido
    constructor(nome, idade, cor, castrado, ferido, raca){
        super(nome, idade, cor, castrado)
        this.#ferido = ferido
        this.raca = raca
        this.brincadeira = 'de se esconder!'
    }

    latir() {
        console.log('au au')
    }

    brincar(){
        if(this.#ferido == true){
            console.log('O cãozinho está ferido, não podemos brincar')
        } else {
            super.brincar()
        }
    }
}

class Hamster extends Animal {
    constructor(nome, idade, cor, tipo){
        super(nome, idade, cor)
        this.tipo = tipo
        this.brincadeira = 'de girar no carrosel!'
    }

    consultar(data){
        super.consultar(data)
        this.brincar()
        console.log('Brincando eu fico menos estressado!')
    }
}

class Papagaio extends Animal {
    constructor(nome, idade, cor){
        super(nome, idade, cor)
        this.brincadeira = 'de cantar!'
    }

    falar(){
        console.log('curupaco paco curupaco paco')
    }

    brincar(){
        super.brincar()
        this.falar()
    }

    alimentar(comida){
        super.alimentar(comida)
        this.falar()
    }
}


function chamar(listaAnimais) {
    let listaAnimaisQueResponderam = []
    listaAnimais.filter(animal => {
        if (animal instanceof Cachorro || (animal instanceof Gato && animal.social == true)){
            listaAnimaisQueResponderam.push(animal.nome)
        }
    })
    return listaAnimaisQueResponderam
}


let nina = new Gato ('Nina', 2, 'frajola', false, false, false)
nina.miar()
nina.alimentar('peixe')
nina.miar()
nina.consultar('15/08/2023')
nina.vacinar('raiva')
nina.castrar()
nina.consultas
nina.acariciar()
let pepo = new Gato ('Pepo', 4, 'frajola', true, false, true)
pepo.miar()
pepo.castrar()

let zeus = new Cachorro ('Zeus', 3, 'preto', false, true, 'bacê')
zeus.latir()
zeus.brincar() // AQUI
zeus.castrar()
let lilo = new Cachorro ('Lilo', 1, 'preto', true, false, 'bacê')
lilo.brincar()
lilo.castrar()

let hamtaro = new Hamster ('Hamtaro', 2, 'marrom', 'chinês')
hamtaro.brincar()
hamtaro.consultar('12/10/2023')
hamtaro.consultas

let papa = new Papagaio ('Papa', 10, 'verde')
papa.falar()
papa.brincar()
papa.alimentar('Semente de Girassol')

chamar([nina, pepo, zeus, lilo, hamtaro, papa])



 