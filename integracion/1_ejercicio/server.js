const express = require('express');
const cors = require('cors'); // Importamos el módulo cors para permitir peticiones desde cualquier origen
const bodyParser = require('body-parser'); // Importamos body-parser para analizar el cuerpo de las solicitudes
const app = express();

app.use(cors()); // Habilitamos el uso de cors
app.use(bodyParser.json()); // Habilitamos el uso de json en las peticiones
app.use(express.static('public')); // Habilitamos el uso de archivos estáticos

// Definimos una ruta de prueba para recibir peticiones del Frontend
app.post('/api/data', (req, res) => {
    const data = req.body; // Obtener datos del body
    console.log('Datos recibidos:', data); // Imprimir datos en consola
    res.json({ message: 'Datos recibidos', receivedData: data }); // Enviar respuesta al frontend
});

// Establecer puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});