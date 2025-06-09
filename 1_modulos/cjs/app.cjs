const funcion = require("./funcionesPorDefecto.cjs");
const { restar, sumar } = require("./funcionesNombradas.cjs");

console.log(funcion.multiplicar(5, 3)); // 15
console.log(funcion.dividir(5, 3)); // 1.6666666666666667


//Funciones nombradas en un módulo CommonJS

console.log(sumar(5, 3)); // 8
console.log(restar(5, 3)); // 2

