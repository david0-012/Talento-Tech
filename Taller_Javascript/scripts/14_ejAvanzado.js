let arreglo = [1,8,9,6,87,41,21,12,85,96,32,13];

function ordenarArreglo(arr){
    let arrOrdenado = arr.sort((a,b) => a-b);
    return arrOrdenado;
}
console.log("Arreglo ordenado: " + ordenarArreglo(arreglo));

function bBinaria(arr, num) {
    ordenarArreglo(arr); // Ordena el arreglo
    let inicio = 0; // Índice inicial del rango de búsqueda
    let fin = arr.length - 1; // Índice final del rango de búsqueda
    let posición = -1; // Variable para almacenar la posición del número encontrado

    // Bucle de búsqueda
    while (inicio <= fin) {
        let mitad = Math.floor((inicio + fin) / 2); // Calcula el índice de la mitad

        if (arr[mitad] === num) { // Si el número en la mitad es igual al número buscado
            posición = mitad; // Guarda la posición
            break; // Termina el bucle
        } else if (arr[mitad] < num) { // Si el número en la mitad es menor que el número buscado
            inicio = mitad + 1; // Ajusta el índice inicial para buscar en la mitad superior
        } else { // Si el número en la mitad es mayor que el número buscado
            fin = mitad - 1; // Ajusta el índice final para buscar en la mitad inferior
        }
    }
    // Devuelve el resultado
    if (posición !== -1) {
        return "El número se encuentra en la posición: " + posición;
    } else {
        return "El número no se encuentra en el arreglo.";
    }
}

console.log(bBinaria(arreglo, 12)); // El número se encuentra en la posición: 11
console.log(bBinaria(arreglo, 101)); // El número no se encuentra en el arreglo.
