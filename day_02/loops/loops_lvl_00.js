//  1. Itérer de 0 à 10 en utilisant la boucle for, while et do while
for (let i = 0; i <= 10; i++) {
  //console.log("1.1a", i);
}

let b = 0;
while (b <= 10) {
  //console.log("1.1b", b);
  b++;
}

let c = 0;
do {
  //console.log("1.1c", c);
  c++;
} while (c <= 10);

//  2. Itérez 10 à 0 en utilisant la boucle for, while et do while
for (let i = 10; i >= 0; i--) {
  //console.log("1.2a", i);
}

let d = 10;
while (d >= 0) {
  //console.log("1.2b", d);
  d--;
}

let e = 10;
do {
  //console.log("1.2c", e);
  e--;
} while (e >= 0);

//  3. Créez et initialisez une variable `n` avec un entier positif. Itérer 0 à n en utilisant la boucle **for**
let n = 12;
for (let i = 0; i <= n; i++) {
  //console.log("1.3", i);
}

//  4. Écrivez une boucle qui crée le modèle suivant à l'aide de console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let symbole = "";
for (let i = 0; i < 7; i++) {
  symbole = symbole + "#";
  //console.log("1.4", symbole);
}

//  5. Utilisez une boucle pour affichez le modèle suivant à l'aide de console.log():
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
let somme;
for (let i = 0; i <= 10; i++) {
  somme = i * i;
  //console.log("1.5", i, "x", i, "=", somme);
}

//  6. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que des nombres pairs
for (let i = 0; i <= 100; i = i + 2) {
  //console.log("1.6", i);
}

//  7. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres impairs
for (let i = 1; i <= 100; i = i + 2) {
  //console.log("1.7", i);
}

//  8.(Facultatif) Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres premiers
let number = 17;
let divisibel = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    divisibel = false;
  }
}

if (divisibel == false) {
  console.log(number, "n'est pas un nombre premier");
} else {
  console.log(number, "est un nombre premier");
}

//  9. Utilisez la boucle for pour parcourir de 0 à 100 et afficher la somme de tous les nombres.
//  "La somme de tous les nombres de 0 à 100 est 5050."
let number_until = 100;
let somme_of_number = 0;
for (let i = 0; i <= number_until; i++) {
  somme_of_number = somme_of_number + i;
}
console.log("1.9 La somme de tous les nombres de 0 à", number_until, "est", somme_of_number);
