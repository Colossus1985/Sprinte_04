//###---Data Types --> Level01---#########################################################################
//  1. Déclarez une variable nommée defi et attribuez-lui une valeur initiale 'Pratiquer les algorithmes en JavaScript'.
let defi = "Pratiquer les algorithmes en JavaScrip";

//  2. Affichez la chaîne sur la console du navigateur en utilisant console.log()
console.log("2.2", defi);

//  3. Affichez le length de la chaîne sur la console du navigateur en utilisant console.log()
console.log("2.3", defi.length);

//  4. Remplacez tous les caractères de chaîne en majuscules en utilisant la méthode toUpperCase()
defi = defi.toUpperCase();
console.log("2.4", defi);

//  5. Remplacez tous les caractères de chaîne par des lettres minuscules en utilisant la méthode toLowerCase()
defi = defi.toLowerCase();
console.log("2.5", defi);

//  6. Découpez (slice) le premier mot de la chaîne en utilisant la méthode substr() ou bien substring()
console.log("2.6", defi);
defi = defi.substring(9);
console.log("2.6", defi);

//  7. Découpez la phrase Jours en JavaScript from 10 jours en JavaScript.
let text = "10 jours en JavaScript.";
let new_text = text.substring(3);
console.log("2.7", new_text);

//  8. Vérifiez si la chaîne contient un mot Script en utilisant la méthode includes()
if (text.includes("Script")) {
  console.log("2.8 'vrai'");
} else {
  console.log("2.8 'false'");
}

//  9. Divisez la chaine string dans un array en utilisant la méthode split()
let string = "string";
let array_text = [];
array_text = string.split("");
console.log("2.9", array_text);

//  10. Divisez la chaine "10 Jours en JavaScript" à l'espace en utilisant la méthode split()
text = "10 Jours en JavaScript";
array_text = text.split(" ");
console.log("2.10", array_text);

//  11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split divisez la chaîne à la virgule et changez-la en tableau.
text = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
array_text = text.split(",");
console.log("2.11", array_text);

//  12. Changez 10 Jours en JavaScript à 10 Jours en PHP en utilisant la méthode replace() .
text = "10 Jours en JavaScript";
text = text.replace("JavaScript", "PHP");
console.log("2.12", text);

//  13. Qu'est-ce que le caractère à l'index 15 dans la chaine "10 Jours en JavaScript"? Utilisez la méthode charAt() .
console.log("2.13", text.charAt(10));

//  14. Quel est le code de caractère de J dans la chaine '10 Jours en JavaScript' en utilisant charCodeAt()
text = "10 Jours en JavaScript";
console.log("2.14", text.charCodeAt("J"));

//  15. Utilisez indexOf pour déterminer la position de la première occurrence de a dans 10 Jours en JavaScript
console.log("2.15", text.indexOf("a"));

//  16. Utilisez lastIndexOf pour déterminer la position de la dernière occurrence de a dans 10 Jours en JavaScript.
console.log("2.16", text.lastIndexOf("a"));

//  17. Utilisez indexOf pour trouver la position de la première occurrence du mot parceque dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'
let phrase = "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log("2.17", phrase.indexOf("parceque"));

//  18. Utilisez lastIndexOf pour trouver la position de la dernière occurrence du mot parceque dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'
console.log("2.18", phrase.lastIndexOf("parceque"));

//  19. Utilisez search pour trouver la position de la première occurrence du mot parceque dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'
let phrase2 = "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log("2.19", phrase.search("parceque"));

//  20. Utilisez la méthode trim() pour supprimer tout espace blanc de fin au début et à la fin d'une chaîne. ' 10 Jours en JavaScript '.
text = " 10 Jours en JavaScript ";
console.log("2.20", text.trim());

//  21. Utilisez la méthode startsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai
text = "10 Jours en JavaScript";
console.log("2.21", text.startsWith("1"));

//  22. Utilisez la méthode endsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai
console.log("2.22", text.endsWith("pt"));

//  23. Utilisez la méthode match() pour trouver tous les a dans "10 Jours en JavaScript"
console.log("2.23", text.match(/a/g));

//  24. Utilisez la méthode concat() et fusionner '10 Jours en' avec 'JavaScript' tà une seule chaîne, '10 Jours en JavaScript'
let text_part1 = "10 Jours en";
let text_part2 = " ";
let text_part3 = "JavaScript";
console.log("2.24", text_part1.concat(text_part2, text_part3));

//  25. Utilisez la méthode repeat() pour afficher "10 Jours en JavaScript" 2 fois
console.log("2.24", text.repeat(2));
