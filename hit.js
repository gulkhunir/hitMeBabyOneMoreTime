let darkMode = document.getElementById("dark-mode");
let playerCurrentLevel;

class Player {
  constructor(
    name,
    strength,
    dexterity,
    constution,
    intelligent,
    wisdom,
    charisma
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

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

let mehmet = new Player("GULKHUNIR", 13, 16, 11, 12, 15, 9);

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
