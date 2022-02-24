//  1. Créez un fichier séparé countries.js et stockez le tableau countries dans ce fichier,
//  créez un fichier distinct web_techs.js et stockez le tableau webTechs dans ce fichier.
//  Accédez aux deux variables, countries et webTechs, depuis le fichier main.js.
//  Indice: l'ordre d'inclusion des fichiers javascript dans le fichier html a une influence.
console.log("1.1", countries);
console.log("1.1", webTechs);

//  2. A partir du code suivant :
// main.js
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.";
let list_words = [];
text = text.replaceAll(",", "").replaceAll(".", "");
list_words = text.split(" ");

console.log("1.2a", list_words);
console.log("1.2b", list_words.length);

//  3. Dans le panier suivant (shoppingCart), ajoutez, supprimez, modifiez des articles
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//  ajoutez 'Meat' au début de votre panier s'il n'a pas déjà été ajouté.
/*
let item_add = "Meat";
for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] != item_add) {
    shoppingCart.unshift(item_add);
  }
}
console.log("2.3a", shoppingCart);
*/
//  ajoutez 'Sugar' à la fin de votre panier s'il n'a pas déjà été ajouté.
let list_add_sugar = [];
let verification;
item_add = "Sugar";
for (let i = 0; i < shoppingCart.length; i++) {
  list_add_sugar.push(shoppingCart[i]);
}

for (let i = 0; i < list_add_sugar.length; i++) {
  if (list_add_sugar[i] == item_add) {
    verification = false;
  } else {
    verification = true;
  }
}
if (verification == true) {
  list_add_sugar.push(item_add);
}

console.log("2.3b", list_add_sugar);

//  supprimez 'Honey' si vous êtes allergique au miel
let list_rm_honey = [];
let item_remove = "Honey";
let index_start;
for (let i = 0; i < shoppingCart.length; i++) {
  list_rm_honey.push(shoppingCart[i]);
}
for (let i = 0; i < shoppingCart.length; i++) {
  if (list_rm_honey[i] == item_remove) {
    index_start = i;
  }
}
list_rm_honey.splice(index_start, 1);
console.log("2.3c", list_rm_honey);

//  modifier le thé en 'Green Tea'
let list_modif_tea = [];
let old_value = "Tea";
let new_value = "Green Tea";
for (let i = 0; i < shoppingCart.length; i++) {
  list_modif_tea.push(shoppingCart[i]);
}

for (let i = 0; i < list_modif_tea.length; i++) {
  if (list_modif_tea[i] == old_value) {
    list_modif_tea[i] = new_value;
  }
}
console.log("2.3d", list_modif_tea);

//  4. Dans le tableau countries, vérifiez si Morocco existe dans le tableau et s'il existe, affichez "MOROCCO". S'il n'existe pas, ajoutez Morocco à la liste des pays.
let list_countrie_marocco = [];
for (let i = 0; i < countries.length; i++) {
  list_countrie_marocco.push(countries[i]);
}
let value_to_check = "Marocco";
let verification_maroc = false;

for (let i = 0; i < list_countrie_marocco.length; i++) {
  if (list_countrie_marocco[i] == value_to_check) {
    verification_maroc = true;
    let country_to_show = list_countrie_marocco[i].toUpperCase();
    console.log("2.4a", country_to_show);
  }
}
if (verification_maroc == false) {
  console.log("2.4b ajout de", value_to_check);
  list_countrie_marocco.push(value_to_check);
}
console.log("2.4b", list_countrie_marocco);

//  5. Concaténez les deux variables suivantes et stockez-les dans une variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "VueJs", "VueX"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = [];

for (let i = 0; i < frontEnd.length; i++) {
  fullStack.push(frontEnd[i]);
}
for (let i = 0; i < backEnd.length; i++) {
  fullStack.push(backEnd[i]);
}

console.log("2.5", fullStack);
