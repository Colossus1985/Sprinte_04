const users = {
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
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "JavaScript",
      "React",
      "React",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "JavaScript",
      "React",
      "React",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "JavaScript",
      "React",
      "React",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "JavaScript",
      "React",
      "React",
      "React",
      "React",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
//  1. Trouvez la personne qui possède de le plus compétences dans l'objet users ci-dessous.
//console.log(users.Alex.skills.length);
let list_skills_lenght = [];
let biggest;
let name_skills;
let name_one;
let index_start;
let index_end;
for (let key in users) {
  if (users.hasOwnProperty(key)) {
    list_skills_lenght.push(users[key].skills.length + "#" + key);
    list_skills_lenght.sort();
    console.log(list_skills_lenght);
  }
}

name_skills = list_skills_lenght.splice(list_skills_lenght.length - 1, 1);
console.log(name_skills);
name_one = name_skills[0];
console.log(name_skills[0]);

index_start = name_one.indexOf("#") + 1;
index_end = name_one.length - index_start + 1;
name_one = name_one.slice(index_start, index_end.length);
console.log("1.1", name_one);

//  2. Comptez les users connectés, comptez les users ayant plus de 50 points de l'objet suivant.
let count_user_co = 0;

for (let key in users) {
  if (users[key].isLoggedIn == true) {
    count_user_co = count_user_co + 1;
  }
}
console.log("1.2", count_user_co);

//  3. Recherchez des personnes qui sont des développeurs MERN Stack à partir de l'objet users. MERN signifiant MongoDB, Express, React, Node.
let mongoDB = "MongoDB";
let express = "Express";
let react = "React";
let node = "Node";
let user_mern = "";
let arg1 = false;

for (let key in users) {
  for (let i = 0; i < users[key].skills.length; i++) {
    //console.log(key);
    if (
      users[key].skills.includes(mongoDB) &&
      users[key].skills.includes(express) &&
      users[key].skills.includes(react) &&
      users[key].skills.includes(node)
    ) {
      arg1 = true;
    } else {
      arg1 = false;
    }
  }
  if (arg1 == true) {
    console.log("1.3", key);
  }
}

//  4. Définissez votre nom dans l'objet users sans modifier l'objet utilisateur d'origine
let key = "Steve";
let email = "colossus@gmail.com";
let skills = ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"];
let age = 36;
let isLoggedIn = false;
let points = 70;

users[key] = {
  email: email,
  skills: skills,
  age: age,
  isLoggedIn: isLoggedIn,
  points: points,
};
console.log("1.4", users);

//  5. Obtenez toutes les clés ou propriétés de l'objet users
for (let key in users) {
  console.log("1.5", key);
}

//  6. Obtenez toutes les valeurs de l'objet users

for (let key in users) {
  console.log("1.7", users[key]);
}
