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

const whoami = document.querySelector("#whoami");
const me = document.querySelector("#me");
const contactPara = document.createElement("p");

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

whoami.addEventListener("mouseenter", buttonShowFull);
whoami.addEventListener("mouseleave", buttonDefault);
whoami.addEventListener("click", showFullContact);

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
    mouseleave();
  }
}

function showFullContact() {
  whoami.removeEventListener("mouseenter", buttonShowFull);
  whoami.removeEventListener("mouseleave", buttonDefault);
  whoami.removeEventListener("click", showFullContact);
  whoami.addEventListener("click", showHiddenContact);
  whoami.textContent = "<<"
  contactPara.className = "contactPara";
  contactPara.innerHTML = `Hello, I'm Akumi, rookie at making websites.<br>
                           <br>
                           This is far from a fancy, useful and functional site, 
                           but I'm having fun making it and learning along the way!`;
  me.appendChild(contactPara);
}

function buttonShowFull() {
  whoami.textContent = ">>";
}

function buttonDefault() {
  whoami.textContent = "Who?";
}

function showHiddenContact() {
  whoami.addEventListener("mouseenter", buttonShowFull);
  whoami.addEventListener("mouseleave", buttonDefault);
  whoami.addEventListener("click", showFullContact);
  whoami.removeEventListener("click", showHiddenContact);
  me.removeChild(contactPara);
}