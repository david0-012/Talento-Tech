const express = require('express'); // Importa express
const bodyParser = require('body-parser');
const app = express();      // Crea una instancia de express
const port = 7000;          // Establece el puerto 7000

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

let usuarioActual = {}; // Variable para almacenar los datos del usuario

// Ruta para crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    usuarioActual = req.body; // Almacena los datos del usuario en la variable
    console.log('Nuevo usuario:', usuarioActual);
    res.send('Usuario creado correctamente');
});

// Ruta para mostrar los datos del usuario
app.get('/', (req, res) => {
    res.json(usuarioActual); // Muestra los datos del usuario en formato JSON
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});