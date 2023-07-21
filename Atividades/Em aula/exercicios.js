// Atividade I

function quantasChaves() {
    return Object.keys(this).length
}

Object.prototype.quantasChaves = quantasChaves

// Atividade  II
class Cachorro {
    constructor(nome, idade, cor, castrado, raca) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.castrado = castrado;
        this.raca = raca;
    }

    latir() {
        console.log("au au au")
    }
}

let thor = new Cachorro("Thor", 2, "preto", true, "labrador");

thor.quantasChaves();
Object.keys(thor)

// Add novos métodos
Cachorro.prototype.brincar = () => console.log("brincar com bolinha");

// Atividade III

class Gato {}

class Cachorro {}

class Cobra {}

function brincar(animal) {
    if(animal instanceof Gato) {
        console.log("Use uma cordinha")
    } else if(animal instanceof Cachorro) {
        console.log("pega a bolinha")
    } else {
        console.log("Perigo! Nao brincar!")
    }
}

let nida = new Gato();
brincar(nida);
let zeus = new Cachorro();
brincar(zeus);
let cobra = new Cobra();
brincar(Cobra);



