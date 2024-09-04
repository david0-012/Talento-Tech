const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.get('/miarchivo', (req, res) => {
    res.sendFile('js.png', { 
            root: __dirname 
        });
});

app.get('/user', (req, res) => {
    res.json({
        nombre: 'Juan',
        apellido: 'Pedro',
    });
});

app.get('/estado', (req, res) => {
    res.sendStatus(204);
});

app.listen(port, () => { 
    console.log(`Servidor escuchando en http://localhost:${port}`);
});