const mongoose = require("mongoose");

const EstudianteSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Apellido: {
        type: String,
        required: true
    },
    CC: {
        type: Number,
        required: true
    },
    Promedio: {
        type: Number,
        required: true
    },
    Cursos: {
        type: String,
        required: true
    },
    FechaCreacion: {
        type: Date,
        default: Date.now
    }
});

const Estudiante = mongoose.model('Estudiante', EstudianteSchema);
module.exports = Estudiante;