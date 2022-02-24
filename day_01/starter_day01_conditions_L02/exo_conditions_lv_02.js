//   1. Écrivez un code qui peut donner des notes aux élèves en fonction de leurs scores:
//      80-100, A; 70-89, B; 60-69, C; 50-59, D; 0-49, F
//getNotes();
function getNotes() {
  let score = prompt("entrer votre score: ");
  if (score > 100) {
    prompt(score + " " + "est plus eleve que 100!");
  } else if (score <= 100 && score >= 80) {
    prompt(score + " " + "donne un A");
  } else if (score <= 89 && score >= 70) {
    prompt(score + " " + "donne un B");
  } else if (score <= 69 && score >= 60) {
    prompt(score + " " + "donne un C");
  } else if (score <= 59 && score >= 50) {
    prompt(score + " " + "donne un D");
  } else if (score <= 49 && score >= 0) {
    prompt(score + " " + "donne un F");
  }
}

//  2.Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. Si l'entrée utilisateur est: -
//  la saison est l'automne. - Septembre, octobre ou novembre,
//  la saison est l'hiver. - Décembre, janvier ou février,
//  la saison est le printemps. - Mars, avril ou mai,
//  la saison est l'été - Juin, juillet ou août
getSeason();

function getSeason() {
  let month = prompt("Entre un mois pour connaitre la saison:");
  month = month.toLowerCase();
  month = month.charAt(0).toUpperCase() + month.slice(1);
  // console.log(typeof month);
  // console.log("month", month);
  // console.log("|" + month + "|");
  // console.log("condition1 |" + month + "|");
  // console.log("condition2 |" + "Décembre" + "|");
  // console.log("condition not if", month == "Décembre");
  // console.log("condition if", month != "Décembre");

  if (month == "Décembre" || month == "Janvier" || month == "Février") {
    prompt(month + " fait partie de la saison de l'hiver");
  } else if (month == "Septembre" || month == "Octobre" || month == "Novembre") {
    prompt(month + " fait partie de la saison de lautomne");
  } else if (month == "Avril" || month == "Mars" || month == "Mai") {
    prompt(month + " fait partie de la saison du printemps");
  } else if (month == "Juin" || month == "Juillet" || month == "Août") {
    prompt(month + " fait partie de la saison de l'ete");
  } else if (
    month != "Décembre" ||
    month != "Janvier" ||
    month != "Février" ||
    month != "Septembre" ||
    month != "Octobre" ||
    month != "Novembre" ||
    month != "Avril" ||
    month != "Mars" ||
    month != "Mai" ||
    month != "Juin" ||
    month != "Juillet" ||
    month != "Août"
  ) {
    console.log(month);
    prompt(month + " " + "est mal ecrit ou n'existe pas");
  }
}
