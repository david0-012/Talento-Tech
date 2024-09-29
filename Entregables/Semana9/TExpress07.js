/*
Rutas dinámicas.
Crear una ruta con parámetros: Define una ruta que acepte un parámetro de identificación y muestre un mensaje personalizado basado en ese parámetro.
Probar con Postman: Envía solicitudes a la ruta con diferentes valores para el parámetro y verifica que las respuestas sean correctas.
*/
const express = require('express');
const app = express();
const port = 3000;

// Ruta dinámica con parámetro de identificación (por ejemplo, nombre)
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre; // Obtener el parámetro 'nombre' de la URL
    res.send(`¡Hola, ${nombre}! Bienvenido/a al sitio.`);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
