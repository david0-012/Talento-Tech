const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const app = express();
const Dato = require('./models/Dato');


//Middleware
app.use(bodyParser.json());


//Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch((error) => console.log("Error de conexión a la base de datos", error));

// Rutas
app.post('/api/datos', async (req, res) => {
    const {nombre, valor} = req.body;
    try {
        const nuevo_Dato = new Dato({
            nombre,
            valor
        });
        const dato_guardado = await nuevo_Dato.save();
        res.status(201).json(dato_guardado);
    } catch (error) {
        res.status(400).json({mensaje: "Error al guardar el dato", error: error.message});
    }
});

app.get('/api/datos', async (req, res) => {
        const datos = await Dato.find();
        res.json(datos);
});



//Establecer puerto
const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});