const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Importamos el módulo fs para leer archivos
const app = express();
const bodyParser = require('body-parser');

app.use(cors()); // Habilitamos el uso de cors
app.use(bodyParser.json()); // Habilitamos el uso de json en las peticiones
app.use(express.static('public')); // Habilitamos el uso de archivos estáticos

// Ruta para obtener datos de un archivo JSON
app.get('/api/data', (req, res) =>{
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo:', err);
            res.status(500).json({message:'Error al leer el archivo'});
            return;
        };
        res.json(JSON.parse(data));

    });
});

// Establecer puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});