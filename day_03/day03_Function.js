const list_countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const list_names = ["Max", "Mathias", "Elias", "Brook"];
const list_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list_products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//  1. Expliquez la différence entre forEach, map, filter, et reduce.
// The forEach() method calls a function for each element in an array.
// map() creates a new array from calling a function for every array element.
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The reduce() method executes a reducer function for array element.

//  2. Définissez une fonction d'appel avant de les utiliser dans forEach, map, filter ou reduce.

//  3. Utilisez forEach pour affichez (console.log) chaque pays du tableau des pays.
let text = "";
list_countries.forEach(screenCountries);
function screenCountries(item) {
  text = item;
  //console.log("1.3", text);
}

//  4. (Facultatitf) Utilisez forEach pour console.log chaque nom dans le tableau names.
let names = "";
list_names.forEach(screenNames);
function screenNames(item) {
  names = item;
  console.log("1.4", names);
}

//  5. (Facultatitf) Utilisez forEach pour console.log chaque nombre dans le tableau de nombres.
let number = "";
list_numbers.forEach(screenNumbers);
function screenNumbers(item) {
  number = item;
  //console.log("1.5", number);
}

//  6. Utilisez map pour créer un nouveau tableau où chaque élément est le nom du pays en majuscule dans le tableau des pays.
list_countries_maj = list_countries.map(countriesUpper);
function countriesUpper(item) {
  item = item.toUpperCase();
  return item;
}
//console.log("1.6", list_countries_maj);

//  7. Utilisez map pour créer un nouveau tableau où chaque élément est la longueur du pays à partir du tableau de pays.
list_countries_len = list_countries.map(countriesLength);
function countriesLength(item) {
  item = item.length;
  return item;
}
//console.log("1.7", list_countries_len);

//  8. (Facultatitf) Utilisez map pour créer un nouveau tableau en calculant chaque nombre en racine carré Math.sqrt() dans le tableau de nombres.
list_numbers_racine = list_numbers.map(racine);
function racine(item) {
  item = Math.sqrt(item);
  return item;
}
//console.log("1.8", list_numbers_racine);

//  9. Utilisez map pour changer chaque nom en majuscules dans le tableau des noms
list_names_maj = list_names.map(namesUpper);
function namesUpper(item) {
  item = item.toUpperCase();
  return item;
}
//console.log("1.9", list_names_maj);

//  10. Utilisez filter pour filtrer les pays contenant land.
console.log("1.10", list_countries.filter(checkLand));
function checkLand(item) {
  return item.match("land");
}

//  11. (Facultatitf) Utilisez filter pour filtrer les pays comportant exactement 6 caractères dans le tableau des pays.
console.log("1.11", list_countries.filter(checkLengthLess));
function checkLengthLess(item) {
  return item.length <= 6;
}

//  12. Utilisez filter pour filtrer les pays contenant 6 lettres et plus dans le tableau des pays.
console.log("1.12", list_countries.filter(checkLengthHeigh));
function checkLengthHeigh(item) {
  return item.length >= 6;
}
//  13. Utilisez filter pour filtrer les noms qui commence par 'E' dans le tableau names.
console.log("1.13", list_names.filter(checkE));
function checkE(item) {
  return item[0] == "E";
}

//  14. (Facultatitf) Utilisez filter pour filtrer uniquement les produits qui ont un prix (une valeur numérique) dans le tableau products.
console.log("1.14", list_products.filter(checkPrice));
function checkPrice(item) {
  return item.price >= "0";
}

//  15. Utilisez reduce pour additionner tous les nombres du tableau de nombres.
console.log("1.15", list_numbers.reduce(addNumbers));
function addNumbers(numbers_sum, item) {
  return numbers_sum + item;
}

//  16. (Facultatitf) Utilisez reduce pour concaténer tous les pays et pour produire cette phrase:
//  Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
/* let text_concat = "";
list_countries.filter(concatText);
function concatText(item) {
  text_concat = text_concat + item + ", ";
}

console.log("1.16", text_concat.length);
console.log("1.16", text_concat);
*/

//  17. Expliquez la différence entre some et every
// The some() method checks if any array elements pass a test (provided as a function).
// The every() method executes a function for each array element.

//  18. Utilisez some pour vérifier si la longueur de certains noms est supérieure à sept dans le tableau des noms.
console.log("1.18", list_names.some(checkNameLength));
function checkNameLength(item) {
  return item.length > 7;
}

//  19. Utilisez every pour vérifier si tous les pays contiennent le mot land.
console.log("1.19", list_countries.every(checkCountrieLand));
function checkCountrieLand(item) {
  return item.match("land");
}

//  20. Expliquez la différence entre find et findIndex.
// The find() method returns the value of the first element that passes a test.
// The findIndex() method executes a function for each array element.

//  21. Utilisez find pour trouver le premier pays contenant seulement six lettres dans le tableau des pays.
console.log("1.21", list_countries.find(findLength));
function findLength(item) {
  return item.length == 6;
}

//  22. Utilisez findIndex pour trouver la position du premier pays contenant seulement six lettres dans le tableau des pays.
console.log("1.22", list_countries.findIndex(findIndexCountrie));
function findIndexCountrie(item) {
  return item.length == 6;
}

//  23. (Facultatitf) Utilisez findIndex pour trouver la position de Norway dans le tableau countries; si elle n'existe pas dans le tableau, vous obtiendrez -1.
console.log("1.23", list_countries.findIndex(findIndexNorway));
function findIndexNorway(item) {
  return item == "Norway";
}

//  24. (Facultatitf) Utilisez findIndex pour trouver la position de Russia dans le tableau countries; si elle n'existe pas dans le tableau, vous obtiendrez -1.
console.log("1.24", list_countries.findIndex(findIndexRussia));
function findIndexRussia(item) {
  return item == "Russia";
}
