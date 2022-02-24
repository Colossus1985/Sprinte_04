//###---LVL_01---##########################################################

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node",
    "Python",
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node",
    "Python",
  ],
};

//  1. A l'aide de la fonction JSON.stringify(), transformer le tableau skills en JSON.
let new_skills = JSON.stringify(skills);
// console.log("1.1 befor", typeof skills);
// console.log("1.1 after", typeof new_skills);
// console.log("1.1", new_skills);

//  2. A l'aide de la fonction JSON.stringify(), stringifier la variable age.
let new_age = JSON.stringify(student.age);
// console.log("1.2 befor", typeof student.age);
// console.log("1.2 after", typeof new_age);
// console.log("1.2", new_age);

//  3. (Facultatif) A l'aide de la fonction JSON.stringify(), stringifier la variable isMarried.
let new_isMarried = JSON.stringify(student.isMarried);
// console.log("1.3 befor", typeof student.isMarried);
// console.log("1.3 after", typeof new_isMarried);
// console.log("1.3", new_isMarried);

//  4. A l'aide de la fonction JSON.stringify(), stringifier l'objet student.
let new_student = JSON.stringify(student);
// console.log("1.3 befor", typeof student);
// console.log("1.3 after", typeof new_student);
// console.log("1.3", new_student);

//###---LVL_02---##########################################################
//  1. A l'aide de la fonction JSON.stringify(), stringifier l'objet student en conservant uniquement les propriétés : firstName, lastName et skills.
const regex = /^[0-9]/g;

function replacer(key, value) {
  if (key == "" || key == "firstName" || key == "lastName" || key == "skills" || key.match(regex)) {
    return value;
  } else {
    return undefined;
  }
}

let new_student1 = JSON.stringify(student, replacer);
//console.log("2.1", new_student1);

//###---LVL_03---##########################################################
const txt = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//  1. A l'aide de la fonction JSON.stringify(), transformez l'objet txt en JSON.
// console.log("3.1 befor", txt);
// let string_txt = JSON.stringify(txt);
// console.log("3.1 after", string_txt);

//  2. (Facultatif) Trouvez l'utilisateur qui a le plus de compétences parmi les champs de personne défini dans txt.
let list_skills_lenght = [];
let biggest;
let name_skills;
let name_one;
let index_start;
let index_end;
for (let key in txt) {
  if (txt.hasOwnProperty(key)) {
    list_skills_lenght.push(txt[key].skills.length + "#" + key);
    list_skills_lenght.sort();
    //console.log(list_skills_lenght);
  }
}

name_skills = list_skills_lenght.splice(list_skills_lenght.length - 1, 1);
name_one = name_skills[0];
index_start = name_one.indexOf("#") + 1;
index_end = name_one.length - index_start + 1;
name_one = name_one.slice(index_start, index_end.length);
console.log("3.1", name_one);
