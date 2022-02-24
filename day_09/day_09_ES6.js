//    Le mot clé let
swap();
function swap(x, y) {
  if (x != y) {
    var old = x;
    let tmp = x;
    x = y;
    y = tmp;
  }

  console.log("1a", typeof old); // number
  console.log("1b", typeof tmp); // undefined
}

//    Templates et chaînes de caractères

let me = "Yannick";
let mAge = 29;
let result = `Je suis ${me} et j'ai ${mAge} ans`;
console.log("2", result);

//    Les paramètres par défaut

var addold = function (x, y) {
  var x = typeof x === "number" ? x : 0;
  var y = typeof y === "number" ? y : 0;
  return x + y;
};
console.log("3old", addold(3, 5));

let addnew = function (x = 0, y = 0) {
  return x + y;
};
console.log("3new", addnew(3, 5));

//    Boucle for - of

let languages = ["C", "C++", "C#", "JavaScript"];

for (let language of languages) {
  console.log("4a", language);
}
for (let [index, language] of languages.entries()) {
  console.log("4b", `Index: ${index} => Valeur: ${language}`);
}

//    Évolution des objets littéraux

let Engine = {
  initialize() {
    this.display("Init");
  },
  display(message) {
    console.log("5", message);
  },
};

//    Fonctions lambda alias Arrow function

let values = [65, 7, 78, 1, 32, 66];
values.sort((a, b) => {
  return b - a;
});
console.log("5a", values);

let Engine5 = {
  initialize(element) {
    element.addEventListener(
      "keydown",
      (event) => {
        this.display(event.type);
      },
      false
    );
  },
  display(message) {
    console.log("5b", message);
  },
};

//    Les classes et l'héritage

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Hi I'm ${this.name} and I'm ${this.age} years old!`;
  }
}

let p = new Person("John", 18);
console.log("6a", p.toString());

//    héritage simple

class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  toString() {
    return super.toString() + ` :: I'm a Developer who likes ${this.language}`;
  }
}

let d = new Developer("Yannick", 29, "JavaScript");
console.log("6b", d.toString());
