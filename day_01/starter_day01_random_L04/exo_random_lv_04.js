//  1. Si a est supérieur à b return 'a est superieur à b' sinon 'a est inferieur à b'. Utilisez deux méthodes
//  a. if else
let a = 4;
let b = 3;

if (a > b) {
  console.log("1a", a, "est superieur a", b);
} else {
  console.log("1a", a, "est inferieur a", b);
}

//  b. ternary operator.
result = a > b ? "est superieur a" : "est inferieur a";
console.log("1b", a + " " + result + " " + b);
