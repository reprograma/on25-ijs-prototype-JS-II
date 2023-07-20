

class Animais {
    constructor(nome, idade, cor){
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.consultas = [];
    }
        
        consultar() { 
        this.consultas.push(new Date())
        }

         
        brincar() { 
            return (`${this.nome} está brincando`)
        }

        acariciar() { 
            console.log("Que coisa mais linda...") 
        }

        alimentar(comida) {
            console.log(`${this.nome} comeu ${comida}`); 
        }
        
}



 class Domestico extends Animais{
    constructor(nome, idade, cor){
        super(nome, idade, cor)
        this.vacinas = [];
    }
        vacinar(vacina) { 
        this.vacinas.push(vacina) 
        this.consultar();
    }

    castrar() { 
        if(this.castrado != true){
           this.castrado = true
           console.log(`${this.nome} agora é castrado!`);
           this.consultar();
       }else if(this.castrado === true){
           console.log(`${this.nome} já consta como castrado!`);
       }
   }
 }



class Gato extends Domestico {
    constructor(nome, idade, cor, comidaFavorita){
        super(nome, idade, cor)
        this.castrado = false
        this.externo = false
        this.social = false
        this.comidaFavorita = comidaFavorita
    }

    miar() {
            console.log("Miau, Miau") 
    }

    acariciar(){  
        super.acariciar()
        if(this.social === true){
            return console.log("ron ron ron")
        }else if(this.social === false){
            return console.log("sil sil sil")
        }
    }

    alimentar(comida){ 
        super.alimentar(comida)      
        if(comida === this.comidaFavorita){
            return this.social = true;
        } else if(comida != this.comidaFavorita){
            return this.social = false;
        }
    }
    
} 



let tapioca = new Gato("Tapioca", 2, "branca", "peixe")

let gengibre = new Gato("Gengibre", 3, "laranja", "frango")
    
let shoyo = new Gato("Shoyo", 2, "preto", "peixe")



class Cachorro extends Domestico {
    #segredo

    constructor(nome, idade, cor, raca, ferido, segredo){
        super(nome, idade, cor)
        this.castrado = false
        this.raca = raca
        this.ferido = ferido
        this.#segredo = segredo
    }

    latir(){
        console.log("Au Au Au");
    }

    brincar(){
        super.brincar() 
           if(this.ferido != false){
           console.log(`${this.nome} agora confia em você!`)
        }else {
            return (`${this.nome} está brincando`)
        }

    }

    contar() {
        if(this.ferido) {
          let contando = `...${this.#segredo}`

          console.log("Preciso contar uma coisa...");
          console.log(contando);
        }else{
            console.log("Não tenho nada para contar"); 
        }
    }
}


let caquinho  = new Cachorro("Caquinho", 10, "preta", "Buldog", false, false)
let mutley = new Cachorro("Mutley", 5, "malhada", "Viralata", true, "estou com a pata ferida!")


class Exotico extends Animais{
    constructor(nome, idade, cor) {
        super(nome, idade, cor)
    }
}


class Hamster extends Exotico {
    constructor(nome, idade, cor, tipo){
        super(nome, idade, cor)
        this.tipo = tipo
    }

    consultar(){
        super.brincar()
            console.log(`${this.nome} já pode ser consultado`)
        super.consultar()
    }
} 

let ligeirinho = new Hamster("Ligeirinho", 1, "branca", "sírio")

let larica = new Hamster("Larica", 2, "branca", "sírio")


class Papagaio extends Exotico{
    constructor(nome, idade, cor){
        super(nome, idade, cor)
    }

    brincar(){
        super.brincar()
        console.log("De novo, de novo...")  
    }

    alimentar(comida){
        super.alimentar(comida)  
        console.log("Gostosa, gostosa...") 
    }
}

let cagoeta = new Papagaio("Cagoeta", 2, "verde")

let dedoduro = new Papagaio("Dedoduro", 2, "verde")



// tentei de várias formas, mas não retorna os animais que precisam responder,
// fica a última versão, pois já apaguei todas as outras, frustrei.


    const animaisChamados = [
        tapioca, gengibre, shoyo, 
        caquinho, mutley,
        ligeirinho, larica,
        cagoeta, dedoduro
    ];

    

    function buscar(animaisChamados){
        const chamadaRespondida = animaisChamados.filter(animal);
        if((animal instanceof Domestico) && (this.social != false)){
            chamadaRespondida.push(this.nome);
            }       
            return console.log(chamadaRespondida)
        } 


        