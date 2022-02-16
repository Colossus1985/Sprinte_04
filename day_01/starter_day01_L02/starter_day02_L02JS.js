//  1. Utilisez console.log() et afficher la déclaration suivante:
let text1 =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log("2.1", text1);

//  2. Utilisez console.log() et afficher la citation suivante:
let text2 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log("2.2", text2);

//  3. Vérifiez si typeof '10' est exactement égal à 10. Sinon, rendez-le exactement égal.
let number = 10;
let string = "10";
if (number === parseInt(string)) {
  console.log("2.3 vrai");
}

//  4. Vérifiez si parseFloat('9.8') est exactement égal à 10 if not make it exactly equal with 10.
let number1 = Math.round(9.8);
if (number1 === 10) {
  console.log("2.4 true");
}

//  5. Vérifiez si 'on' is found in both python and jargon
let word1 = "python";
let word2 = "jargon";
if (word1.match("on") != null && word2.match("on") != null) {
  console.log("2.5 true");
}

//  6. I hope this course is not full of jargon. Vérifiez si jargon est dans la chaine.
let text3 = "I hope this course is not full of jargon.";
if (text3.match("jargon") != null) {
  console.log("2.6 true");
}

//  7. Générer un nombre aléatoire entre 0 et 100 inclusivement.
let min = 0;
let max = 101;
let randomNumber = getRandomInt(min, max);
console.log("2.7", randomNumber);

// 8. Générer un nombre aléatoire entre 50 et 100 inclusivement.
min = 50;
max = 101;
randomNumber = getRandomInt(min, max);
console.log("2.8", randomNumber);

// 9. Générez un nombre aléatoire compris entre 0 et 255 inclusivement.
min = 0;
max = 256;
randomNumber = getRandomInt(min, max);
console.log("2.9", randomNumber);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  return number;
}

//  10. Utilisez substr pour slicer la phrase because because because de la phrase suivante: 'You cannot end a sentence with because because because is a conjunction'
let text4 = "You cannot end a sentence with because because because is a conjunction";
let index1 = text4.indexOf("because");
let index2 = text4.lastIndexOf("because") + "because".length;
let because = text4.substring(index1, index2);
console.log("2.10", because);
