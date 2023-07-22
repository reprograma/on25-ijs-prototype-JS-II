class Animal {
    constructor(name, age, color, checkups = []) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.checkups = checkups;
    }

    consult = () => console.log(`${this.name} was checked`);
    

    play = () => console.log(`${this.name} is playing.`)
    

    caress = () => console.log(`${this.name} is being caressed.`);

    feed = (food) => console.log(`${this.name} is eating ${food}.`);
}

class DomesticAnimal extends Animal {
    constructor(name, age, color, vaccines, checkups, neutered) {
        super(name, age, color, checkups);
        this.vaccines = vaccines;
        this.neutered = neutered;
    }

    vaccinate = (newVaccine) => {
        this.vaccines.push(newVaccine);
        console.log(`${newVaccine} applied to ${this.name}`);
    };

    neuter = () => {
        this.neutered = true;
        console.log(`${this.name} has been neutered`);
    };
}

class Cat extends DomesticAnimal {
    constructor(name, age, color, vaccines, checkups, neutered, external, social) {
        super(name, age, color, vaccines, checkups, neutered);
        this.external = external;
        this.social = social;
    }

    feed = (food) => {
        this.social = food === "chicken" || food === "sachet" || food === "fish";
    }

    meow = () => {
        console.log(`${this.name} is ${this.social ? "purring" : "hissing"}.`);
    };
}

class Dog extends DomesticAnimal {
    constructor(name, age, color, vaccines, checkups, neutered, breed) {
        super(name, age, color, vaccines, checkups, neutered);
        this.breed = breed;
        this.#injured = false;
    }

    #injured;

    setInjured = (state) => {
        this.#injured = state;
    }

    play = () => (this.#injured ? console.log(`${this.name} is hiding because it's injured.`) : console.log(`${this.name} is playing.`));

    bark = () => console.log(`${this.name} is barking`);

    consult = () => {
        super.consult();
        this.play();
    }
}

class Hamster extends Animal {
    constructor(name, age, color, type, checkups) {
        super(name, age, color, checkups);
        this.type = type;
    }

    play = () => console.log(`${this.name} is playing`);

    consult = () => {
        super.consult();
        this.play();
    }
}

class Parrot extends Animal {
    constructor(name, age, color, checkups) {
        super(name, age, color, checkups);
    }

    play = () => console.log(`${this.name} is playing.`)

    feed = (food) => {
        super.feed(food);
    }

    speak = () => {
        this.play() || this.feed();
        console.log(`${this.name} is talking.`)
    }
}

const cat = new Cat("Nina", 1.5, "tabby", ["rabies"], [], true, false, true);
const dog = new Dog("Zeus", 3.5, "black", [], [], false, "labrador");
const hamster = new Hamster("Yogurt", 1.5, "white and orange", "syrian");
const parrot = new Parrot("Jose", 13, "green", []);


//para testar é só chamar o animal e o método, por exemplo:

cat.feed("egg");
cat.meow();
dog.play();
