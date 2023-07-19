class Animal {
    static  chamar(arrAnimais){
        let arrAnimaisChamados = {}
        
        for(let i =0; i < arrAnimais.length; i++)
        {
            let animal = arrAnimais[i]
            if (animal instanceof Cachorro || (animal instanceof Gato && animal.social == true)) {
                arrAnimaisChamados.push(animal)
            }
        }
    }

    constructor(nome, idade, cor){
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }

    consultar() {
        return this.consultas.unshift(new Date())
    }
    
    brincar(){
        if(this instanceof Gato){
            console.log("Use uma cordinha")
        } else if(this instanceof Cachorro){
            console.log("Brinque de bola")
        } else if(this instanceof Hamster){
            console.log("Brinque com a rodinha")
        } else if(this instanceof Papagaio) {
            console.log("Cante com ele")
            this.falar()
        } else {
            console.log(`Não atendemos este animal na clínica`)
        }

    }

    acariciar(){
        if(this instanceof Gato){
            this.social ? "ronron" : "tsss"
        }
        else  {
            return console.log (`Você está acaraciando o animal`)
        }
    }

    alimentar(alimentos){
        if(this instanceof Gato && (alimentos == "sache") || (alimentos == "frango") || (alimentos == "peixe")) { // colocar as comidas como estática nos gatos pq são comuns para todos os gatos?
            this.social == true
        }
        else if(this instanceof Papagaio){
            return console.log(`este ${this.nome} está ${this.falar()}`)
        } else {
            return console.log(`Você aliementou ${this.nome} com ${alimentos}`)
        }
    }

   
}

class Domesticos extends Animal {
    constructor(nome, idade, cor, castrado){
        super(nome, idade, cor)
        this.castrado = castrado
        this.vacinas = []
    }

    vacinar(vacina) {
        this.consultar()
        this.vacinas.push(vacina) 
        return this.vacinas
    }

    castrar() {
        if(this.castrado == true){
            return console.log(`${this.nome} já foi castrado`)
        } else {
            return this.castrado == true
        }
    }
}

class Gato extends Domesticos {
    constructor(nome, idade, cor, consultas, castrado, vacinas, externo, social){
        super(nome, idade, cor, consultas, castrado, vacinas)
        this.externo = externo
        this.social = social
    }

    miar(){
        return console.log("miau") // não sei porque a função está retornando um "undefined" junto com o "miau"
    }
}

class Cachorro extends Domesticos{
    #ferido
    
    constructor(nome, idade, cor, consultas, castrado, vacinas, raca, ferido){
        super(nome, idade, cor, consultas, castrado, vacinas)
        this.raca= raca
        this.#ferido = ferido
    }

    latir(){
        console.log("au au")
    }

     brincar(){
         if(this.ferido == true){
            console.log(`${this.nome} está ferido e não consegue brincar`)
         } else {
            console.log(`Você brincou com ${this.nome}`)
         }
     }
}

class Hamster extends Animal{
    constructor(nome, idade, cor, consultas, tipo){
    super(nome, idade, cor, consultas)
        this.tipo = tipo
    }

    consultar(){
        this.brincar()
        console.log("Agora que você brincou com o Hamster, pode seguir com a consulta")
    }
        
}

class Papagaio extends Animal{
    constructor(nome, idade, cor, consultas){
    super(nome, idade, cor, consultas)
    }
    falar(){
        console.log("falando")
    }
}

const nina = new Gato("Nina", 1.5, "frajola",[], false, ["raiva"], false, false)
const zeus = new Cachorro()
const hamtaro = new Hamster()
const loro = new Papagaio("Loro", 20, "verde", [])


console.log(nina.miar()) // retorna miau e um "undefined" que não sei da onde vem
console.log(nina.vacinar("teste"))
console.log(nina.vacinas) // está retornando só a vacina teste, não retorna a vacina raiva passada no nina
console.log(nina.castrar()) // continua retornando false, castrado está retornando como um array
console.log(nina.brincar())
console.log(nina.acariciar())
console.log(nina)

console.log(loro.falar())
console.log(loro.consultar()) // consultar está retornando 1 de falso ???
console.log(loro.brincar())
console.log(loro.acariciar())
console.log(loro.alimentar("sementes"))
console.log(loro)