let numero = parseFloat(prompt("Ingrese el numero para ver su tabla de multiplicar: "));
let tabla = "";
for (i=1; i<=10; i++) {
    tabla += (numero + " x " + i + " = " + numero*i+ "\n");
}
alert(tabla);