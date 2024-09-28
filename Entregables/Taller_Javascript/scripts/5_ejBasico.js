function operacion() {
    let operacion = prompt("Introduce la operación a realizar: suma, resta, multiplicacion, division");
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let resultado;

    if (operacion.toLowerCase() === 'suma') {
        resultado = num1 + num2;
    } else if (operacion.toLowerCase() === 'resta') {
        resultado = num1 - num2;
    } else if (operacion.toLowerCase() === 'multiplicacion') {
        resultado = num1 * num2;
    } else if (operacion.toLowerCase() === 'division') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            alert("Error: División por cero no permitida.");
            return;
        }
    } else {
        alert("Operación no válida.");
        return;
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
}

operacion();