let num = document.getElementById("number");
let number = 0;

function incrementNum() {
  number += 1;
  num.innerText = number;
}

function decrementNum() {
  number -= 1;
  num.innerText = number;
}
