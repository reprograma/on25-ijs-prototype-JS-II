class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.checkup = [];
  }

  checkups() {
    let time = new Date();
    let checkupDate = time.toGMTString();
    this.checkup.push(checkupDate);
    this.checkup.sort((dateA, dateB) => dateB - dateA);
    console.log(this.checkup);
  }
}
//-----------------------------------------------------------------------
class DomesticType extends Animal {
  constructor(name, age, color, checkup, neutered) {
    super(name, age, color, checkup);
    this.vaccine = [];
    this.neutered = neutered;
  }

  vaccinate(vaccines) {
    this.vaccine.push(vaccines);
    console.log(this.vaccine);
    super.checkups();
  }

  neuter() {
    if (this.neutered == true) {
      console.log("status: castrado")
    } else {
      this.neutered = true;
      super.checkups();
    }
  }

  checkups() {
    super.checkups();
    if (this.vaccine.length > 0) {
      console.log(this.checkup);
    } else if (this.neutered) {
      console.log(`${this.checkup} status realizado`);
    } else if (!this.neutered) {
      console.log(`${this.checkup} status`);
    }
  }

}


//----------------------------------------------------------------------

class Cat extends DomesticType {
  constructor(name, age, color, extern, social, checkup) {
    super(name, age, color, checkup);
    this.extern = extern;
    this.social = social;
  }

  meow() {
    console.log("miau miau miau");
  }

  feed() {
    this.social = true;
    console.log(`Miau comi todo o sache. Agora quero carinho`);
  }

  pet() {
    if (this.social) {
      console.log(`Rororon`);
    } else {
      console.log("dont touch me zzzzzzzz");
    }
  }
}

//-------------------------------------------------------------------

class Dog extends DomesticType {
  #hidden;

  constructor(name, age, color, checkup, hidden) {
    super(name, age, color, checkup);
    this.#hidden = hidden;
    this.injury = false;
  }

  bark() {
    console.log("Au Au Au");
  }

  feed() {
    console.log(`Quero franguinho, estou cansada de ração!`);
  }

  pet() {
    console.log(`AU AU AU coça minha barrinha`);
  }

  hide() {
    this.injury = true;
    console.log(`buah buah, vou para minha casinha`);
  }

  play() {
    if (this.injury) {
      let choro = `Não quero brincar, ${this.#hidden}`;
      console.log(`${this.name} onde você está? Vamos brincar`);
      console.log(choro);
      console.log(`${this.name}, vamos para o veterinário agora!`);
    } else {
      console.log(`${this.name} onde você está? Vamos brincar`);
      console.log(`Au Au Au ...Cadê minha bolinha. Au Au Au`);
    }
  }
}
//-----------------------------------------------------------------

function call(animalList) {
  let animalRequestList = []
  animalList.filter(animal => {
    if (animal instanceof Dog || (animal instanceof Cat && animal.social == true)) {
      animalRequestList.push(animal.name)
    }
  })
  return animalRequestList
}
//-----------------------------------------------------------------

class Parrot extends Animal {
  constructor(name, age, color, checkup) {
    super(name, age, color, checkup);
    this.food = false;
    this.toy = false;
  }

  feed() {
    this.food = true;
    console.log(`Hora da minha comida!`);
  }

  play() {
    this.toy = true;
    console.log(`Hora de play om minha colordinha!`);
  }
  pet() {
    console.log(`loro, loro`);
  }

  talk() {
    if (this.toy || this.food) {
      console.log(`${this.name}, me conte uma piada`);
      console.log(
        "...Tentaram me vender um óculos sem armação. Não comprei, era armação. hahaha"
      );
    } else {
      console.log(`${this.name} me conte uma piada`);
      console.log(`...............`);
    }
  }
}

//-------------------------------------------------------------------

class Mouse extends Animal {
  constructor(name, age, color, checkup) {
    super(name, age, color, checkup);
    this.serenity = false;
  }

  feed() {
    console.log(`Hora da minha comida!`);
  }

  play() {
    this.serenity = true;
    console.log(`Está calmo`);
  }
  pet() {
    console.log(`snif sniff`);
  }

  checkups() {
    super.checkups();
    if (this.serenity) {
      let serenity = `fufufu `;
      console.log(`${this.name} vou te examinar`);
      console.log(serenity);
    } else {
      this.checkup.pop();
      console.log(this.checkup);
    }
  }
}

//--------------------------------------------------------------------------------
let meowth = new Cat("Meowth", 24, "black", true, false,false);
meowth;
meowth.meow();
meowth.checkups();
meowth.feed();
meowth.pet();
meowth.vaccinate("Anti-rabies");
meowth.neuter();

let suzy = new Dog("Suzy", 24, "black",true,"minha perna está doendo");
suzy;
suzy.bark();
suzy.checkups();
suzy.hide();
suzy.play();
suzy.escondido;
suzy.feed();
suzy.pet();

let candy = new Mouse("candy", 1.5 , "branco");

candy.checkups()
candy.play()
candy


let jade = new Parrot("Jade", 13, "verde");
jade.talk();
jade.talk();
jade.checkups()
