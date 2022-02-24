//  1. Déclarez une fonction fullName qui affiche votre nom complet.
console.log("1.1", fullname());
function fullname() {
  let my_name = "Colossus";
  return my_name;
}

//  2.Déclarez une fonction newFullName qui prend firstName, lastName comme paramètre et elle renvoie return votre nom complet.
let firstName = "Shiva";
let lastName = "Greiner";
console.log("1.2", newFullName(firstName, lastName));

function newFullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}

//  3. Déclarez une fonction addNumbers qui prend deux paramètres et elle renvoie return la somme.
let number_one = 5;
let number_two = 6;
console.log("1.3", addNumbers(number_one, number_two));

function addNumbers(number_one, number_two) {
  let somme_of_number = number_one + number_two;
  return somme_of_number;
}

//  4. Une aire d'un rectangle est calculée comme suit: area = longueur x largeur. Ecrivez une fonction qui calcule areaOfRectangle.
let length_square = 4;
let hight_sqaure = 8;
console.log("1.4", addNumbers(length_square, hight_sqaure));

function areaOfRectangle(length_square, hight_sqaure) {
  let square = length_square * hight_sqaure;
  return square;
}

//  5. Le périmètre d'un rectangle est calculé comme suit: perimeter = 2x (longueur + largeur). Ecrivez une fonction qui calcule perimeterOfRectangle.
console.log("1.5", perimeterOfRectangle(length_square, hight_sqaure));

function perimeterOfRectangle(length_square, hight_sqaure) {
  let square_perimeter = 2 * (length_square + hight_sqaure);
  return square_perimeter;
}

//  6. L'aire d'un cercle est calculée comme suit: area = π x r x r. Ecrire une fonction qui calcule areaOfCircle
let radius = 4;
let pi = Math.PI;

console.log("1.6", areaOfCircle(radius, pi));

function areaOfCircle(radius, pi) {
  let cicle_area = pi + radius + radius;
  return cicle_area;
}

//  7. (Facultatif) La température en C° peut être convertie en F° en utilisant cette formule: F° = (C° x 9/5) + 32. Écrivez une fonction qui convertit C° en F°_convertCelciusToFahrenheit_.
let degres = 31;

console.log("1.7", _convertCelciusToFahrenheit_(degres));

function _convertCelciusToFahrenheit_(degres) {
  //F° = (C° x 9/5) + 32.
  const number = 32;
  let farenheit = (degres * 9) / 5 + number;
  return farenheit;
}
//  8. (Facultatif) Math.max renvoie son plus grand argument. Écrivez une fonction findMax qui prend trois arguments et renvoie leur maximum sans utiliser la méthode Math.max.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
let arg1 = 980;
let arg2 = 100;
let arg3 = 55;

console.log("1.8a", findMax(arg1, arg2, arg3));

function findMax(arg1, arg2, arg3) {
  if (arg1 > arg2 && arg1 > arg3) {
    return arg1;
  }
  if (arg2 > arg1 && arg2 > arg3) {
    return arg2;
  }
  if (arg3 > arg1 && arg3 > arg2) {
    return arg3;
  }
}
