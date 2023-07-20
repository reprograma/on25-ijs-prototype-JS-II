class Animal {
    static alimentosToxicos = [
        "chocolate",
        "uva", 
        "passas", 
        "nozes", 
        "abacate"
    ];

    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = [];
    }

    consultar(dataDaConsulta) {
        this.consultas.unshift(dataDaConsulta);
        console.log("Consulta realizada!");  
    }

    brincar() {
        console.log("Brincadeira realizada com sucesso!");
    }
    
    acariciar() {
        console.log("O bichinho foi acariciado");
    }

    alimentar(comida, alimentosProibidos){
        if(this.comidaPermitida(comida, alimentosProibidos)) {
            console.log("Bichinho satisfeito!");
        } else {
            console.error("Cuidado! Essa comida faz mal ao bichinho");
        }
    }

    comidaPermitida(comida, alimentosProibidos) {
        if (alimentosProibidos && alimentosProibidos.length() > 0) {
            this.alimentosToxicos.concat(alimentosProibidos);
        }

        if(this.alimentosToxicos.some(alimento => alimento == comida)) {
            return false;
        } else {
            return true;
        }
    }

    chamar(listaAnimais) {

        let listaDeAnimaisQueResponderam = [];

        if (listaAnimais.filter(function(animalChamado) {
            

            if(
                animalChamado instanceof Cachorro 
                || animalChamado instanceof Gato 
                && animalChamado.social
            ) {
                listaDeAnimaisQueResponderam.push(animalChamado)
            } 
        }))
       
        return listaDeAnimaisQueResponderam;
    }
} 

class AnimalDomestico extends Animal {
 
    constructor(nome, idade, cor, castrado) {
        super(nome, idade, cor)  
        this.castrado = castrado
        this.vacinas = []
    }

    vacinar(vacina) {
        let dataDaConsulta = new Date();
        this.vacinas.unshift(vacina);
        this.consultar(dataDaConsulta);
        console.log("Imunidade do bichinho atualizada com sucesso!");
    }
              
    castrar() {
        let dataDaConsulta = new Date();
        if(this.castrado) {
            console.error("Ops! Esse animal já está castrado.");
        } else {
            this.consultar(dataDaConsulta);
            console.log("Bichinho castrado!");
            return this.castrado = true;
        }
    }
}

class AnimalExotico extends Animal {
 
    constructor(nome, idade, cor) {
        super(nome, idade, cor);
    }
}

class Gato extends AnimalDomestico {

    static nomeCientifico = "Felis catus";
    static vidaMedia = "12 - 18 anos";
    static alimentosProibidos = ["leite","ossos","doces"];
    static alimentosFavoritos = ["frango","peixe","sachê"];
    
    constructor(nome, idade, cor, castrado, externo, social) {
        super(nome, idade, cor, castrado);
        this.social = social
        this.externo = externo
    }

    alimentar(comidaOferecida) {
        if(this.comidaPermitida(comidaOferecida, this.alimentosProibidos)) {
            console.log("Bichinho satisfeito!");
        } else if(alimentosFavoritos.some(alimento => alimento == comidaOferecida) ) {
            this.social = true;
            console.log("Você acaba de fazer um miaumigo!");
        } else {
            console.error("Cuidado! Essa comida faz mal ao bichinho");
        }
    }

    miar() {
        console.log("miau miau miaaaaaau");
    }

    acariciar() {
        if(this.social) {
            console.log("ron ron ron");
        } else {
            console.log("grssssssss")
        }
    }

    tornarSociavel(comida) {
        this.alimentar(comida);
    }
    
} 

class Cachorro extends AnimalDomestico {

    static nomeCientifico = "Canis lupus familiaris";
    static vidaMedia = "10 - 13 anos";
    static alimentosProibidos = ["leite", "Bebidas alcoólicas", "doces"];

    #ferido;

    constructor(nome, idade, cor, castrado, raca, ferido) {
        super(nome, idade, cor, castrado)
        this.raca = raca
        this.#ferido = ferido
    }

    latir() {
        console.log("au au au");
    }

    brincar() { 

        if(this.#ferido) {
            console.log("O cãozinho está ferido")
        } else {
            console.log("Pega a bolinha!")
        }
    }
}

class Hamster extends AnimalExotico {

    static nomeCientifico = "Cricetinae";
    static vidaMedia = "2 - 3 anos";
    static alimentosProibidos = ["laranja","limão","lima","toranja","doces","bolo", "salgadinho"];

    constructor(nome, idade, cor, tipo) {
        super(nome, idade, cor)
        this.tipo = tipo
    }

   consultar(dataDaConsulta) {
        this.consultas.unshift(dataDaConsulta);
        this.brincar();
        console.log("Consulta realizada!");
   }
}

class Papagaio extends AnimalExotico {

    static nomeCientifico(tipo) {
        switch(tipo) {
            case "Papagaio-verdadeiro": 
            console.log("Amazona aestiva");
            break;

            case "Papagaio-de-peito-roxo": 
            console.log("Amazona vinacea");
            break;

            case "Papagaio-charão ": 
            console.log("Amazona petrei");
            break;

            case "Papagaio-de-cara-roxa": 
            console.log("Amazona brasiliensis");
            break;

            case "Papagaio-chauá ": 
            console.log("Amazona rhodocorytha");
            break;            
        }
    };
    static vidaMedia = "60 anos";
    static alimentosProibidos = ["semente de maça"];
    
    falar() {
        console.log("Dá o pé louro!")
    }

    brincar() {
        this.falar();
        super.brincar()
    }

    alimentar(comidaOferecida) {
        if(this.comidaPermitida(comidaOferecida, this.alimentosProibidos)) {
            this.falar();
            console.log("Bichinho satisfeito!");
        }  else {
            console.error("Cuidado! Essa comida faz mal ao bichinho");
        }
    }
   

}

let cookie = new Gato("Cookie", 5, "cinza e marrom", true, false, false);
let nise = new Gato("Nise", 2, "frajola", true, false, true);
let duquesa = new Gato("Duquesa", 2, "frajola", false, true, true);
let zoe  = new Cachorro("Zoe", 11, "caramelo", true, "srd", true);
let belinha  = new Cachorro("Belinha", 1, "preta e marrom", true, "srd", false);
let sophia  = new Cachorro("Sophia", 10, "cinza e marrom", true, "poodle", false);
let bonita  = new Cachorro("Bonita", 6, "branco e marrom", true, "srd", false);
let kimmy  = new Hamster("Kimmy", 2, "branco e marrom", "desconhecido");
let louro  = new Papagaio("Louro", 15, "verde");

const listaDeAnimais = [cookie, nise, duquesa, zoe, belinha, sophia, bonita, kimmy, louro];

//chamar(listaDeAnimais);