//  1. Déclarez un tableau vide.
let list_empty = [];

//  2. Déclarer un tableau avec plus de 5 éléments.
let list_of_five = ["Shiva", "Steve", "Game", 5, true];

//  3. Trouvez la longueur (length) de votre tableau.
let length_list_of_five = list_of_five.length;
console.log("0.3", length_list_of_five);

//  4. Obtenez le premier élément, l'élément du milieu et le dernier élément du tableau.
let first_elem = list_of_five[0];
let middle_elem = list_of_five[Math.round(list_of_five.length / 2 - 1)];
let last_elem = list_of_five[list_of_five.length - 1];

console.log("0.4a", first_elem);
console.log("0.4b", middle_elem);
console.log("0.4c", last_elem);

//  5. Déclarez un tableau appelé mixedDataTypes, placez différents types de données dans le tableau et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5
let mixedDataTypes = [];
mixedDataTypes = ["Shiva", "Steve", "Game", 5, true, "Fidéliana"];
console.log(mixedDataTypes);

//  6.Déclarez un tableau nommé itCompanies et attribuez les valeurs initiales: Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon
let itCompanies = [];
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//  7. Affichez le tableau avec console.log()
console.log("0.7", itCompanies);

//  8. Affichez le nombre des entreprises dans le tableau.
console.log("0.8", itCompanies.length);

//  9. Affichez la première entreprise, la moyenne et la dernière entreprise.
first_elem = itCompanies[0];
middle_elem = itCompanies[Math.round(itCompanies.length / 2 - 1)];
last_elem = itCompanies[itCompanies.length - 1];

console.log("0.9a", first_elem);
console.log("0.9b", middle_elem);
console.log("0.9c", last_elem);

//  10. Affichez chaque entreprise.
for (let i = 0; i < itCompanies.length; i++) {
  console.log("0.10", itCompanies[i]);
}

//  11.Changez le nom de chaque entreprise en majuscules un par un et affichez-les
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i].toUpperCase();
  console.log("0.11", itCompanies[i]);
}

//  12. Affichez le tableau sous forme de phrase: Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d'IT.
let phrase = "";
for (let i = 0; i < itCompanies.length; i++) {
  phrase = phrase + itCompanies[i] + ", ";
}
phrase = phrase + "sont de grandes entreprises d'IT.";
console.log("0.12", phrase);

//  13. Vérifiez si une certaine entreprise existe dans le tableau itCompanies. S'il existe, retournez l'entreprise sinon retournez une société introuvable.
let entreprise = "Amazondsq";
if (itCompanies.includes(entreprise)) {
  console.log("0.13", entreprise, "est contenu dans la liste");
} else {
  console.log("0.13", entreprise, "n'est pas contenu dans la liste");
}

//  14. (Facultatif) Filtrez les entreprises qui ont plus d'un 'o' sans utiliser la méthode filter
let list_look_letters = [];
for (let i = 0; i < itCompanies.length; i++) {
  let compagnie_matched = itCompanies[i].match(/o/g);
  if (compagnie_matched != null && compagnie_matched.length >= 2) {
    list_look_letters.push(itCompanies[i]);
  }
}
if (list_look_letters != null || list_look_letters != " ") {
  for (let i = 0; i < itCompanies.length; i++) {
    console.log("0.14", list_look_letters[i]);
  }
}

//  15. Trier le tableau en utilisant la méthode sort()
let itCompanies_sort = [];
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies_sort.push(itCompanies[i]);
}
itCompanies_sort = itCompanies_sort.sort();
console.log("0.15", itCompanies_sort);

//  16. Inversez le tableau en utilisant la méthode reverse()
let itCompanies_revers = [];
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies_revers.push(itCompanies[i]);
}
itCompanies_revers = itCompanies_sort.reverse();
console.log("0.16", itCompanies_revers);

//  17. Découpez les 3 premières entreprises du tableau
let list_three_first = [];
for (let i = 0; i < itCompanies.length; i++) {
  list_three_first.push(itCompanies[i]);
}

for (let i = 3; i > 0; i--) {
  list_three_first.shift();
}
console.log("0.17", list_three_first);

//  18. Découpez les 3 dernières entreprises du tableau
let list_three_last = [];
for (let i = 0; i < itCompanies.length; i++) {
  list_three_last.push(itCompanies[i]);
}

for (let i = 3; i > 0; i--) {
  list_three_last.pop();
}
console.log("0.18", list_three_last);

//  19. Séparez (the middle) entreprise d'IT ou des entreprises à partir du tableau.
let list_middle_entreprise = [];
let list_middle_entreprise_new = [];

for (let i = 0; i < itCompanies.length; i++) {
  list_middle_entreprise.push(itCompanies[i]);
}

let indice_start = Math.round(list_middle_entreprise.length / 2) - 1;
let how_many_intems = indice_start + 1;
let test = list_middle_entreprise.slice(indice_start, how_many_intems);

for (let i = 0; i < list_middle_entreprise.length; i++) {
  if (list_middle_entreprise[i] != test) {
    list_middle_entreprise_new.push(list_middle_entreprise[i]);
  }
}
console.log("0.19", list_middle_entreprise_new);

//  20. Supprimez le premier élément du tableau itCompanies en utilisant la méthode splice()
let list_first_entreprise = [];

for (let i = 0; i < itCompanies.length; i++) {
  list_first_entreprise.push(itCompanies[i]);
}

indice_start = list_first_entreprise[0];
how_many_intems = 1;
list_first_entreprise.splice(indice_start, how_many_intems);
console.log("0.20", list_first_entreprise);

//  21. Supprimez un élément au milieu du tableau itCompanies en utilisant la méthode splice()
let list_middle_entreprise1 = [];

for (let i = 0; i < itCompanies.length; i++) {
  list_middle_entreprise1.push(itCompanies[i]);
}

indice_start = Math.round(list_middle_entreprise1.length / 2) - 1;
how_many_intems = 1;
list_middle_entreprise1.splice(indice_start, how_many_intems);
console.log("0.21", list_middle_entreprise1);

//  22. Supprimez le dernier élément du tableau itCompanies en utilisant la méthode splice()
let list_last_entreprise1 = [];

for (let i = 0; i < itCompanies.length; i++) {
  list_last_entreprise1.push(itCompanies[i]);
}

indice_start = list_last_entreprise1.length - 1;
how_many_intems = 1;
list_last_entreprise1.splice(indice_start, how_many_intems);
console.log("0.22", list_last_entreprise1);

//  23. Supprimez tous les éléments du tableau itCompanies.
for (let i = itCompanies.length; i > 0; i--) {
  itCompanies.pop();
}
console.log("0.23", itCompanies);
