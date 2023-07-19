class Animal {
    constructor(nome, idade, cor){
        this.nome = nome,
        this.idade = idade,
        this.cor = cor,
        this.consultas = []
    }
    brincar(){
        console.log(`O animal ${this.nome} está brincando`)
    }
    acariciar(){
        console.log(`O animal ${this.nome} está sendo acariciado`)
    }
    alimentar(comida){
        console.log(`O animal ${this.nome} está sendo alimentado`)
    }
    consultar(){
        this.consultas.push(new Date())
    }
}

class Domesticos extends Animal {
    constructor(nome, idade, cor, castrado){
        super(nome, idade, cor)
        this.castrado = castrado,
        this.vacinas = []
    }
    vacinar(vacina) {
        this.vacinas.push(vacina)
        this.consultar()
    }
    castrar(){
        if(this.castrado == false){
            console.log(`${this.nome} acaba de ser castrado!`);
            this.castrado = true;
            this.consultar();
        } else {
            console.log(`Erro. O animal ${this.nome} já foi castrado(a)!`)
        }
    }}

class Gato extends Domesticos {
    static alimentos = ["frango", "sachê", "peixe"]
    constructor(nome, idade, cor, castrado, social, externo){
        super(nome, idade, cor, castrado)
        this.social = social,
        this.externo = externo
    }
    miar() {
        console.log("Miau")
    }

    acariciar() {
        super.acariciar()
        if (this.social === true) {
            console.log("O gatinho está ronronando <3")
        } else {
            console.log("O gatinho está silvando. Hora de alimentá-lo!")
        }
    }

    alimentar(comida) {
        super.alimentar()
        if(comida == "frango" || comida == "sachê" || comida == "peixe"){
            this.social === true
        } else {
            console.log("O gatinho não gostou da comida! Tente outras opções.")
        }
    }
}

let nina = new Gato("Nina", 1.5, "frajola", true, true, false)
/*console.log(nina)
nina.miar()
nina.acariciar()
nina.brincar()
nina.castrar()
nina.consultar()
nina.alimentar("frango")
console.log(consultas)*/

class Cachorro extends Domesticos{
    #ferido
    constructor(nome, idade, cor, castrado, vacinas, raça, ferido){
        super(nome, idade, cor, castrado, vacinas)
        this.raça = raça,
        this.#ferido = ferido
    }
    latir() {
        console.log("Au Au!")
    }
    brincar() {
        if (this.#ferido === true) {
            console.log("O cãozinho está ferido e não quer brincar")
        } else {
           super.brincar()
        }
    }
}

let zeus = new Cachorro ("Zeus", 3.5, "preto", false, [], "labrador", false)
/*console.log(zeus)
zeus.latir()
zeus.brincar()
zeus.castrar()*/

class Exoticos extends Animal {
    constructor(nome, idade, cor){
        super(nome, idade, cor)
    }
}

class Hamster extends Exoticos{
    constructor(nome, idade, cor, tipo){
        super(nome, idade, cor)
        this.tipo = tipo
    }
    consultar() {
        this.brincar()
        super.consultar()
        console.log("Após a brincadeira, a consulta foi realizada com sucesso.")
    }
}
let iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio")

/*iogurte.consultar()
iogurte.alimentar()
console.log(iogurte)*/

class Papagaio extends Exoticos{
    constructor(nome, idade, cor){
        super(nome, idade, cor)
    }
    falar() {
        console.log(`O papagaio ${this.nome} está falando!`)
    }
    brincar() {
        super.brincar();
        this.falar()
    }
    alimentar(comida){
        super.alimentar(comida);
        this.falar()
    }
}
let jose = new Papagaio("José", 13, "verde")
/*jose.falar()
jose.brincar()
jose.alimentar()
console.log(jose)*/

function chamar(listaAnimais){
    let listaAnimaisQueResponderam = []
    for(let i = 0; i < listaAnimais.length; i++){
        const animal = listaAnimais[i];
        if(animal instanceof Cachorro || (animal instanceof Gato && animal.social == true)){
            listaAnimaisQueResponderam.push(animal.nome)
        }
    }
    return listaAnimaisQueResponderam
}
console.log(chamar([nina, zeus, iogurte, jose]))
