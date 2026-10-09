// ACTIVIDAD 9 – Consola y sintaxis básica
// console.log() imprime en la consola del navegador (F12 > Consola).

// =====================================================================
// 1. OPERACIONES
// =====================================================================

// 1.1 Suma de dos números
console.log("1.1 Suma:", 8 + 5); // 13

// 1.2 Resta de dos números literales
console.log("1.2 Resta:", 8 - 5); // 3

// 1.3 Multiplicación de dos números literales
console.log("1.3 Multiplicación:", 8 * 5); // 40

// 1.4 División de dos números literales
console.log("1.4 División:", 10 / 4); // 2.5

// 1.5 Resto de una división (operador módulo %)
console.log("1.5 Resto:", 10 % 3); // 1, porque 10 = 3 * 3 + 1

// 1.6 Mi nombre
console.log("1.6 Nombre:", "Josefina");

// 1.7 Concatenación de dos palabras. Se agrega " " (espacio) para que no
// queden pegadas: sin el espacio daría "Programaciónweb".
console.log("1.7 Concatenación:", "Programación" + " " + "web"); // Programación web

// 1.8 Concatenación de tres palabras. Atención: "1" es una cadena, por eso
// se concatena. Si fuera el número 1 sin comillas, también se convertiría a texto.
console.log("1.8 Concatenación:", "Aplicaciones" + " " + "web" + " " + "1"); // Aplicaciones web 1


// =====================================================================
// 2. VARIABLES Y CONSTANTES
// Los nombres describen su contenido. Se usa const para lo que no cambia
// y let para lo que sí va a cambiar de valor.
// =====================================================================

// 2.1 Constante con el nombre de la materia, concatenada con " - Sistemas"
const nombreMateria = "Aplicaciones Web";
console.log("2.1:", nombreMateria + " - Sistemas"); // Aplicaciones Web - Sistemas

// 2.2 Variable vacía "parentesco" + dos constantes con nombres.
// let (y no const) porque parentesco empieza vacía y se le asigna un valor después.
let parentesco = "";
const nombrePropio = "Josefina";
const nombreFamiliar = "Lucía"; // cambiar por el nombre de tu familiar

// Se intercala " prima de " entre ambos nombres (con espacios a los costados)
// y se asigna el resultado a la variable parentesco.
parentesco = nombrePropio + " prima de " + nombreFamiliar;

console.log("2.2:", parentesco); // Josefina prima de Lucía
