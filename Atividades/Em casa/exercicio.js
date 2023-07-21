class Animal {
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = []
    }

    consultar() {
        this.consultas.push(new Date());
    }

    brincar() {
        console.log(`Brincando com ${this.nome}`)
    }

    acariciar(){
        console.log(`Fazendo carinho em ${this.nome}`)
    }

    alimentar(comida){
        console.log(`Alimentando ${this.nome} com ${comida}`)
    } 
}

class AnimalDomestico extends Animal{
    constructor(nome, idade, cor, castrado){
        super(nome, idade, cor)
        this.castrado = castrado,
        this.vacinas = []
    }

    castrar(){
        if(this.castrado == false){
            console.log(`${this.nome} castrou!`);
            this.castrado = true;
            this.consultar();
        } else {
            console.log("ERRO - Animal, já castrado!")
        }
    }

    vacinar(vacina){
        this.vacinas.push(vacina);
        this.consultar();
    }
}

class Gato extends AnimalDomestico{
    constructor(nome, idade, cor, castrado, externo, social){
        super(nome, idade, cor, castrado)
        this.externo = externo,
        this.social = social
    }

    miar() { console.log("miau miau") }

    acariciar(){
        super.acariciar()
        if(this.social == true){
            console.log(`${this.nome} ronronando: ron ron ron`)
        } else {
            console.log(`${this.nome} silvando: ssssss `)
        } 
    }

    alimentar(comida){
        super.alimentar(comida)
        if(comida == "frango" || comida == "sachê" || comida == "peixe"){
            this.social = true
        }
    }
}
let mingau = new Gato("Mingau", 2, "branca", true, false, true);

class Cachorro extends AnimalDomestico{

    constructor(nome, idade, cor, castrado, raca, ferido){
        super(nome, idade, cor, castrado)
        this.raca = raca,
        this.ferido = ferido,
        this.#esconder = this.ferido
    }

    latir() { console.log("au au au") }

    brincar(){
        if(this.ferido == true){
            console.log(`${this.nome} não consegue brincar pois está doente e escondido`)
        } else {
            super.brincar()
        }
    }
}
let zeus = new Cachorro("Zeus", 3.5, "preto", false, "labrador", false);

class Hamster extends Animal{
    constructor(nome, idade, cor, tipo){
        super(nome, idade, cor)
        this.tipo = tipo
    }

    consultar(){
        console.log(`Primeiro vamos brincar para ${this.nome} não fugir de medo da consulta`);
        this.brincar();
        super.consultar();
        console.log("Consulta realizada com sucesso!");
    }
}
let hamtaro = new Hamster("Hamtaroo", 3, "laranja", "sírio");

class Papagaio extends Animal{
    constructor(nome, idade, cor){
        super(nome, idade, cor)
    }

    falar() { console.log(`${this.nome} falando: "loro quer café"`) }

    brincar(){
        super.brincar();
        this.falar();
    }

    alimentar(comida){
        super.alimentar(comida);
        this.falar();
    }
}
let jose = new Papagaio("Loro José", 30, "verde e amarelo");