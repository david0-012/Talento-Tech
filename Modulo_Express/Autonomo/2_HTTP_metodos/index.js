const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/productos',(req, res) => {
    res.send('Creando producto');
});

app.put('/productos',(req, res) => {
    res.send('Actualizando un producto');
});

app.delete('/productos',(req, res) => {
    res.send('Eliminando un producto');
});

app.patch('/productos',(req, res) => {
    res.send('Actualizando una parte del producto');
});

app.listen(port, () => { 
    console.log(`Servidor escuchando en http://localhost:${port}`);
});