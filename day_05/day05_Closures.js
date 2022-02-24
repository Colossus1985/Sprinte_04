//  1. Dans la conclusion de l'article d'introduction aux closures, l'auteur décrit la closure createCounter(). Réimplémentez cette closure.
function addId() {
  let id = 1;
  return function () {
    return id++;
  };
}

let counter = addId();
let counter_second = addId();

//  2. Dans cette partie de l'article une fonction createAdder() est décrite. Créez une closure createAdder(offset) qui prend en paramètre un nombre offset et qui retourne une fonction adder(b). La fonction adder(b) prend en paramètre un nombre b et retourne le nombre offset + b.
let offset = 10;
function createAdder(offset) {
  function addNumbers(b) {
    let ret = offset + b;
    return ret;
  }
  return addNumbers;
}
let adder = createAdder(offset);
let sum = adder(8);
console.log("1.2", sum);

//  3. Créez une closure createMultiplier(factor) suivant la même démarche que la closure createAdder(offset).
let factor = 2;
function createMultiplier(factor) {
  function factNumbers(b) {
    let fact = factor * b;
    return fact;
  }
  return factNumbers;
}
let facteur = createMultiplier(factor);
let end_sum = facteur(10);
console.log("1.3", end_sum);
