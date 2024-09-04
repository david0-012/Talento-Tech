const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.end('Bienvenido!');
});

app.get('/prueba', (req, res) => {
  res.send('Esto es una prueba');
});

app.get('/clima', (req, res) => {
  res.end('El clima es frio');
});


app.use((req, res) => {
  res.status(404).send('No se encontró la página'); 
});

app.listen(port, () => { 
    console.log(`Servidor escuchando en http://localhost:${port}`);
});