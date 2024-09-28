// 15. Crear una función que ordene un arreglo de números utilizando el método de burbuja.
function ordenarBurbuja(arr) {
    let n = arr.length;
    let intercambiado;

    do {
        intercambiado = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Intercambiar elementos
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                intercambiado = true;
            }
        }
        // Reducir n porque el último elemento ya está en su lugar correcto
        n--;
    } while (intercambiado);

    return arr;
}

// Ejemplo de uso
let numeros = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo original:", numeros);
let ordenado = ordenarBurbuja(numeros);
console.log("Arreglo ordenado:", ordenado);