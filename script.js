let emilkaName = ["Emilka", "skrecka"];
const btnEmilka = document.querySelector("#btnEmilka");
const imgEmilka = document.querySelector("#imgEmilka");
const pEmilka = document.querySelector("#pEmilka");

let elaName = ["Ela", "ela"];
const btnEla = document.querySelector("#btnEla");
const imgEla = document.querySelector("#imgEla");
const pEla = document.querySelector("#pEla");

const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

const menu = document.createElement("ul");
menu.setAttribute("id", "navigation");

const nav = ["Skrecky", "Info", "Contact"];
for(let item of nav) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.textContent = item;
  item = item.toLowerCase();
  a.setAttribute("href", `./${item}.html`);
  li.appendChild(a);
  menu.appendChild(li);
}

btnEmilka.addEventListener("click", () => {
  bobikTatik(emilkaName, btnEmilka, imgEmilka, pEmilka);
});
btnEla.addEventListener("click", () => {
  bobikTatik(elaName, btnEla, imgEla, pEla);
});

header.addEventListener("mouseenter", () => {
  header.className = "active";
  header.appendChild(menu);
});
header.addEventListener("mouseleave", () => {
  header.className = "inactive";
  header.removeChild(menu);
})

footer.addEventListener("mouseenter", () => {
  footer.style.filter = "brightness(100%)";
});
footer.addEventListener("mouseleave", () => {
  footer.style.filter = "brightness(40%)";
});

function bobikTatik(name, btn, img, p) {
  alert(`${name[0]} kupena!`);
  img.setAttribute("src", `./images/${name[1]}Kupena.png`);
  p.textContent = `${name[0]}: Claimnuta`;
  btn.className += " disabled";
  btn.disabled = true;
}