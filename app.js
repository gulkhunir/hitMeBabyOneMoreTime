let damagePoint = document.getElementById("damage-point");
let result = document.getElementById("result");
let weaponList = document.getElementById("weapon-list");
let kacVurdum = document.getElementById("kac-vurdum");
let playerStats = document.getElementById("player-stats");
let playerAbility = document.getElementById("player-ability");
let darkMode = document.getElementById("dark-mode");
let nameSubmit = document.getElementById("name-submit");
let maxHitPoint = 100;
let currentHitPoint = 100;
let zarCarpani = 0;
let buttons;
let attackRoll;
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
    name: "War pick",
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
  {
    id: 37,
    name: "Net",
    wDamage: 0,
    wDice: 1,
  },
];

for (let i = 0; i < abilities.length; i++) {
  playerAbility.innerText += ` ${abilities[i]}: \n `;

  console.log(abilities[i]);
}

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

class Player {
  constructor(name, race, sinif, str, dex, con, int, wis, char) {
    this.name = name;
    this.race = race;
    this.sinif = sinif;
    this.str = str;
    this.dex = dex;
    this.char = char;
    this.con = con;
    this.wis = wis;
    this.int = int;
  }
}

// nameSubmit.addEventListener("click", () => {

// });

let gulkhunir = new Player(
  "Gulkhunir",
  "Dwarf",
  "Warrior",
  17,
  15,
  15,
  12,
  14,
  9
);

for (let i = 0; i < weaponsDamageList.length; i++) {
  let weapon = document.createElement("button");
  weapon.innerText = `${weaponsDamageList[i].name} HIT`;
  buttons = weaponList.appendChild(weapon);
  buttons.addEventListener("click", weaponHit);
}

function weaponHit(e) {
  let text = e.target.innerHTML.split(" ")[0];
  for (let i = 0; i < weaponsDamageList.length; i++) {
    if (text == weaponsDamageList[i].name) {
      attackRoll = Math.ceil(Math.random() * 20);
      if (attackRoll === 20) {
        zarCarpani = weaponsDamageList[i].wDamage;
        let damage = Math.ceil(Math.random() * zarCarpani) + zarCarpani;
        if (damage > 0) {
          kacVurdum.innerText += `CRITICAL HIT!!! Canavara ${weaponsDamageList[i].name} ile tam ${damage} hasar verdiniz. \n`;
        } else {
          kacVurdum.innerText += `Canavar saldırından hasar almadı. \n`;
        }
        currentHitPoint -= damage;
        damagePoint.innerText = currentHitPoint;
        let yuzdeCan = (currentHitPoint / maxHitPoint) * 200;
        damagePoint.style.width = `${yuzdeCan}px`;
        if (currentHitPoint <= 0) {
          result.style.visibility = "visible";
        }
      } else if (attackRoll === 1) {
        kacVurdum.innerText += `FAIL Canavar saldırından kaçınmanın bir yolunu buldu. \n`;
      } else {
        zarCarpani = weaponsDamageList[i].wDamage;
        let damage = Math.ceil(Math.random() * zarCarpani);
        if (damage > 0) {
          kacVurdum.innerText += `Canavara ${weaponsDamageList[i].name} ile tam ${damage} hasar verdiniz.\n`;
        } else {
          kacVurdum.innerText += `Canavar saldırından kaçınmanın bir yolunu buldu.\n`;
        }
        currentHitPoint -= damage;
        damagePoint.innerHTML = currentHitPoint;
        let yuzdeCan = (currentHitPoint / maxHitPoint) * 200;
        damagePoint.style.width = `${yuzdeCan}px`;
        if (currentHitPoint <= 0) {
          result.style.visibility = "visible";
        }
      }
    }
  }
}

playerStats.innerText = `${gulkhunir.name}'s Stats:\nSTRENGTH: ${gulkhunir.str}\nDEXTERITY: ${gulkhunir.dex}\nCONSTUTION: ${gulkhunir.con}\nINTELLIGENT: ${gulkhunir.int}\nWISDOM: ${gulkhunir.wis}\nCHARISMA: ${gulkhunir.char}`;
