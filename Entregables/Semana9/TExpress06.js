/*
Creación de un servidor básico.
Crear un servidor Express: Configura un servidor Express básico que escuche en un puerto específico.
Definir una ruta raíz: Crea una ruta raíz (/) que responda con un mensaje simple.
Probar con Postman: Envía una solicitud GET a la ruta raíz y verifica que se reciba la respuesta esperada.
*/
const express = require('express'); // Importar Express
const app = express(); // Crear una instancia de Express
const port = 3000; // Definir el puerto donde escuchará el servidor

// Ruta raíz ("/")
app.get('/', (req, res) => {
    res.send('¡Hola! Bienvenido al servidor Express.'); // Respuesta de la ruta raíz
});

// Escuchar en el puerto definido
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
/*
http://localhost:3000/
*/