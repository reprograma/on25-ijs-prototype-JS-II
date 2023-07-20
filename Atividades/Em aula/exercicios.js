//exercicio 1

Object.prototype.quantasChaves = () => {
    return Object.keys(this).length;
}

//exercício 2



class Cachorro {
    constructor(nome, idade, cor, castrado, raca) {
        this.nome = nome,
        this.idade = idade,
        this.cor = cor,
        this.castrado = castrado,
        this.raca = raca,
        this.historico = []
    }
    
    latir() {
        console.log("wolf wolf");
    }
}

//exercicio 3

//animal é um objeto
function brincar(animal) {
    switch(animal.especie) {
        case "gato":
            console.log ("me joga uma bolinha de papel amassado");
        break;

        case "cachorro":
            console.log ("pique-pega");
        break;

        case "papagaio":
            console.log ("me deixa voar um cadinho fora da gaiola");
        break;

        case "bicho preguiça":
            console.log ("vou só ficar agarrado nesse galho e tá bom");
        break;

        case "cobra":
            console.log ("nem vem!");
        break
    };

}