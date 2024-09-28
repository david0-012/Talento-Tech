// Ejercicio 1: Manipulación de Cadenas
let cadena1 = "Hola";
let cadena2 = "Mundo";
let concatenacion = cadena1 + " " + cadena2;
console.log("Concatenación:", concatenacion);

let cadena3 = "JavaScript";
console.log("Longitud de la cadena:", cadena3.length);

let subcadena = cadena3.substring(0, 4);
console.log("Subcadena:", subcadena);

// Ejercicio 2: Operaciones con Números
let num1 = 5;
let num2 = 3;
console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", num1 / num2);

let numero = 4;
console.log("Número al cuadrado:", numero * numero);

// Ejercicio 3: Uso de Booleanos
let a = 10;
let b = 20;
console.log("a es igual a b:", a === b);
console.log("a es mayor que b:", a > b);
console.log("a es menor que b:", a < b);

let bool1 = true;
let bool2 = false;
console.log("bool1 AND bool2:", bool1 && bool2);
console.log("bool1 OR bool2:", bool1 || bool2);
console.log("NOT bool1:", !bool1);

let esMayor = a > b;
if (esMayor) {
    console.log("a es mayor que b");
} else {
    console.log("a no es mayor que b");
}