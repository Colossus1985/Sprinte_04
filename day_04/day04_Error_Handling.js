let firstName = "Aymane";

try {
  // code that may throw an error
  let fullName = firstName + " " + lastName;
  console.log(fullName);
} catch (err) {
  // code to be executed if an error occurs
  console.log("1.1", err);
} finally {
  // code to be executed regardless of an error occurs or not
}

try {
  // code that may throw an error
  eval("hde bar");
} catch (err) {
  // code to be executed if an error occurs
  console.log("1.2", err);
} finally {
  // code to be executed regardless of an error occurs or not
}

let num = 10;
let message_err = "mi gagne pas";
try {
  // code that may throw an error
  console.log(num.toLowerCase());
} catch (e) {
  // code to be executed if an error occurs
  console.log("1.3", message_err);
} finally {
  // code to be executed regardless of an error occurs or not
}
