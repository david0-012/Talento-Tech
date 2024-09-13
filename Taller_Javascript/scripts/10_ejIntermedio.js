function gradoscaf (gradosC){
    let gradosF = gradosC*9/5+32;
    return gradosF;
}
conversion = gradoscaf(prompt("Ingrese los grados Celsius para convertir a Fahrenheit: "));
alert("Los grados Fahrenheit son: " + conversion);