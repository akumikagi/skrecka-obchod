const buttonEmilka = document.querySelector("#emilka");
const emilka = document.querySelector(".img");
const popis = document.querySelector(".popis");

buttonEmilka.addEventListener("click", bobikTatik);

function bobikTatik() {
  alert("Skrecka kupena!");
  emilka.setAttribute("src", "./images/skreckaKupena.png");
  popis.textContent = "Emilka: Claimnuta";
  buttonEmilka.className += " disabled";
  buttonEmilka.disabled = true;
}