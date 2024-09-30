/*
Manejo de solicitudes POST.
Crear una ruta POST: Define una ruta POST que reciba datos en el cuerpo de la solicitud.
Procesar los datos: Extrae los datos del cuerpo de la solicitud y realiza alguna acción con ellos (por ejemplo, guardarlos en una base de datos simulada).
Probar con Postman: Envía una solicitud POST con datos en el cuerpo y verifica que se procesen correctamente.
*/
// Importaciones
const express = require('express');
const app = express();
const port = 3000;

//Aplicación de express
app.get('/', (req, res) => {  // 'app.get': configura una ruta para la página principal ('/') del sitio
    res.send('Hola Mundo');   // 'res.send': envía la respuesta "Hola Mundo" al cliente (el navegador)
});

// Middleware para procesar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Simulación de una base de datos como un array
let baseDeDatos = [];

// Ruta POST para recibir datos
app.post('/guardar-datos', (req, res) => {
    // Extraer datos del cuerpo de la solicitud
    const { nombre, edad } = req.body;

    // Validar si los campos están presentes
    if (!nombre || !edad) {
        return res.status(400).json({ error: 'El nombre y la edad son obligatorios.' });
    }

    // Simular guardar en la base de datos
    const nuevoRegistro = {
        id: baseDeDatos.length + 1, // Generar un ID simple
        nombre: nombre,
        edad: edad
    };

    baseDeDatos.push(nuevoRegistro); // Guardar en la base de datos simulada

    // Responder con el registro guardado
    res.json({
        mensaje: 'Datos guardados correctamente',
        registro: nuevoRegistro
    });
});

// Ruta GET para verificar los datos guardados
app.get('/ver-datos', (req, res) => {
    res.json(baseDeDatos);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

/*
http://localhost:3000/guardar-datos
{
  "nombre": "Juan Pérez",
  "edad": 30
}

http://localhost:3000/ver-datos
*/