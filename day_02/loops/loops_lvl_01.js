//  1. Développez un script qui génère n'importe quel nombre de caractères aléatoire:
//  fe3jo1gl124g
//  xkqci4utda1lmbelpkm03rba
console.log("1.1a", randomText(12));
console.log("1.1b", randomText(24));

function randomText(length) {
  var random_text = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    random_text = random_text + characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return random_text;
}

//  2. Ecrivez un script qui génère un numéro de couleur RGB aléatoire.
console.log("1.2 rgb(" + randomColor(3) + ",", randomColor(3) + ",", randomColor(3) + ")");
function randomColor(length) {
  var random_color = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    random_color = random_color + characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return random_color;
}
