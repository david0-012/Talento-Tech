const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Importa la configuración de la base de datos
const estudianteRoutes = require('./routes/estudianteRoutes'); // Importa las rutas
const app = express();


//Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/estudiantes',estudianteRoutes);


//Establecer puerto
const port = process.env.port || 6000;
app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});