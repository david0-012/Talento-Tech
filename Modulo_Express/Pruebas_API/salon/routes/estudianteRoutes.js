const express = require('express');
const Estudiante = require('../models/Estudiante');
const router = express.Router();

// Rutas
router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
});

module.exports = router;