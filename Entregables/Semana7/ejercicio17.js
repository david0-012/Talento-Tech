// 17. Crear una clase "Carro" con propiedades como marca, modelo y año.
class Carro {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Método para obtener la información del carro
    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }

    // Método para actualizar el año del carro
    actualizarAño(nuevoAño) {
        this.año = nuevoAño;
    }
}

// Ejemplo de uso
const carro1 = new Carro('Toyota', 'Corolla', 2020);
console.log(carro1.obtenerInformacion()); // Imprime la información del carro

carro1.actualizarAño(2021);
console.log(carro1.obtenerInformacion()); // Imprime la información actualizada del carro