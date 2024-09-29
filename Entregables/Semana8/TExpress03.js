// Crear un programa que solicite al usuario su nombre y edad, y luego muestre un mensaje de bienvenida personalizado. La ruta debe ser /saludo/:nombre/:edad y debe devolver un mensaje de saludo personalizado.
const express = require('express');
const app = express();
const port = 5000;

// Ruta para saludo
app.get('/saludo/:nombre/:edad', (req, res) => {
    const nombre = req.params.nombre;
    const edad = parseInt(req.params.edad);

    // Verificar que la edad sea un número válido
    if (isNaN(edad)) {
        return res.status(400).send('La edad debe ser un número válido');
    }

    // Crear un mensaje de bienvenida personalizado
    res.send(`¡Hola, ${nombre}! Bienvenido/a. Tienes ${edad} años.`);
});

// Configuración del servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

/*
http://localhost:5000/saludo/Jhonatan/30
*/
