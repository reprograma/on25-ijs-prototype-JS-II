class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.consultations = [];
    };

    consult() {
        this.consultations.push(new Date());
        this.consultations.reverse();
    };

    toFeed(animal, food) {
        if (animal instanceof Cat) {
            if (food === "frango" || food === "sachê" || food === "peixe") {
                console.log(`${food}!! essa é minha comida predileta!`);
            } else {
                console.log("Não gostei disso!! Eu quero frango, sachê ou peixe.");
            };
        } else if (animal instanceof Dog) {
            console.log(`Humm... ${food}, Isso é gostoso!`);
        } else if (animal instanceof Hamster) {
            console.log(`${food}, delicioso!!`);
        } else if (animal instanceof Parrot) {
            console.log(`${food}, gostoso!!`);
        };
    };

    caress(animal) {
        if (animal instanceof Cat) {
            console.log("ronrom ronrom Ʌ Ʌ");
        } else if (animal instanceof Dog) {
            console.log("♡(ᐢ ᴥ ᐢし)");
        } else if (animal instanceof Hamster) {
            console.log("ᘛ⁐̤ᕐᐷ");
        } else if (animal instanceof Parrot) {
            console.log("(•ө•)♡");
        };
    };

    toPlay(animal) {
        if (animal instanceof Cat) {
            console.log("brincando com uma cordinha");
        } else if (animal instanceof Dog) {
            console.log("brincando com uma bola!!");
        } else if (animal instanceof Hamster) {
            console.log("brincando em um labirinto!!");
        } else if (animal instanceof Parrot) {
            console.log("brincando no poleiro!!");
        };
    };
};

class Domestic extends Animal {
    constructor(name, age, color, castrated) {
        super(name, age, color);
        this.castrated = castrated;
        this.vaccines = [];
    };

    vaccinate(vaccine) {
        this.vaccines.push(vaccine);
        super.consult();
    };

    castrate() {
        if (this.castrated === false) {
            this.castrated = true;
            console.log("Animal castrado!!");
            super.consult();
        } else {
            console.log("Ops!!! Esse animal já foi castrado.");
        };
    };
};

class Cat extends Domestic {
    constructor(name, age, color, castrated, external, social) {
        super(name, age, color, castrated);
        this.external = external;
        this.social = social;
    };

    meow() {
        console.log("meow meow!! Ʌ Ʌ");
    };

    caress() {
        super.caress();
        if (this.social === true) {
            console.log("ronrom ronrom Ʌ Ʌ");
        } else {
            console.log("crirrrrrrr!!");
        };
    };

    toFeed(animal, food) {
        super.toFeed(animal, food);
        if (food === "frango" || food === "sachê" || food === "peixe") {
            this.social = true;
        }; 
    };
};

class Dog extends Domestic {
    #injured;

    constructor(name, age, color, castrated, race, injured) {
        super(name, age, color, castrated);
        this.race = race;
        this.#injured = injured;
    };

    yap() {
        console.log("yap yap!! ▼・ᴥ・▼");
    };

    toPlay() {
        super.toPlay();
       if(this.#injured === true) {
        console.log(`${this.name}, está ferido!! por isso se escondeu.`);
       } else {
        console.log("brincando com uma bola!!");
       };
    };
};

class Hamster extends Animal {
    constructor(name, age, color, type){
        super(name, age, color);
        this.type = type;
    };

    consult() {
        super.toPlay(Hamster);
        super.consult();
    };
};

class Parrot extends Animal {
    constructor(name, age, color) {
        super(name, age, color);
    };

    speak() {
        console.log(`O ${this.name} ama você!!`);
    };

    toFeed(animal, food) {
        super.toFeed(animal, food);
        this.speak();
    };
 
    toPlay() {
        super.toPlay(Parrot);
        this.speak();
    };
};

let nina = new Cat('nina', 12, 'laranja', false, false, false);
/* nina.castrate(); 
console.log(nina);
nina.caress();
nina.toFeed(Cat, "frango");
nina.meow();
nina.caress();
 */
let mia = new Cat('mia', 12, 'laranja', false, false, true);

let apollo = new Dog('apollo', 15, 'marrom', true, "labrador", true);
/* apollo.vaccinate("Gripe canina"); 
apollo.vaccinate("V8/V10");
console.log(apollo);
apollo.castrate();
apollo.yap();  */

let binha = new Hamster('binha', 5, 'branco', "sirio");
/* console.log(binha);
binha.toFeed(Hamster, "alface"); */ 

let louro = new Parrot('louro', 18, 'verde');
/* console.log(louro);
louro.speak();
louro.toPlay();  */ 



let listOfAnimals = [mia, apollo, nina, binha, louro];

const toCall = listOfAnimals.map(animal => {
    if(animal instanceof Dog || animal instanceof Cat && animal.social === true) {
        return console.log(animal.name);
    };
});
