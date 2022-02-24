const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const user = {
  name: "Brook",
  scores: 75,
  skills: ["HTM", "CSS", "JS"],
  age: 16,
};

//  1. Utilisez console.table() pour afficher le tableau des pays, countries, sous forme de tableau.
console.table("1.1", countries);

//  2. Utilisez console.table() pour afficher l'objet user sous forme de tableau.
console.table("1.2", user);

//  3. Utilisez console.group() pour regrouper les affichages.
console.group("1.3", countries, user);

//################################################################################################
//  1. Utilisez console.assert() sur l'expression 10 > ( 2 * 10 ) et affichez le message d'erreur "Cette expression n'est pas vraie".
console.assert(10 > 2 * 10, "2.1 Cette expression n'est pas vraie");

//  2. Ecrivez le message d'avertissement "Fait gaffe !" en utilisant console.warn().
console.warn("2.2", "Fait gaffe!");

//  3. Écrivez le message d'erreur "Cela ne fonctionne point !" en utilisant console.error().
console.error("2.3", "Cela ne fonctionne point !");
