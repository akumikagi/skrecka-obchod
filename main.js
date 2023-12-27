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
const whoisshe = document.querySelector("#whoisshe");
const me = document.querySelector("#me");
const her = document.querySelector("#her");
const contactParaMimi = document.createElement("p");
const contactParaNat = document.createElement("p");

const animationBoxMimi = document.createElement("div");
animationBoxMimi.className = "anibox";
const animationBoxNat = document.createElement("div");
animationBoxNat.className = "aniboxNat";


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

whoami.addEventListener("mouseenter", buttonShowFullMimi);
whoami.addEventListener("mouseleave", buttonDefaultMimi);
whoami.addEventListener("click", showFullContactMimi);
whoisshe.addEventListener("mouseenter", buttonShowFullNat);
whoisshe.addEventListener("mouseleave", buttonDefaultNat);
whoisshe.addEventListener("click", showFullContactNat);

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

function showFullContactMimi() {
  whoami.removeEventListener("mouseenter", buttonShowFullMimi);
  whoami.removeEventListener("mouseleave", buttonDefaultMimi);
  whoami.removeEventListener("click", showFullContactMimi);
  whoami.addEventListener("click", showHiddenContactMimi);
  me.addEventListener("transitionend", showParaMimi);
  whoami.textContent = "<<"
  contactParaMimi.className = "contactPara fade-in";
  contactParaMimi.innerHTML = `Hello, I'm Akumi, rookie at making websites.<br>
                           <br>
                           This is far from a fancy, useful and functional site, 
                           but I'm having fun making it and learning along the way!`;
  me.setAttribute("class", "expanded");
  me.appendChild(animationBoxMimi);
}

function showHiddenContactMimi() {
  whoami.addEventListener("mouseenter", buttonShowFullMimi);
  whoami.addEventListener("mouseleave", buttonDefaultMimi);
  whoami.addEventListener("click", showFullContactMimi);
  whoami.removeEventListener("click", showHiddenContactMimi);
  me.removeEventListener("transitionend", showParaMimi);
  me.setAttribute("class", "shrunk");
  me.appendChild(animationBoxMimi);
  me.removeChild(contactParaMimi);
}

function showFullContactNat() {
  whoisshe.removeEventListener("mouseenter", buttonShowFullNat);
  whoisshe.removeEventListener("mouseleave", buttonDefaultNat);
  whoisshe.removeEventListener("click", showFullContactNat);
  whoisshe.addEventListener("click", showHiddenContactNat);
  her.addEventListener("transitionend", showParaNat);
  whoisshe.textContent = "<<"
  contactParaNat.className = "contactPara fade-in";
  contactParaNat.innerHTML = `This is Natumi, co-owner of the skrecka shop.<br>
                           <br>
                           She is a good soul that is always trying her best, 
                           there's plenty of creativity in this little one!`;
  her.setAttribute("class", "expanded");
  her.appendChild(animationBoxNat);
}

function showHiddenContactNat() {
  whoisshe.addEventListener("mouseenter", buttonShowFullNat);
  whoisshe.addEventListener("mouseleave", buttonDefaultNat);
  whoisshe.addEventListener("click", showFullContactNat);
  whoisshe.removeEventListener("click", showHiddenContactNat);
  her.removeEventListener("transitionend", showParaNat);
  her.setAttribute("class", "shrunk");
  her.appendChild(animationBoxNat);
  her.removeChild(contactParaNat);
}

function showParaMimi() {
  animationBoxMimi.remove();
  me.appendChild(contactParaMimi);
}

function showParaNat() {
  animationBoxNat.remove();
  her.appendChild(contactParaNat);
}

function buttonShowFullMimi() {
  whoami.textContent = ">>";
}

function buttonDefaultMimi() {
  whoami.textContent = "Who?";
}

function buttonShowFullNat() {
  whoisshe.textContent = ">>";
}

function buttonDefaultNat() {
  whoisshe.textContent = "Who?";
}

