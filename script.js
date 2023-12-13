let emilkaName = ["Emilka", "skrecka"];
const btnEmilka = document.querySelector("#btnEmilka");
const imgEmilka = document.querySelector("#imgEmilka");
const pEmilka = document.querySelector("#pEmilka");

let elaName = ["Ela", "ela"];
const btnEla = document.querySelector("#btnEla");
const imgEla = document.querySelector("#imgEla");
const pEla = document.querySelector("#pEla");

btnEmilka.addEventListener("click", () => {
  bobikTatik(emilkaName, btnEmilka, imgEmilka, pEmilka);
});
btnEla.addEventListener("click", () => {
  bobikTatik(elaName, btnEla, imgEla, pEla);
});

function bobikTatik(name, btn, img, p) {
  alert(`${name[0]} kupena!`);
  img.setAttribute("src", `./images/${name[1]}Kupena.png`);
  p.textContent = `${name[0]}: Claimnuta`;
  btn.className += " disabled";
  btn.disabled = true;
}