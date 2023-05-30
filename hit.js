let playerCurrentLevel;
let selectClass = document.getElementById("select-class");
let selectRace = document.getElementById("select-race");
let statPoint = document.getElementById("stat-point");

class Player {
  constructor(
    strength,
    dexterity,
    constution,
    intelligent,
    wisdom,
    charisma,
    name
  ) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constution = constution;
    this.intelligent = intelligent;
    this.wisdom = wisdom;
    this.charisma = charisma;
  }
}
let classe = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const race = [
  "Dwarf",
  "Elf",
  "Halfling",
  "Human",
  "Dragonborn",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Tiefling",
];

const stats = ["STR", "DEX", "CON ", "INT", "WIS", "CHA"];

for (let i = 0; i < classe.length; i++) {
  let classButton = document.createElement("button");
  classButton.innerText = classe[i];
  let classBtn = selectClass.appendChild(classButton);
  classBtn.classList.add("classBtn");
}
for (let i = 0; i < race.length; i++) {
  let raceButton = document.createElement("button");
  raceButton.innerText = race[i];
  let raceBtn = selectRace.appendChild(raceButton);
  raceBtn.classList.add("raceBtn");
}
for (let i = 0; i < stats.length; i++) {
  let statButton = document.createElement("button");
  statButton.innerHTML = `<button><img id="arrows" src="./assets/images/arrow2.png" alt="ok"> </button> ${stats[i]} <button><img src="./assets/images/arrow1.png" alt="ok"></button>`;
  let statBtn = statPoint.appendChild(statButton);
  statBtn.classList.add("statBtn");
}

let mehmet = new Player(13, 16, 11, 12, 15, 9, "GULKHUNIR");

if (playerCurrentLevel <= 4) {
  profeciencyBonus = 2;
} else if (playerCurrentLevel <= 8) {
  profeciencyBonus = 3;
} else if (playerCurrentLevel <= 12) {
  profeciencyBonus = 4;
} else if (playerCurrentLevel <= 16) {
  profeciencyBonus = 5;
} else if (playerCurrentLevel <= 20) {
  profeciencyBonus = 6;
}

function strModifierCalc(player) {
  strModifier = -5;
  strModifier += Math.floor(0.5 * player.strength);
}

strModifierCalc(mehmet);

function dexModifierCalc(player) {
  dexModifier = -5;
  dexModifier += Math.floor(0.5 * player.dexterity);
}

dexModifierCalc(mehmet);
