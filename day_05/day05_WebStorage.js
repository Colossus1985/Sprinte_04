//###---Exercises: Level 1---######################################################
//  1. Enregistrez votre prénom, nom, âge, pays, ville dans votre navigateur avec localStorage.
let array_user = [];

let firstName = "Florence";
let lastName = "Rosély";
let age = 89;
let pays = "France";
let ville = "Bras Panon";

let user = new User(firstName, lastName, age, pays, ville);
function User(firstName, lastName, age, pays, ville) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.pays = pays;
  this.ville = ville;
}

array_user.push(user);

localStorage.setItem("Florence", JSON.stringify(user));
localStorage.setItem("Array_Florence", JSON.stringify(array_user));

//###---Exercises: Level 2---######################################################
//  1. Créez un objet student. L'objet student aura un prénom, un nom, un âge, des compétences et un pays. Stockez l'objet student dans votre navigateur local localStorage.
firstName = "Shiva";
lastName = "Greiner";
age = 5;
skills = ["Chat", "belle", "douce", "calme"];
countrie = "France";

let student = new Student(firstName, lastName, age, skills, countrie);

function Student(firstName, lastName, age, skills, countrie) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.skills = skills;
  this.countrie = countrie;
}

localStorage.setItem("Student", JSON.stringify(student));
