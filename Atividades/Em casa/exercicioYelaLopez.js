class Animal{
    constructor(nome, idade, cor){
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }
    consultar(){
        this.consultas.unshift(new Date())
    }
    alimentar(comida){
        return `eita, que ${comida} deliciaaa!`
    }
    acariciar(){
        console.log('eita, como gosto de um denguinho!')
    }
    brincar(){
        console.log('vamos brincar agora ou já pow?')
    }
}

class Domestico extends Animal {
    constructor(nome, idade, cor, castrado){
        super(nome, idade, cor)
        this.castrado = castrado
        this.vacinas = []
    }

    vacinar(vacina) {
        this.vacinas.push(vacina)
        this.consultas.unshift(new Date())
    }
    
    castrar(){
        if(this.castrado === false){
            this.castrado = true
            this.consultas.unshift(new Date())
            return `${this.nome} acaba de ser castrado com succeso`
        }else{
            return 'ERROR! o bichinho já foi castrado'
        }
    }
    
    
}

class Gato extends Domestico{
    constructor(nome, idade, cor, castrado, social, externo){
        super(nome, idade, cor, castrado)
        this.social = social
        this.externo = externo
    }

    miar(){
        console.log("miauuu miauuu")
    }
    alimentar(comida){
        const comidasFavoritas = ["frango", "peixe", "sache"]
            
        if(comidasFavoritas.includes(comida)){
        this.social = true;
        return 'ñami já comi'
        } 
    }
    acariciar(){
        if (this.social === true){
            return 'ron ron rarrrr'
        } else{
            return 'fiuu fiuuu'
        } 
    }
}

class Perro extends Domestico{
    #ferido

    constructor(nome, idade, cor, castrado, raca, ferido){
        super(nome, idade, cor, castrado)
        this.raca = raca
        this.#ferido = ferido
    }
    latir(){
        console.log("guauu guauuu")
    }
    brincar(){
        if(this.#ferido === true){
            console.log(`${this.nome} está ferido, pode me ajudar?`)
        } else{
            return "bora brincar agoraaaa!"
        }
    }
}

class Exotico extends Animal{
    constructor(nome, idade, cor, social){
        super(nome, idade, cor)
        this.social = social
    }
}

class Hamster extends Exotico{
    constructor(nome, idade, cor, social, tipo){
        super(nome, idade, cor, social)
        this.tipo = tipo
    }
    consultar(){
            this.consultas.unshift(new Date())
            return 'bora brincar de rodinha pow, se não me estresso e fujo'
        }
}
class Papagaio extends Exotico{
    constructor(nome, idade, cor, social){
        super(nome, idade, cor, social)
    }
    falar(){
        console.log('sou um papagaio conversador')
    }
    brincar(){
        console.log("adoro brincar!")
        this.falar()
    }
    alimentar(comida){
        console.log(`oh ${comida} do meu agradooo!`)
        this.falar()
    }
}

function chamar(listaAnimais){
    let listaAnimaisQueResponderam = []
    for(let i = 0; i < listaAnimais.length; i++){
        const animal = listaAnimais[i];
        if(animal instanceof Perro || (animal instanceof Gato && animal.social) || (animal instanceof Hamster && animal.social) || (animal instanceof Papagaio && animal.social))
        {
            listaAnimaisQueResponderam.push(animal.nome)
        }
    }
    return listaAnimaisQueResponderam
}

// 

nina = new Gato("Nina", 1.5, "frajola", false, false, true)
    nina.miar()
    nina.vacinar("raiva")
    nina.consultar()
    nina.castrar()
    nina.brincar()
    nina.acariciar()
    nina.alimentar("peixe")
    nina.consultas // [3]

zeus = new Perro("Zeus", 3.5, "preto", false, "Labrador", true)
    zeus.latir()
    zeus.vacinar()
    zeus.consultar()
    zeus.castrar()
    zeus.brincar()
    zeus.acariciar()
    zeus.alimentar("osso")
    zeus.consultas 

iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", true, "sirio")
    iogurte.consultar()
    iogurte.brincar()
    iogurte.acariciar()
    iogurte.alimentar("ração")
    iogurte.consultas

jose = new Papagaio("Jose", 13, "verde", true)
    jose.falar()
    jose.consultar()
    jose.acariciar()
    jose.alimentar("ração")
    jose.consultas

console.log(chamar([nina, zeus, iogurte, jose]));