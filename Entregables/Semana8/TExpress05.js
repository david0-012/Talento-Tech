// Crear una función que convierta grados Celsius a Fahrenheit. La ruta debe ser /celsius-a-fahrenheit y debe recibir el parámetro celsius. Utilizar una arrow function.
const express = require('express');
const app = express();
const port = 5000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Ruta para convertir de Celsius a Fahrenheit usando una arrow function
app.get('/celsius-a-fahrenheit', (req, res) => {
    const celsius = parseFloat(req.query.celsius); // Obtener el parámetro 'celsius' desde la URL

    // Verificar que el parámetro celsius sea válido
    if (isNaN(celsius)) {
        return res.status(400).json({ error: 'El parámetro ingresado no es un número válido' });
    }

    // Arrow function para convertir Celsius a Fahrenheit
    const convertirACelsius = (celsius) => (celsius * 9/5) + 32;

    // Calcular el resultado
    const fahrenheit = convertirACelsius(celsius);

    // Devolver el resultado en formato JSON
    res.json({
        celsius: celsius,
        fahrenheit: fahrenheit
    });
});

// Configuración del servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
/*
http://localhost:5000/celsius-a-fahrenheit?celsius=30
*/