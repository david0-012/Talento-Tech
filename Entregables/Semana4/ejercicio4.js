// 4. Implementar un programa que determine si un número es par o impar.
function poI (){
    const numero = prompt("Ingrese un número");
    if (numero % 2 == 0){
        window.alert(`El número ${numero} es par`);
    } else {
        window.alert(`El número ${numero} es impar`);
    }
}
poI();