// 16. Modelar un objeto "Persona" con propiedades como nombre, edad y dirección.
class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    // Método para obtener la información de la persona
    obtenerInformacion() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Dirección: ${this.direccion}`;
    }

    // Método para actualizar la dirección
    actualizarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
}

// Ejemplo de uso
const persona1 = new Persona('Juan Pérez', 30, 'Calle Falsa 123');
console.log(persona1.obtenerInformacion()); // Imprime la información de la persona

persona1.actualizarDireccion('Avenida Siempre Viva 742');
console.log(persona1.obtenerInformacion()); // Imprime la información actualizada de la persona