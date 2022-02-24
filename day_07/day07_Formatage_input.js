let space = " ";
let prefix = "(+33)";
let regex = /^[0-9]*$/g;
let regex_bac = /[\b]/;
const input = document.getElementById("tel");

input.addEventListener("keyup", function (event) {
  var key_entree = event.key;

  if (!key_entree.match(regex)) {
    let value_watched = "";
    for (let i = 0; i < input.value.length - 1; i++) {
      value_watched = value_watched + input.value[i];
    }
    input.value = value_watched;
  } else {
    if (prefix == "(+33)") {
      input.value = addSpaces(input.value, 13, 1, 4, 7, 10);
    } else if (prefix == "(+262)") {
      input.value = addSpaces(input.value, 12, 3, 6, 9);
    }
  }
});
function getSelectValue() {
  input.value = "";
  prefix = document.getElementById("prefix_choice").value;
  document.getElementById("prefix").innerHTML = prefix;
}
function addSpaces(phoneNumber, maxlength, space1, space2, space3, space4, space5, space6) {
  input.removeAttribute("maxlength");
  input.setAttribute("maxlength", maxlength);
  if (phoneNumber.length == space1) {
    phoneNumber = phoneNumber + space;
  }
  if (phoneNumber.length == space2) {
    phoneNumber = phoneNumber + space;
  }
  if (phoneNumber.length == space3) {
    phoneNumber = phoneNumber + space;
  }
  if (phoneNumber.length == space4) {
    phoneNumber = phoneNumber + space;
  }
  if (phoneNumber.length == space5) {
    phoneNumber = phoneNumber + space;
  }
  if (phoneNumber.length == space6) {
    phoneNumber = phoneNumber + space;
  }
  return phoneNumber;
}
