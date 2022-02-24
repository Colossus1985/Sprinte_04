//  1. Créez un objet vide appelé chien
let dogs = {};

//  2. Affichez l'objet chien sur la console
console.log("1.2", dogs);

//  3. Ajoutez le nom, les pattes, la couleur,
//  l'âge et les propriétés d'écorce pour l'objet chien. La propriété bark est une méthode qui renvoie woof woof
let dog_3 = { name: "Colossus", pattes: 4, color: "white", age: 4, bark: bark() };
function bark() {
  let text = "Woof Woof";
  return text;
}
console.log("1.3", dog_3);

//  4. Obtenez le nom, les pattes, la couleur, l'âge et la valeur de l'écorce de l'objet chien
let name = dog_3.name;
let pattes = dog_3.pattes;
let color = dog_3.color;
console.log("1.4 name:", name, "pattes:", pattes, "color:", color);

//  5. Définissez les nouvelles propriétés de l'objet chien: race, getDogInfo
let dog_5 = { name: "Colossus", pattes: 4, color: "white", race: "caniche" };

console.log("1.5", getDogInfo());

function getDogInfo() {
  let name = dog_5.name;
  let pattes = dog_5.pattes;
  let color = dog_5.color;
  let race = dog_5.race;

  let dog_5_info = "name: " + name + " pattes: " + pattes + " color: " + color + " race: " + race;

  return dog_5_info;
}
