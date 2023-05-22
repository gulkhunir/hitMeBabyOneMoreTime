let attackButton = document.getElementById("attack-button");
let result = document.getElementById("result");
let weaponList = document.getElementById("weapon-list");
let damagePoint = document.getElementById("damage-point");
let damage, buttons, d20;
let montersHitPoint = 100;
let monstersCurrentHitPoint = 100;
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

function attackRoll() {
  d20 = Math.ceil(Math.random() * 20);
}

function critHitCalc(x, y) {
  if (y === 1) {
    damage = Math.ceil(Math.random() * x) + x;
  } else if (y === 2) {
    damage =
      Math.ceil(Math.random() * x) + Math.ceil(Math.random() * x) + 2 * x;
  }
  hitPointCalc();
}

function hitCalc(x, y) {
  if (y === 1) {
    damage = Math.ceil(Math.random() * x);
  } else if (y === 2) {
    damage = Math.ceil(Math.random() * x) + Math.ceil(Math.random() * x);
  }
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
        attackRoll();
        if (d20 === 20) {
          critHitCalc(weaponsDamageList[i].wDamage, weaponsDamageList[i].wDice);
        } else if (d20 === 1) {
          console.log("Misss");
        } else {
          hitCalc(weaponsDamageList[i].wDamage, weaponsDamageList[i].wDice);
        }
      }
    });
  }
}
createButton();
