function palindromo(palabra){
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--){
        palabraInvertida += palabra[i];
    }
    if (palabra === palabraInvertida){
        return "La palabra '" +palabra + "' es palíndroma";
    } else {
        return "La palabra '" +palabra + "' no es palíndroma";
    }
}
palabra = palindromo(prompt("Ingrese una palabra"));
alert(palabra);