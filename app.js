let damagePoint = document.getElementById("damage-point");
let playerStats = document.getElementById("player-stats");
let logBoxInfo = document.getElementById("log-box-info");
let weaponList = document.getElementById("weapon-list");
let darkMode = document.getElementById("dark-mode");
let result = document.getElementById("result");
let damage,
  buttons,
  armor,
  playerAC,
  playerCurrentLevel = 1,
  profeciencyBonus,
  modifier = -5,
  dexModifier = -5,
  strModifier = -5,
  d20 = 0,
  monsterAC = 10;
montersHitPoint = 22;
monstersCurrentHitPoint = montersHitPoint;

const abilities = [
  "STRENGTH",
  "DEXTERITY",
  "CONSTUTION",
  "INTELLIGENT",
  "WISDOM",
  "CHARISMA",
];

let weaponsDamageList = [
  {
    id: 1,
    name: "Club",
    wDamage: 4,
    wDice: 1,
  },
  {
    id: 2,
    name: "Dagger",
    wDamage: 4,
    wDice: 1,
  },
  {
    id: 3,
    name: "Greatclub",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 4,
    name: "Handaxe",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 5,
    name: "Javelin",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 6,
    name: "LightHammer",
    wDamage: 4,
    wDice: 1,
  },
  {
    id: 7,
    name: "Mace",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 8,
    name: "Quarterstaff",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 9,
    name: "Sickle",
    wDamage: 4,
    wDice: 1,
  },
  {
    id: 10,
    name: "Spear",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 11,
    name: "Battleaxe",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 12,
    name: "Flail",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 13,
    name: "Glaive",
    wDamage: 10,
    wDice: 1,
  },
  {
    id: 14,
    name: "Greataxe",
    wDamage: 12,
    wDice: 1,
  },
  {
    id: 15,
    name: "Greatsword",
    wDamage: 6,
    wDice: 2,
  },
  {
    id: 16,
    name: "Halberd",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 17,
    name: "Lance",
    wDamage: 12,
    wDice: 1,
  },
  {
    id: 18,
    name: "Longsword",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 19,
    name: "Maul",
    wDamage: 6,
    wDice: 2,
  },
  {
    id: 20,
    name: "Morningstar",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 21,
    name: "Pike",
    wDamage: 10,
    wDice: 1,
  },
  {
    id: 22,
    name: "Rapier",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 23,
    name: "Scimitar",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 24,
    name: "Shortsword",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 25,
    name: "Trident",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 26,
    name: "Warpick",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 27,
    name: "Warhammer",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 28,
    name: "Whip",
    wDamage: 4,
    wDice: 1,
  },
  {
    id: 29,
    name: "LightCrossbow",
    wDamage: 8,
    wDice: 1,
  },
  {
    id: 30,
    name: "Dart",
    wDamage: 4,
    wDice: 1,
  },
  {
    id: 31,
    name: "Shortbow",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 32,
    name: "Sling",
    wDamage: 4,
    wDice: 1,
  },
  {
    id: 33,
    name: "Blowgun",
    wDamage: 1,
    wDice: 1,
  },
  {
    id: 34,
    name: "HandCrossbow",
    wDamage: 6,
    wDice: 1,
  },
  {
    id: 35,
    name: "HeavyCrossbow",
    wDamage: 10,
    wDice: 1,
  },
  {
    id: 36,
    name: "Longbow",
    wDamage: 8,
    wDice: 1,
  },
];
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

function attackRoll() {
  d20 = Math.ceil(Math.random() * 20);
}

function critHitCalc(x, y, m) {
  if (y === 1) {
    damage = Math.ceil(Math.random() * x) + Math.ceil(Math.random() * x) + m;
  } else if (y === 2) {
    damage =
      Math.ceil(Math.random() * x) +
      Math.ceil(Math.random() * x) +
      Math.ceil(Math.random() * x) +
      Math.ceil(Math.random() * x) +
      m;
  }
  logBoxInfo.innerText += `Moradin'in kutsamasını silahında hissettin. Canavara tam ${damage} hasar verdin. \n`;

  hitPointCalc();
}

function hitCalc(x, y, m) {
  if (y === 1) {
    damage = Math.ceil(Math.random() * x) + m;
  } else if (y === 2) {
    damage = Math.ceil(Math.random() * x) + Math.ceil(Math.random() * x) + m;
  }
  logBoxInfo.innerText += `Canavara tam ${damage} hasar verdin. \n`;
  hitPointCalc();
}

function hitPointCalc() {
  monstersCurrentHitPoint -= damage;
  damagePoint.innerHTML = monstersCurrentHitPoint;
  let yuzdeCan = (monstersCurrentHitPoint / montersHitPoint) * 200;
  damagePoint.style.width = `${yuzdeCan}px`;
  if (monstersCurrentHitPoint <= 0) {
    buttons.style.disabled = "true";
    result.style.visibility = "visible";
  }
}

function createButton() {
  for (let i = 0; i < weaponsDamageList.length; i++) {
    let weapon = document.createElement("button");
    weapon.innerText = `${weaponsDamageList[i].name} HIT`;
    buttons = weaponList.appendChild(weapon);
    buttons.addEventListener("click", (e) => {
      let text = e.target.innerHTML.split(" ")[0];
      if (text === weaponsDamageList[i].name) {
        if (weaponsDamageList[i].id >= 29) {
          attackRoll();
          if (d20 === 1) {
            logBoxInfo.innerText += "Sendeledin ve saldırın boşa gitti! \n";
          }

          d20 += dexModifier + profeciencyBonus;
          if (d20 < monsterAC) {
            logBoxInfo.innerText += "Silahın canavarın zırhında patladı. \n";
          }
          if (d20 === 20) {
            critHitCalc(
              weaponsDamageList[i].wDamage,
              weaponsDamageList[i].wDice,
              dexModifier
            );
          } else if (d20 >= monsterAC) {
            hitCalc(
              weaponsDamageList[i].wDamage,
              weaponsDamageList[i].wDice,
              dexModifier
            );
          }
        } else {
          attackRoll();
          if (d20 === 1) {
            logBoxInfo.innerText += "Sendeledin ve saldırın boşa gitti! \n";
          }
          d20 += strModifier + profeciencyBonus;
          if (d20 < monsterAC) {
            logBoxInfo.innerText += "Silahın canavarın zırhında patladı. \n";
          }
          if (d20 === 20) {
            critHitCalc(
              weaponsDamageList[i].wDamage,
              weaponsDamageList[i].wDice,
              strModifier
            );
          } else if (d20 >= monsterAC) {
            hitCalc(
              weaponsDamageList[i].wDamage,
              weaponsDamageList[i].wDice,
              strModifier
            );
          }
        }
      } else {
        console.log("Bu silah çantanızda bulunmamaktadır.");
      }
    });
  }
}
createButton();
if (playerStats) {
  playerStats.innerText = `${mehmet.name}'s Stats:\n\nSTRENGTH: ${mehmet.strength}\nDEXTERITY: ${mehmet.dexterity}\nCONSTUTION: ${mehmet.constution}\nINTELLIGENT: ${mehmet.intelligent}\nWISDOM: ${mehmet.wisdom}\nCHARISMA: ${mehmet.charisma}`;
}

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
