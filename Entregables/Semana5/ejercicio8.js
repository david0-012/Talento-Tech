// 8. Crear una tabla de multiplicar de un número ingresado por el usuario.
let numero = parseFloat(prompt("Ingrese el numero para ver su tabla de multiplicar: "));
let tabla = "";
for (i=1; i<=10; i++) {
    tabla += (numero + " x " + i + " = " + numero*i+ "\n");
}
alert(tabla);