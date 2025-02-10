// Crea una función para felicitar el cumpleaños que pueda darte respuesta
// en tres idiomas ( español, inglés y Alemán) y que tenga una respuesta
// con iconos, en el caso de que no sea ninguno de los tres idiomas🎂.

function happyBirthday(name, lang) {
  switch (lang) {
    case "es":
      console.log("Feliz cumpleaños " + name + "!");
      break;

    case "en":
      console.log("Happy birthday " + name + "!");
      break;

    case "de":
      console.log("Alles gutze zum Geburtstag, " + name + "!");
      break;

    default:
      console.log("🎂 " + name);
      break;
  }
};
console.log(
  "--------------------------------Ejercicio 1-----------------------------------------"
);
happyBirthday("Saturnino", "en");

// Crea una funcion que haga de dado y devuelva un numero aleatorio del 1 al 6

function randomNumber() {
  let num = Math.round(Math.random() * (6 - 1) + 1);

  return console.log(`El dado ha sacado ${num}.`);
};

console.log(
  "--------------------------------Ejercicio 2-----------------------------------------"
);
randomNumber();

// Crea una funcion que devuelva la tabla de multiplicar del numero que le indiquemos.
function multipliers(num) {
  const arrayOp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(`La tabla del número ${num} es:`);
  arrayOp.forEach((arrayValue) => {
    console.log(`${num} x ${arrayValue} = ` + num * arrayValue);
  });
};

const num = prompt("Intruduce el número a sacar la tabla:");
console.log(
  "--------------------------------Ejercicio 3-----------------------------------------"
);
multipliers(num);

// Crea una funcion que cuente las ovejas que estan dormidas.
const sleepSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
  false,
];

function countSheepSleep(sleepSheep) {
  let cont = 0;
  sleepSheep.forEach((arrayValue) => {
    if (arrayValue === true) {
      cont++;
    }
  });

  console.log(`Hay ${cont} ovejas dormidas.`);
};

console.log(
  "--------------------------------Ejercicio 4-----------------------------------------"
);
countSheepSleep(sleepSheep);

// Crea un objeto planeta tierra que tenga las siguientes propiedades:
// distancia al sol, sus vecinos (planetas mas proximos),
// lista de composicion atmosferica y metodo greet.

const planet = {
  name: "Tierra",
  distanceToSun: 149000000,
  planetBefore: [40000000, "Venus"],
  planetAfter: [225000000, "Marte"],
  composition: [
    "Nitrógeno",
    " Oxígeno",
    " Argón",
    " Dióxido de carbono (CO2)",
    " Neón",
    " Hidrógeno",
    " Helio",
    " Metano",
    " Kriptón",
    " Óxido nitroso",
    " Xénon",
    " Monóxido de carbono (CO)",
    " Ozono",
    " Clorofluorocarburos (CFC)",
    " y Vapor de agua",
  ],
  greet() {
    console.log(
      `Hola, soy el planeta ${this.name}. Mi distancia al sol es ${this.distanceToSun} km., mi distancia a ${this.planetBefore[0]} es de ${this.planetBefore[1]} km. y de ${this.planetAfter[0]} es de ${this.planetAfter[1]} y estoy compuesto de ${this.composition}.`
    );
  },
};

console.log(
  "--------------------------------Ejercicio 5 A-----------------------------------------"
);
planet.greet();

//Más tarde añade con codigo la propiedad satelite y dale el valor de luna
// tambien añade la propiedad planeta habitado tipo boolean y eliminalo.

planet.satellite = "Luna";
planet.habited = true;
console.log(
  "--------------------------------Ejercicio 5 B-----------------------------------------"
);
console.log({ ...planet });

delete planet.habited;
console.log({ ...planet });

// Basandose en las especificaciones del objeto anterior, crea la clase planeta
// y haz instancia de, al menos 2 planetas con las propiedades nombre, km del sol
// planetas vecinos, satelites y metodo saludar,

class Planet {
  constructor(name, distanceToSun, neighborPlanets, satellites) {
    this.name = name;
    this.distanceToSun = distanceToSun;
    this.neighborPlanets = neighborPlanets;
    this.satellites = satellites;
  };

  greet() {
    console.log(
      `Soy el planeta ${this.name}, mi distancia al sol son ${
        this.distanceToSun
      } km., mi/mis planeta/s vecino/s son ${
        this.neighborPlanets
      } y mis satelites son ${this.satellites.join(", ")}.`
    );
  };
};

const neptune = new Planet(
  "Neptuno",
  4495000000,
  ["Urano"],
  [
    "Tritón, Proteus, Nereid, Larissa, Galatea, Despina, Thalassa, Naiad, Halimede, Sao, Laomedeia, Psamathe, Neso e Hippocamp",
  ]
);
const jupiter = new Planet(
  "Júpiter",
  778500000,
  ["Marte y Saturno"],
  [
    "Ío, Europa, Ganimedes, Calisto, Metis, Adrastea, Amaltea, Thebe, Elara, Himalia, Lysithea, Carme, Ananke, Pasiphae, Sinope, Leda, Callirrhoe, Megaclite, Taygete, Chaldene, Harpalyke, Kalyke, Helike, Eukelade, Cyllene, Pandia, S/2003 J 2",
  ]
);

console.log(
  "--------------------------------Ejercicio 6-----------------------------------------"
);

neptune.greet();
jupiter.greet();
