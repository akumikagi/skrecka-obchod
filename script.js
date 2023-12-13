const button = document.querySelector("#kupit");
const emilka = document.querySelector("#img");
const popis = document.querySelector("#popis");

button.addEventListener("click", bobikTatik);

function bobikTatik() {
  alert("Skrecka kupena!");
  emilka.setAttribute("src", "./images/skreckaKupena.png");
  popis.textContent = "Emilka: Claimnuta";
  button.className = "disabled";
  button.disabled = true;
}