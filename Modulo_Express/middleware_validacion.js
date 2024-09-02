const express = require('express'); // Importa express
const {body, validationResult} = require('express-validator'); // Importa la función 'validationResult' del módulo 'express-validator'
const app = express();      // Crea una instancia de express
const port = 3000;          // Establece el puerto 3000

const validationUser = [
    body('nombre').isLength({min: 3}).withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('El email no es válido'),
    body('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
];

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes

app.post('/usuarios', validationUser, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()});
    }
    const user = req.body; // Almacena los datos del usuario en la variable
    console.log(user);
    res.json({mensaje: 'Usuario creado correctamente'});
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});