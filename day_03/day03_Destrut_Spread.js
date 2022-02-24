const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

//  1. Déstructurez et affectez les éléments du tableau constants dans les variables e, pi, gravity, humanBodyTemp et waterBoilingTemp.
console.log("1.1 befor", constants);
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log("1.1 after", e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//  2. Déstructurez et affectez les éléments du tableau countries dans les variables .
console.log("1.2 befor", countries);
const [fin, est, sw, den, nor] = countries;
console.log("1.2 befor", fin, est, sw, den, nor);

//  3. (Facultatitf) Déstructurez l'objet rectangle grâce à ses clés.
console.log("1.3 befor", rectangle);
const { width, height, area, perimeter } = rectangle;
console.log("1.3 befor", width, height, area, perimeter);

//#########################################################################################"
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM"],
    age: 20,
  },
];

//  1. Parcourez le tableau des utilisateurs et obtenez toutes les clés de l'objet en utilisant la déstructuration.
for (let i = 0; i < users.length; i++) {
  let { name } = users[i];
  console.log("2.1", name);
}

//  2. Trouvez les personnes qui ont moins de deux compétences et mettez les dans un tableau.
let array_name_less_skills = [];
for (let i = 0; i < users.length; i++) {
  let { name, skills } = users[i];
  if (skills.length > 2) {
    array_name_less_skills.push(name);
  }
}
console.log("2.2", array_name_less_skills);
