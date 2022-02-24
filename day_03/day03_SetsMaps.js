const list_countries = [
  "Finland",
  "Iceland",
  "Norway",
  "Sweden",
  "Germany",
  "Japon",
  "China",
  "USA",
];
//  1. Créez un ensemble vide set
const mySet1 = new Set();
//console.log("1.1", mySet1);

//  2. Créez un ensemble set contenant 0 à 10 en utilisant la boucle
for (let index1 = 0; index1 < 10; index1++) {
  mySet1.add(index1);
}
//console.log("1.2", mySet1);

//  3. Supprimez un élément d'un ensemble set
mySet1.delete(2);
//console.log("1.3", mySet1);

//  4. Effacez un ensemble set
for (let item of mySet1) {
  mySet1.delete(item);
}
//console.log("1.4", mySet1);

//  5. (Facultatif) Créez un ensemble set de 5 éléments de chaîne à partir du tableau countries
const mySet2 = new Set();
for (let i = 0; i < list_countries.length; i++) {
  mySet2.add(list_countries[i]);
}
//console.log("1.5", mySet2);

//  6. Créez un dictionnaire map avec comme clés les pays et en valeur le nombre de caractères du pays associé
let dict = new Map();

for (let i = 0; i < list_countries.length; i++) {
  dict.set(list_countries[i], list_countries[i].length);
}
//console.log("1.6", dict);

//###---Exercises: Level 2---##############################################################################

//  1. Calculer l'union de a et b
const first = new Set([4, 5, 8, 9]);
const second = new Set([3, 4, 5, 7]);

const union = new Set([...new Set([...first, ...second])]);
console.log("2.1", union);

//  2. Calculer l'intersection entre a et b
//let res_intersection = intersection();
//console.log("2.2", res_intersection);

function intersection(first, second) {
  var intersection = new Set();
  for (var elem of second) {
    if (first.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
