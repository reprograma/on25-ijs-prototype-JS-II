1. Adicione uma função `quantasChaves()` a **todos** os objetos, que retorna quantas chaves aquele objeto possui.

//vai utilizar uma função já construida em aula
function quantasChaves(){
    return Object.keys(this).length
}

Object.prototype.quantasChaves = quantasChaves
nina.quantasChaves() ou {}.quantasChaves() -> se eu não tiver declarado a função

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