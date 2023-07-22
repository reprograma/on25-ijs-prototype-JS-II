class Cachorro{
    #cor //privado
    static nomeCientifico = "Canis lupus familiaris"; //É um atributo da classe, não do objeto, serve para todos os cachorros e nao para um especifico como instanciei o cachorro1
    constructor(nome, idade, cor , castrado, raca){
        this.nome = nome;
        this.idade = idade;
        this.#cor = cor;
        this.castrado = castrado;
        this.raca = raca;
        this.historicoMedico = { vacinas: [], consultas: [], procedimentos: [] };
    }
    static chamar(){
        console.log(`ps ps ps`)
    }
    latir(){
        console.log("Au au");
    } 
    addVacina(vacina){
        this.historicoMedico.vacinas.push(vacina);
    }
    addConsulta(consulta){
        this.historicoMedico.consultas.unshift(consulta);
    }
    addProcedimento(tipo, motivo){
        this.historicoMedico.procedimentos.unshift({ tipo: tipo, motivo: motivo });
    }
    get getCor() {
        return this.#cor;
    }
    setCor(newCor) {
        this.cor = newCor;
    }
    fofocar(){
        console.log(`O cachorro ${this.nome} está fofocando o segredo da cor ${this.#cor}`);
    } 
}

let cachorro1 = new Cachorro("Rex", 3, "Marrom", true, "Vira-lata");
cachorro1.addConsulta("14/07/2023");
cachorro1.addConsulta("15/07/2023");
cachorro1.addVacina("Vacina 1");
cachorro1.addVacina("Vacina 2");
cachorro1.addProcedimento("Castração", "Saúde");
cachorro1.addProcedimento("Hemograma", "Saúde");
console.log(cachorro1);
console.log(cachorro1.historicoMedico)


let cachorro2 = new Cachorro("Reweqwewqex", 3, "Marrom", true, "Vira-lata");
cachorro2.addConsulta("14/07/2023");
cachorro2.addConsulta("15/07/2023");
cachorro2.addVacina("Vacina 1");
cachorro2.addVacina("Vacina 2");
cachorro2.addProcedimento("Castração", "Saúde");
cachorro2.addProcedimento("Hemograma", "Saúde");
console.log(cachorro2);
console.log(cachorro2.historicoMedico)

let cachorro3 = new Cachorro("Toto", 2, "Preto", false, "Poodle");
console.log(cachorro2.getCor);
console.log(cachorro2.cor) 
console.log(cachorro2.fofocar()) 

Cachorro.chamar();
console.log(Cachorro.nomeCientifico);


// 3. Escreva uma função `brincar`, que te dá instruções sobre como brincar com cada espécie de animal. A função deve receber um animal como parâmetro (gato, cachorro, cobra, papagaio e pelo menos mais um outro animal de sua escolha) e, baseado na sua espécie, retornar qual brinquedo você deveria usar com ele. Ou, se for uma cobra, te dizer para não brincar com ela.  

class Animal {
    constructor(nome, idade, especie) {
      this.nome = nome;
      this.idade = idade; 
      this.especie = especie;
    }
  
    brincar(tipo_animal) {
        if (tipo_animal == "cachorro") {
            return "Você pode brincar de buscar a bolinha";
        } else if (tipo_animal == "gato") {
            return "Você pode brincar de bolinha de lã";
        } else if (tipo_animal == "cobra") {
            return "Não é possível brincar com uma cobra";
        } else if (tipo_animal == "papagaio") {
            return "Você pode ensinar o papagaio a falar";
        } else if (tipo_animal == "coelho") {
            return "Você pode brincar de esconde-esconde";
        } else {
            return "Animal não encontrado";
        }
    }
}
    
class Cachorro extends Animal {
    brincarCachorro() { 
        return super.brincar("cachorro");
    }
}

class Gato extends Animal {
    brincarGato() {
        return super.brincar("gato");
    }
}

class Cobra extends Animal {
    brincarCobra() {
        return super.brincar("cobra");
    }
}

class Papagaio extends Animal {
    brincarPapagaio() {
        return super.brincar("papagaio");
    }
}

class Coelho extends Animal {
    brincarCoelho() {
        return super.brincar("coelho");
    }
}

let cachorro = new Cachorro("Rex", "Marrom", "Cachorro");
let gato = new Gato("Miau", "Preto", "Gato");
let cobra = new Cobra("Cobrinha", "Verde", "Cobra");
let papagaio = new Papagaio("Loro", "Verde", "Papagaio");
let coelho = new Coelho("Bolinha", "Branco", "Coelho");
console.log(cachorro.brincarCachorro());

