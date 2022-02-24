let regex = /^[0-9]*$/g;
let regex_bac = /[\b]/;
let maxlength;

const input = document.getElementById("numbers");
const input_key = document.getElementById("key");

input.addEventListener("keyup", function (event) {
  var key_entree = event.key;

  if (!key_entree.match(regex)) {
    let value_watched = "";
    for (let i = 0; i < input.value.length - 1; i++) {
      value_watched = value_watched + input.value[i];
    }
    input.value = value_watched;
  } else {
    if (input.value.length == 18) {
      let key;
      key = input.value.replaceAll(" ", "");
      key = 97 - (key % 97);
      console.log(key);
      input_key.value = key;
    }
    maxlength = 18;
    input.value = addSpaces(input.value, maxlength, 1, 4, 7, 10, 14);
    if (input.value.length == maxlength) {
    }
  }
});

function addSpaces(number, maxlength, space1, space2, space3, space4, space5, space6) {
  let space = " ";
  input.removeAttribute("maxlength");
  input.setAttribute("maxlength", maxlength);
  if (number.length == space1) {
    number = number + space;
  }
  if (number.length == space2) {
    number = number + space;
  }
  if (number.length == space3) {
    number = number + space;
  }
  if (number.length == space4) {
    number = number + space;
  }
  if (number.length == space5) {
    number = number + space;
  }
  if (number.length == space6) {
    number = number + space;
  }
  return number;
}
