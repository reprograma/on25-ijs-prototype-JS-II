1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

function quantasChaves() {
    return Object.keys(this).length
}

Object.prototype.quantasChaves = quantasChaves

rex.quantasChaves()

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



3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.

class Gato {

}

class Cachorro {

}

class Cobra {

}

class Papagaio {

}

class Hamster {

}


function brincar(animal) {
    if (animal instanceof Gato) {
        console.log("Use uma cordinha");
    } else if (animal instanceof Cachorro) {
        console.log("Se esconda e depois apareça");
    } else if (animal instanceof Papagaio) {
        console.log("Fale e espere ele repetir");
    } else if (animal instanceof Hamster) {
        console.log("Gire a rodinha");
    } else if (animal instanceof Cobra) {
        console.log("Cuidado, não brinque com ela");
    } else {
        console.log("Classe do animal não reconhecida!");
    }
}

let nina = new Gato()
let rex = new Cachorro()
let zeh = new Papagaio()
let gigante = new Hamster()
let sepia = new Cobra()


brincar(nina)
brincar(rex)
brincar(zeh)
brincar(gigante)
brincar(sepia)