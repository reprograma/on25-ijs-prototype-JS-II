1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

function quantasChaves() {
return this.keys().lenght
}

Object.prototype.quantasChaves = quantasChaves

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

let zeus = New Animal("Zeus", 42, "preto", false, "labrador", []) {
this.nome = nome,
this.idade = idade,
this. cor = cor,
this.castrado = castrado,
this.raca = raca,
this.historico = New historico
}

zeus.latir = () => {
console.log(" au au")
}

Animal.prototype.brincar(cachorro) = "bola"
Animal.prototype.brincar(gato) = "varinha"
Animal.prototype.brincar(cobra) = false
