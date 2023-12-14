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