class Animal{
    #ferido = false;  
    constructor(nome, idade, cor, castrado,especie){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;1
        this.castrado = castrado; 
        this.vacinas = [];
        this.consultas = [];  
        this.especie = especie;
        this.#ferido; 
    }
    setFerido(ferido){
        this.#ferido = ferido;
    }
    vacinar(nova_vacina){
        this.vacinas.push(nova_vacina);
        this.consultar('vacinação', new Date());
    }
    consultar(motivo,data){ 
        if (this.especie == 'hamster'){
            this.consultas.push({motivo:motivo, data:data}); 
            this.brincar();
        }else{
            this.consultas.push({motivo:motivo, data:data});
        } 
    }
    castrar(){
        if (this.castrado == false){
            this.castrado = true;
            console.log('Castrando o animal...')
            this.consultar('castração', new Date());
        } else {
            console.log('Animal já castrado!')
        } 
    } 
    alimentar(comida){ 
        if (this.especie == 'gato'){
            if (comida == 'frango' || (comida == 'sache') || comida == 'peixe'){
                console.log(`Alimentando o ${this.especie} com ${comida} favorito dele`)
                this.social = true;
            } else {
                console.log(`Alimentando o ${this.especie} com ${comida}`)
                this.social = false;
            }
        }
        else if (this.especie == 'papagaio'){
            console.log(`Alimentando o ${this.especie} com ${comida}`)
            this.falar(); 
        } else {
            console.log(`Alimentando o ${this.especie} com ${comida}`) 
        }
    }
    acariciar(){
        if (this.social == true){
            this.ronronar();
        }else{
            this.silvar();
        }
    }
    brincar(){
        if (this.especie == 'papagaio'){ 
            console.log('Estou brincando com o papagaio!')
            this.falar();
        } else if (this.especie == 'cachorro'){
            if (this.#ferido) {
                console.log('O cachorro está ferido, não pode brincar!');
            } else {
                console.log("Estou brincando com o cachorro!");
            } 
        } else {
            console.log(`Estou brincando com o ${this.especie}!`)
        }
    }
    chamar(lista_animais) {
        let atenderam_chamado = [];
        let nao_atenderam_chamado = [];
    
        lista_animais.forEach(animal => {
            if ((animal.especie === 'gato' && animal.social === true) || animal.especie === 'cachorro') {
                atenderam_chamado.push(animal.nome);
            } else {
                nao_atenderam_chamado.push(animal.nome);
            }
        });
        console.log('Animais que atenderam o chamado:', atenderam_chamado);
        console.log('Animais que não atenderam o chamado:', nao_atenderam_chamado);
    } 
}

class Gato extends Animal { 
    constructor(nome,idade,cor,castrado, externo){
        super(nome, idade, cor, castrado,'gato');
        this.externo = externo;
        this.social;
    }
    miar(){
        console.log("Miau!!!");
    } 
    ronronar(){
        console.log("Rrrr!"); 
    }
    silvar(){
        console.log("Ssss!");
    } 
} 
class Cachorro extends Animal {
    constructor(nome,idade,cor,castrado, raca){
        super(nome, idade, cor, castrado,'cachorro');
        this.raca = raca;
    } 
    latir(){
        console.log("Au au!");
    }   
} 
class Hamster extends Animal { 
    constructor(nome,idade,cor,tipo){
        super(nome, idade, cor, false, 'hamster');
        this.tipo = tipo;
    }   
}  
class Papagaio extends Animal { 
    constructor(nome,idade,cor){
        super(nome, idade, cor,false,'papagaio'); 
    }   
    falar(){
        console.log("O Papagaio está falando!");
    }
}

//Testes 

let gato = new Gato('Mingau', 2, 'frajola', false, 'Domestico');
let cachorro = new Cachorro('Valentina', 5, 'Preto e Branco', false, 'Dálmata');
let cachorro2 = new Cachorro('Dorinha', 1, 'bege', false, 'Poodle'); 
let hamster = new Hamster('Hamtaro', 1, 'Branco e Laranja','Sírio');
let papagaio = new Papagaio('Louro José', 5, 'Verde');

//Gatos sociáveis ronronam ao serem acariciados. Se um gato não for sociável, ele deve silvar.
// Você pode tornar um gato sociável alimentando ele com uma das comidas favoritas dos gatos: frango, sachê ou peixe.

gato.alimentar('melancia'); 
gato.acariciar();
gato.alimentar('frango');
gato.acariciar();  

// Cachorros costumam esconder quando estão feridos. Use um campo privado para essa informação, e só a exiba ao tentar `brincar()` com um cãozinho que está ferido. 

cachorro.brincar();
cachorro.setFerido(true);
cachorro.brincar();

//Ao consultar um hamster, você deve brincar com ele para que ele não fique estressado e tente fugir.

hamster.consultar('Exame de sangue','15/07/2023');

// Ao brincar com ou alimentar um papagaio, ele deve falar com você.

papagaio.alimentar('maçã');
papagaio.brincar(); 

//Sempre que vacinar um paciente, você deve adicionar uma nova consulta na lista. O mesmo vale para castrar um animal.
cachorro2.vacinar('Raiva');
cachorro2.vacinar('V8');
cachorro2.castrar();
console.log(cachorro2);

//Tentar castrar um animal que já está castrado deve retornar um erro.
gato.castrar();
gato.castrar();

//Você deve ter uma função `chamar()`, que recebe uma lista de animais e retorna quais dos animais da lista responderam e vieram brincar. Todos os cachorros respondem quando chamados, assim como os gatos que são sociais. Hamsters, papagaios e gatos não sociais não virão.

lista = [gato, cachorro, cachorro2, hamster, papagaio];
let animal = new Animal(); 
animal.chamar(lista); 