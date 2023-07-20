1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.


function quantasChaves() {
    return Object.keys(this).length
}

// não é boa prática mudar assim o objeto
// atrela a funcao feita para estar disponivel em todos os objetos

Object.prototype.quantasChaves() = quantasChaves 

nina.quantasChaves()

Object.keys(nina)


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


class Cachorro  {
   constructor(nome, idade, cor, castrado, raca) {
         this.nome = nome,
         this.idade = idade,
         this.cor = cor,
         this.castrado = castrado,
         this.raca = raca,
         this.historico = []

}
}

let jambo = new Gato("Jambo", 35, "preta", true, "viralata");

// caso tenha criado já a classe adiciona assim
Cachorro.prototype.latir = () => console.log("au au au") 

3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.


class Gato{} 
class Cachorro{} 
class Cobra{} 
class Papagaio{}
class Coelho{}

function Brincar(animal){
    if(animal instanceof Gato){
        return console.log("Use uma caixa")
    }else if(animal instanceof Cachorro){
        return console.log("Use uma bola")
    }else if(animal instanceof Cobra){
        return console.log("vc não deve brincar com ela")
    }else if(animal instanceof Papagaio){
        return console.log("vc deve conversar com ele")
    }else if(animal instanceof Coelho){
        return console.log("vc não deve pular com ele")
    }else {
        return console.log("Melhor não brincar")
    }
}

let nina = new Gato()

let bug = new Cachorro()

let louro = new Papagaio()

let ligeirinho = new Hamster() 

let nazare = new Cobra()

brincar(nina)

brincar(louro)

brincar(louro)
Imite ele

brincar(nina)
Use uma cordinha

// declarado assim ele não reconhece 
brincar(Papagaio)
melhor não brincar..

brincar(Cobra)
melhor não brincar...

brincar(nazare)
melhor não brincar...