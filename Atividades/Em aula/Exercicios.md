1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

function quantasChaves() {
    return Object.keys(this).length
}

O this vai representar o objeto que vamos usar depois.
O contexto só vai ser determinado quando a função for chamada.
O Object.keys é uma sintaxe do JS.

Os objetos pela cadeia de protótipos vão herdar tudo de Object e aprendemos que o prtotype pode extender, então para que a função acima possa ser usada em todos os objetos:

Object.prototype.quantasChaves = quantasChaves

({}).quantasChaves() // 0
({nome: "Layla"}).quantasChaves()// 1

Colocar o objeto entre parênteses é só pra dizer que precisa primeiro ter o objeto pra depois executar, é igual a fazer:

const teste = {nome: "brena"}

teste.quantasChaves()

Contudo, isso não é uma boa prática porque estamos alterando algo que é da linguagem.


2. A partir do nosso objeto de `Cachorro` da semana passada, escreva um novo construtor que utilize classes. Lembre-se que cachorros precisam `latir()`.
```
{
    nome: "Zeus",
    idade: 42, //em meses
    cor: "preto",
    castrado: false,
    raça: "labrador",
    historico: []
}
```
let Historico = class {
    constructor(vacina, procedimentos) {
        this.vacina = vacina
        this.procedimentos = procedimentos
    }
}

let Cachorro = class {
    constructor(nome, idade, cor, castrado, raca) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.raca = raca
    }
    latir() {
        console.log("au au")
    }
}

let apollo = new Cachorro("Apollo") // p/ criar uma instância

Cachorro.prototype.brincar = () => console.log("brincando") // como adicionar novos métodos


3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

function brincar(animal) { // como eu fiz
    if(animal == gato) {
        console.log("brincar com ratinho")
    } else if (animal == cachorro) {
        console.log("brincar com bolinha)
    } else if(animal == papagaio){
        console.log("brincar de cantar")
    } else if(animal == cavalo){
        console.log("brincar de correr")
    } else if(animal == cobra){
        console.log("não brinque com cobras")
    } else {
        console.log(`Não sei que tipo de brincadeira o animal ${animal} gosta`)
    }
}

Esse exercício é uma adaptação do problema da caixa de joias.

class Gato {}
class Cachorro {}
class Cobra {}
class Papagaio {}
class Hamster {}

function brincar(animal) {
    if(animal instanceof Gato){
        console.log("Use uma cordinha")
    }
   else if(animal instanceof Cachorro){
        console.log("pique-esconde")
    }
    else if(animal instanceof Papagaio){
        console.log("Imite ele")
    }
    else if(animal instanceof Hamster){
        console.log("Alise a cabeça dele")
    }
    else {
        console.log("melhor não brincar")
    }
}