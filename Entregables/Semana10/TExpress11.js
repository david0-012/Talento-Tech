// Crea middleware personalizados para manejar diferentes tipos de errores y enviar respuestas informativas al cliente.
// Importaciones
const express = require('express');
const app = express();
const port = 3000;

// Middleware para procesar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal.');
});

app.post('/datos', (req, res, next) => {
    const { nombre, edad } = req.body;
    
    // Validar que el nombre y la edad estén presentes
    if (!nombre || !edad) {
        // Crear un error personalizado si faltan datos
        const error = new Error('Nombre y edad son requeridos');
        error.status = 400;
        return next(error); // Pasar el error al middleware de manejo de errores
    }
    
    res.json({ mensaje: 'Datos recibidos correctamente', nombre, edad });
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error); // Pasar el error al siguiente middleware de errores
});

// Middleware personalizado para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack); // Log del error en la consola
    
    // Establecer el código de estado del error
    res.status(err.status || 500);
    
    // Responder con un mensaje JSON que describa el error
    res.json({
        error: {
            mensaje: err.message,
            status: err.status || 500
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

/*
http://localhost:3000/datos
{
  "nombre": "Juan Pérez",
  "edad": 30
}
 */