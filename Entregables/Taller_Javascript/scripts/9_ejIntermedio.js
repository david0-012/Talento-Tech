let numero = parseFloat(prompt("Ingrese el numero para calcular su factorial"));
let factorial = 1; // Inicializar factorial a 1
for (let i = numero; i >= 1; i--) { // Declarar i y corregir la condición
    factorial *= i;
}
alert("El factorial es: " + factorial);