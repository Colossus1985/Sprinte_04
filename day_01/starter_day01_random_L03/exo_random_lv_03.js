//  1.Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time. L'heure et la minute doivent être toujours à deux chiffres
//    (7 heures devraient être 07 et 5 minutes devraient être 05)
//     a. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log("1");
let date_time = new Date();
let year = date_time.getFullYear();
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
console.log(year);
year = ("0" + year).slice(-3);

let time = year + "-" + month + "-" + day + " " + hour + ":" + minutes;
console.log("1", time);

//  2. Ecrire un programme qui indique le nombre de jours dans un mois.
// let month = new Month(id, nameMonth);

let list_month = [
  { id: 1, nameMonth: "January", nomMois: "Janvier" },
  { id: 2, nameMonth: "February", nomMois: "Fevrier" }, // FEvrier
  { id: 3, nameMonth: "March", nomMois: "Mars" },
  { id: 4, nameMonth: "April", nomMois: "Avril" },
  { id: 5, nameMonth: "May", nomMois: "Mai" },
  { id: 6, nameMonth: "June", nomMois: "Juin" },
  { id: 7, nameMonth: "July", nomMois: "Juillet" },
  { id: 8, nameMonth: "August", nomMois: "Aout" },
  { id: 9, nameMonth: "September", nomMois: "Septembre" },
  { id: 10, nameMonth: "October", nomMois: "Octobre" },
  { id: 11, nameMonth: "November", nomMois: "Novembre" },
  { id: 12, nameMonth: "December", nomMois: "Decembre" },
];

year = date_time.getFullYear();
let id_month;
let month_user = prompt("Entrer un mois pour connaitre les nombre des jour qu'il contient:");
month_user = month_user.toLowerCase();
month_user = month_user.charAt(0).toUpperCase() + month_user.slice(1);
console.log(list_month);
console.log(month_user);

for (let i = 0; i < list_month.length; i++) {
  if (month_user == list_month[i].nomMois) {
    id_month = list_month[i].id;
    console.log(id_month);
  }
}

getDaysInMonth(id_month, year, month_user);

function getDaysInMonth(id_month, year, month_user) {
  let day_of_month = new Date(year, id_month, 0).getDate();
  console.log(day_of_month);
  prompt(month_user + " a " + day_of_month + " jours.");
}
