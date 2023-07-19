let crys = new Cat("Crys", 12, "cinza com branco");
let scooby = new Dog("Scooby", 15, "marrom", "dogue alemão");
let iogurte = new Hamster("Iogurte", 1.5, "branco e laranja", "sírio");
let jose = new Papagaio("José", 13, "verde");

let listaAnimais = [crys, scooby, iogurte, jose];

function chamar(listaAnimais) {
  const isAnimalCallable = (animal) =>
    animal instanceof Dog || (animal instanceof Cat && animal.social == true);

  console.log("psiu");
  return listaAnimais.filter(isAnimalCallable);
}
