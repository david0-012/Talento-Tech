// Importaciones
const express = require('express'); // Importación del módulo express
const app = express(); // Aplicación de express
const port = 4000; // Establecer el puerto de escucha del servidor en el puerto 4000

// Configuración de la ruta
app.get('/saludo/:nombre', (req, res) => { // 'app.get': configura una ruta para '/saludo/:nombre'
    res.send(`Hola ${req.params.nombre}`); // 'res.send': envía la respuesta "Hola <nombre>" al cliente (el navegador)
})

// Establecer el puerto de escucha del servidor en el puerto 4000
app.listen(port, () => { // 'app.listen': inicia el servidor y lo configura para que escuche en un puerto (p. ej., 4000)
    console.log(`Servidor escuchando en http://localhost:${port}`); // 'console.log': imprime un mensaje en la consola cuando el servidor está listo
});