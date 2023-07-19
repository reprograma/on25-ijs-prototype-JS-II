//1. Adicione uma função `quantasChaves()` a todos os objetos, que retorna quantas chaves aquele objeto possui.

function quantasChaves(){
    return Object.keys(this).length;
    // usando o this apontamos pro objeto quantasChaves pro Object.keys contar as chaves
}

Object.prototype.quantasChaves = quantasChaves 
// quando adicionamos ao prototype de objetos funciona pra todos os objetos.
({}).quantasChaves() // 0 com parenteses eu crio um objeto vazio e depois eu executo o quantas chaves
({ nome: "Layla"}).quantasChaves() // 1

// .................................................................................



// 2. A partir do nosso objeto de `Cachorro` da semana passada, escreva um novo construtor que utilize classes. Lembre-se que cachorros precisam `latir()`.

let Cachorro = class {
    constructor(nome, idade, cor, castrado, raça){
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.raça = raça
    }
       latir(){
        console.log("AU AU")
       }
}

// como instanciar 
let nino = new Cachorro ("nino", 11, "marrom", false, "vira lata");

// como adicionar novos metodos
Cachorro.prototype.brincar = () => console.log("yuuuuupeeeeee")


// Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

class Gato{}
class CachorrO{}
class Cobra{}
class Papagaio {}
class Hamster{}

function brincar (animal){
    if (animal instanceof Gato){
        console.log("use uma cordinha")
    } else if(animal instanceof CachorrO){
        console.log("se esconda e apareça")
    } else if (animal instanceof Papagaio){
        console.log("imite-o")
    } else if(animal instanceof Hamster){
        console.log("alise a cabeça dele")
    } else {
        console.log("melhor não brincar com ela...")
    }
}
 
let marciaTeresa = new Gato ()
brincar (marciaTeresa) // use uma cordinha