const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const app = express();
const Estudiante = require('./models/Estudiante');


//Middleware
app.use(bodyParser.json());

//Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos2',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch((error) => console.log("Error de conexión a la base de datos", error));

// Rutas
app.post('/api/estudiantes', async (req, res) => {
    const {Nombre, Apellido, CC, Promedio, Cursos} = req.body;
    try {
        const nuevo_Estudiante = new Estudiante({
            Nombre,
            Apellido,
            CC,
            Promedio,
            Cursos
        });
        const estudiante_guardado = await nuevo_Estudiante.save();
        res.status(201).json(estudiante_guardado);
    } catch (error) {
        res.status(400).json({mensaje: "Error al guardar el estudiante", error: error.message});
    }
});

app.get('/api/estudiantes', async (req, res) => {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
});

//Establecer puerto
const port = process.env.port || 6000;
app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});