// les multiples de cinq (5, 10, 15, 20…) doivent être remplacés par le mot « fizz » et
// les nombres contenant sept (7, 17, 27…) doivent être remplacés par « buzz ».
// Trois erreurs entraînent l’élimination.

// À noter : Soixante-dix doit être remplacé par « fizz-buzz » puisqu’il répond aux deux règles.
// Tous les nombres entre 71 et 79 doivent être remplacés par « buzz »,
// sauf soixante-dix-sept qui doit être « buzz-buzz » puisqu’il contient deux 7.

// let nombre_limite = prompt("Entrez le nombre jusqu'au quel vous voulez jouer");
let nombre_limite = 801;
let regex_sept = "7";
let regex_five = "5";
let regex_zero = "0";

for (let i = 1; i <= nombre_limite; i++) {
  let buzz = "";
  let number_to_str = JSON.stringify(i);
  number_to_str = number_to_str.split("");

  if (i % 5 == 0 && number_to_str.includes(regex_sept) == true) {
    for (let b = 0; b < number_to_str.length; b++) {
      if (number_to_str[b] == "7") {
        buzz = buzz + "buzz ";
      }
      if (number_to_str[b] == "5" || number_to_str[b] == "0") {
        buzz = buzz + "fizz ";
      }
    }
    console.log(i, "the sept five", buzz);
    continue;
  }
  if (i % 5 == 0) {
    console.log(i, "divisible of 5 fizz");
    continue;
  }
  if (number_to_str.includes(regex_sept)) {
    for (let b = 0; b < number_to_str.length; b++) {
      if (number_to_str[b] == "7") {
        buzz = buzz + "buzz ";
      }
    }
    console.log(i, "the sept", buzz);
  } else {
    console.log(i, "normal", i);
  }
}
