//  1. Declarez et initialisez les deux variables myAge et yourAge.
let myAge = 250;
let yourAge = 25;
let difference = myAge - yourAge;
console.log("1", "J'ai", difference, "ans de plus que toi.");

//  2. En utilisant 'prompt', obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus, autorisez l'utilisateur à conduire sinon dites à l'utilisateur d'attendre un certain nombre d'années.
let date_time = new Date();
let year = date_time.getFullYear();
//getUserAge();

function getUserAge() {
  let birthyear = prompt("Entrez votre date de naissance:");
  if (birthyear != null) {
    let difference1 = year - birthyear;
    if (difference1 > 18) {
      prompt("Vous avez " + difference1 + " ans. Vous etes autorise de conduire.");
    } else {
      let reste = 18 - difference1;
      prompt(
        "Vous avez " + difference1 + " ans. Vous serez autorise a conduire apres " + reste + " ans."
      );
    }
  }
}

//  3. Écrivez un script qui invite l'utilisateur à entrer le nombre d'années. Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un ne vive que cent ans.
//getUserLiveSec()
function getUserLiveSec() {
  let user_age = prompt("Entrez votre age:");
  if (user_age != null) {
    let lived_inSeconds = user_age * 356 * 24 * 60 * 60;
    prompt("Vous avez vecu " + lived_inSeconds + " secs.");
  }
}

//  4. Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time
let month = date_time.getMonth();
let day = date_time.getDate() + 1;
let hour = date_time.getHours();
let minutes = date_time.getMinutes();
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
if (hour < 10) {
  hour = "0" + hour;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}
year = ("0" + year).slice(-3);

//  a. YYYY-MM-DD HH:mm
let time = year + "-" + month + "-" + day + " " + hour + ":" + minutes;
console.log("1", time);
