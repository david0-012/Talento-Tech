// Crear una tabla de multiplicar de un número ingresado por el usuario. La ruta debe ser /tabla/:numero y debe devolver la tabla de multiplicar del número en formato JSON.
const express = require('express');
const app = express();
const port = 5000;

//Aplicación de express
app.get('/', (req, res) => {  // 'app.get': configura una ruta para la página principal ('/') del sitio
    res.send('Hola Mundo');   // 'res.send': envía la respuesta "Hola Mundo" al cliente (el navegador)
});

app.get('/tabla/:numero', (req, res) => {
    let numero = req.params.numero;
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push({
            numero: numero,
            multiplicador: i,
            resultado: numero * i
        });
    }
    res.json(tabla);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});