//  1. Déclarez et initialisez les variables: firstName, lastName, country, city, age, isMarried, year et utilisez 'typeof' operator pour vérifier les différents data types.
let firstName = "";
let lastName = "";
let country = "";
let city = "";
let age = 0;
let isMarried = false;
let year = 0;

console.log("1.1", typeof firstName);
console.log("1.1", typeof lastName);
console.log("1.1", typeof country);
console.log("1.1", typeof city);
console.log("1.1", typeof age);
console.log("1.1", typeof isMarried);
console.log("1.1", typeof year);

//  2. Vérifiez si le type '10' est égal à 10
if (typeof 10 == "number") {
  console.log("1.2", true);
}

//  3. Vérifiez si parseInt('9.8') est égal à 10
if (parseInt(9.8) == 10) {
  console.log("1.3", true);
} else {
  console.log("1.3", false);
}

//  4.La valeur booléenne est vraie ou fausse.

//  a.Écrivez trois déclarations JavaScript qui fournissent une valeur de vérité (True).
let dark_day = true;
let white_night = true;
let sad_happinesse = true;
console.log("1.4a", dark_day);
console.log("1.4a", white_night);
console.log("1.4a", sad_happinesse);

//  b.Écrivez trois instructions JavaScript qui fournissent une valeur erronée (False).
console.log("1.4b", 10 < 9);
console.log("1.4b", 10 + 2 == 11);
console.log("1.4b", 10 - 2 == 10);

//  5. Déterminez d'abord le résultat de l'expression de comparaison suivante sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()
console.log("1.5a", 4 > 3);
console.log("1.5b", 4 >= 3);
console.log("1.5c", 4 < 3);
console.log("1.5d", 4 <= 3);
console.log("1.5e", 4 == 4);
console.log("1.5f", 4 === 4);
console.log("1.5g", 4 != 4);
console.log("1.5h", 4 !== 4);
console.log("1.5i", 4 != "4");
console.log("1.5j", 4 == "4");
console.log("1.5k", 4 === "4");

let text5 = "python";
let text6 = "jargon";
console.log("1.5l", text5.length > text6.length);

//  6. Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()
if (4 > 3 && 10 < 12) {
  console.log("1.6a", true);
} else {
  console.log("1.6a", false);
}
if (4 > 3 && 10 > 12) {
  console.log("1.6b", true);
} else {
  console.log("1.6b", false);
}
if (4 > 3 || 10 < 12) {
  console.log("1.6c", true);
} else {
  console.log("1.6c", false);
}
if (!(4 > 3)) {
  console.log("1.6d", true);
} else {
  console.log("1.6d", false);
}
if (!(4 < 3)) {
  console.log("1.6e", true);
} else {
  console.log("1.6e", false);
}
if (!false) {
  console.log("1.6f", true);
} else {
  console.log("1.6f", false);
}
if (!(4 > 3 && 10 < 12)) {
  console.log("1.6g", true);
} else {
  console.log("1.6g", false);
}
if (!(4 > 3 && 10 > 12)) {
  console.log("1.6h", true);
} else {
  console.log("1.6h", false);
}
if (!(4 === "4")) {
  console.log("1.6i", true);
} else {
  console.log("1.6i", false);
}
if (!text5.match("on") && !text6.match("on")) {
  console.log("1.6j", true);
} else {
  console.log("1.6j", false);
}

//  7. Utilisez l'objet Date pour effectuer les activités suivantes
let date_time = new Date();
//  a. Quelle est l'année aujourd'hui?
let year_now = date_time.getFullYear();
console.log("1.7a", year_now);

//  b. Quel est le mois aujourd'hui en nombre?
let month = date_time.getMonth() + 1;
console.log("1.7b", month);

//  c. Quelle est la date aujourd'hui?
let day = date_time.getDate();
let date_now = day + "/" + month + "/" + year_now;
console.log("1.7c", date_now);

//  d. Quel est le jour aujourd'hui en nombre?
console.log("1.7d", day);

//  e. Quelles sont les heures maintenant?
let hour = date_time.getHours();
console.log("1.7e", hour);

//  f. Quel est le procès-verbal maintenant?
let minute = date_time.getMinutes();
console.log("1.7f", minute);

//  g. Découvrez le nombre de secondes écoulées entre le 1er janvier 1970 et aujourd'hui.
let seconds_until_now = date_time.getTime();
console.log("1.7g", seconds_until_now);
