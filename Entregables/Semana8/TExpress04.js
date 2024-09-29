// Imprimir los números del 1 hasta un número definido por el usuario. La ruta debe ser /numeros/:numero y debe devolver una lista de números desde 1 hasta el número ingresado.
const express = require('express');
const app = express();
const port = 5000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Ruta para imprimir los números desde 1 hasta el número ingresado
app.get('/numeros/:numero', (req, res) => {
    const numero = parseInt(req.params.numero); // Obtener el número de la URL y convertirlo a entero

    // Verificar que el número sea válido
    if (isNaN(numero) || numero < 1) {
        return res.status(400).json({ error: 'El parámetro ingresado debe ser un número válido mayor o igual a 1' });
    }

    // Generar la lista de números
    let numeros = [];
    for (let i = 1; i <= numero; i++) {
        numeros.push(i);
    }

    // Devolver la lista en formato JSON
    res.json({
        numero: numero,
        lista: numeros
    });
});

// Configuración del servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

/*
http://localhost:5000/numeros/5
*/