
class Domestico {
    constructor(nome, idade, cor, castrado) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.vacinas = []
        this.consultas = []
        
    }

    consultar(){
        this.consultas.push(new Date)
    }

    vacinar(vacina){
        this.vacinas.push(vacina)
        this.consultar()
    }

    castrar(){
        if (this.castrado){
            console.log("Animal já castrado!")
        } else {
            this.castrado = true
            this.consultar()
        }               
    }

    brincar(){
        console.log(`Brincando com ${this.nome}!`)
    }

    acariciar(){
        console.log("Fazer carinho na barriga.")
    }

    alimentar(comida){
        console.log(`Dê ${comida} para ${this.nome}
        !`)
    }

}

class Exotico {
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }

    consultar(){
        this.consultas.push(new Date)
    }

    brincar(){
        console.log(`Brincando com ${this.nome}!`)
    }

    acariciar(){
        console.log("Fazer carinho na barriguinha.")
    }

    alimentar(comida){
        console.log(`Dê ${comida} para ${this.nome}!`)
    }

}

class Gato extends Domestico {
    static externo = false
    
    constructor(nome, idade, cor, castrado, social){
        super(nome, idade, cor, castrado) //Doméstico
        this.social = social
    }

    miar(){
        if (this.social) {
            console.log("Ron ron ron!")
        } else {
            console.log("Chiiii...")
        }
    }
    
    acariciar(acariciar){
        if (acariciar === "S"){
            this.social = true
        } else if (acariciar === "N"){
            this.social = false
        } 
    }
  
    alimentar(comida){
        if(comida === "frango" || comida === "sachê" || comida === "peixe"){
            this.social = true
        } else {
            this.social = false
        }
    }
}

class Cachorro extends Domestico {
    #ferido
    static raca = "labrador"
    
    constructor(nome, idade, cor, ferido){
        super(nome, idade, cor) //Doméstico
        this.#ferido = ferido
        this.castrado
    }

    latir(){
        console.log("Au au au!")
    }

    brincar(){
        super.brincar() 
        if (this.#ferido = true) {
            console.log("O cão está ferido")
        }
    }  

}

class Hamster extends Exotico{
    static tipo = "sírio"
    constructor(nome, idade, cor){
        super(nome, idade, cor) //Doméstico
    }

    consultar(){
        super.consultar()
        super.brincar()
        console.log("Consulta realizada.")
    }
   
}

class Papagaio extends Exotico{
    constructor(nome, idade, cor){
        super(nome, idade, cor) //Doméstico
    }

    falar(){
        console.log("Loro loro!")
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

let nina = new Gato("Nina", 1.5, "frajola", true, true)

let luna = new Gato("Luna", 1, "cinza", false, false)

let zeus = new Cachorro("Zeus", 3.5, "preto", false)

let apollo = new Cachorro("Apollo", 2, "caramelo", true)

let iorgute = new Hamster("Iorgute", 1.5, "branco e laranja")

let jose = new Papagaio("José", 13, "verde")

listaAnimais = [nina, luna, zeus, apollo, iorgute, jose]

listaAnimaisQueResponderam = []

//Não consegui fazer a função chamar() funcionar
function chamar(listaAnimais){
    for (i = 0; i < listaAnimais.lenght; i++){       
        animal = listaAnimais[i]
        switch (animal){
            case animal instanceof  Cachorro:
                listaAnimaisQueResponderam.push(animal)
                break
            case animal instanceof Gato:
                if (this.social = true) {
                    listaAnimaisQueResponderam.push(animal)
                } 
                break       
        }         
    }

        return console.log(this.listaAnimaisQueResponderam)   
}
