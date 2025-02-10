// 1) Crea una función que salude por consola a la persona que le indiques porparámetro.

function saludar(name){
    console.log("Hola "+ name +" !");
}

console.log("---------------Ejercicio 1---------------------")
saludar("Saturnino");

// Crea este array y consulta sus posiciones en este orden 9,0,7,2,6,3,1,4,10,5,8 

const mensajeOculto = ['U',' ','N','S','D','A', 'O',
    'E', 'S','B','I' ]
const posArray = [9,0,7,2,6,3,1,4,10,5,8];

function leerArrayWOther (array, arrayPos){
    let mensaje = "";
    for (let i = 0; i < arrayPos.length; i++) {
        mensaje = mensaje + array[arrayPos[i]];
    };
    return mensaje;
}
console.log("---------------Ejercicio 2---------------------")
let mensaje = leerArrayWOther(mensajeOculto, posArray);
console.log(mensaje);

// Con ayuda de los métodos que disponen los Arrays en Js ordena este listado de planetas y elimina los que no lo sean

const listadoPlanetas = ['Narnia', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón', 'Mercurio'];

//MODO SIMPLE

function fixArray (listadoPlanetas) {
    const planeta = listadoPlanetas.pop(); //Elimina el ultimo y lo guarda en planeta
    listadoPlanetas.pop(); //Lo elimina simplemente
    listadoPlanetas.shift(); //Elimina el primer elemento
    listadoPlanetas.unshift(planeta); //Añade planeta a la 1 posicion del array
    return listadoPlanetas
}

console.log("---------------Ejercicio 3---------------------")
console.log(fixArray(listadoPlanetas));

//MODO BUENO
// const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

// function leerArrayCompl(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//     }
// }

// function eliminarNoPlanetas(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         if (!planetas.includes(array[i])) {
//             array.splice(i, 1);
//         }
//     }
//     return array;
// }

// function ordenarPlanetas(array) {
//     array.sort((b, a) => {
//         return planetas.indexOf(a) - planetas.indexOf(b);
//     });
//     return array;
// }

// const listadoPlanetasCorregido = eliminarNoPlanetas([...listadoPlanetas]); // [...nombreArray] Para crear copia y no machacar encima de listadoPlanetas
// const listadoPlanetasCorregidoOrdenado = ordenarPlanetas([...listadoPlanetasCorregido]); // Lo mismo con listadoPlanetasCorregido

// console.log("---------------Ejercicio 3---------------------")
// leerArrayCompl(listadoPlanetas);
// console.log("---------------No planetas eliminados----------")
// leerArrayCompl(listadoPlanetasCorregido);
// console.log("---------------Ordenada------------------------")
// leerArrayCompl(listadoPlanetasCorregidoOrdenado);