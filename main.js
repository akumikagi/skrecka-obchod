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

const search = document.createElement("input");
search.setAttribute("type", "text");
search.className = "search";
search.value = "Search for animals!";

const animals = [
  { name: "Emilka", id: 1 },
  { name: "Amalka", id: 2 },
  { name: "Fliacik", id: 3 },
  { name: "Sniezik", id: 4 },
  { name: "Ela", id: 5 },
  { name: "Yogi", id: 6 },
  { name: "Zara", id: 7 },
  { name: "Nufo", id: 8 },
  { name: "Laba", id: 9 },
  { name: "Fifo", id: 10 },
  { name: "Slimy", id: 11 },
];

search.addEventListener("click", clearTip);
search.addEventListener("keydown", findAnimal);

header.addEventListener("mouseenter", mouseenter);
header.addEventListener("mouseleave", mouseleave);

footer.addEventListener("mouseenter", () => {
  footer.style.filter = "brightness(100%)";
});
footer.addEventListener("mouseleave", () => {
  footer.style.filter = "brightness(40%)";
});

function mouseenter() {
  header.className = "active";
  header.appendChild(search);
  header.appendChild(menu);
}

function mouseleave() {
  header.className = "inactive";
  header.removeChild(search);
  header.removeChild(menu);
}

function clearTip() {
  if(search.value === "Search for animals!") {
  search.value = "";
  }
  header.removeEventListener("mouseenter", mouseenter);
  header.removeEventListener("mouseleave", mouseleave);
}

function findAnimal(e) {
  if(search.value === "Press ESC to exit search mode!") {
    search.value = "";
  }
  if(e.key === "Enter" && search.value !== "") {
    let result = animals.find(item => item.name === search.value);
    if(result === undefined) {
      alert(`${search.value} not found!`);
    } else {
        alert(`${search.value} found! ${result.name}'s ID is ${result.id}`);
    }
    search.value = "Press ESC to exit search mode!";
  }
  else if(e.key === "Escape") {
    header.addEventListener("mouseenter", mouseenter);
    header.addEventListener("mouseleave", mouseleave);
  }
}