//  1. Ecrire un modèle qui identifie si une chaîne est une variable JavaScript valide.
// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

const regex = /^[a-zA-Z_]*$/g;
const regex_sept = /^[7a-z]*$/g;

// /[^ ...] négation
// /^[ ...] début du string
// /[...]* répétiteur rapplique le contenu sur le plus d'indice possible
// /[...]*$ vérifie la fin du string

console.log("1.1a", is_valid_variable("iez7dze"));
console.log("1.1b", is_valid_variable("first-name"));
console.log("1.1c", is_valid_variable("1first_name"));
console.log("1.1d", is_valid_variable("firstname"));

function is_valid_variable(variable) {
  if (variable.match(regex_sept)) {
    return true;
  } else {
    return false;
  }
}
