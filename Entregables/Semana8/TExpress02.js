// Crear un programa que simule una calculadora básica, permitiendo al usuario elegir la operación a realizar. La ruta debe ser /calculadora y debe recibir los parámetros operando1, operando2 y operacion.
const express = require('express');
const app = express();
const port = 5000;

//Aplicación de express
app.get('/', (req, res) => {  // 'app.get': configura una ruta para la página principal ('/') del sitio
    res.send('Hola Mundo');   // 'res.send': envía la respuesta "Hola Mundo" al cliente (el navegador)
});

app.get('/calculadora', (req, res) => {
    // Recibir parámetros de la URL
    const operando1 = parseFloat(req.query.operando1);
    const operando2 = parseFloat(req.query.operando2);
    const operacion = req.query.operacion;

    // Verificar que los parámetros existan
    if (isNaN(operando1) || isNaN(operando2) || !operacion) {
        return res.status(400).send('Faltan parámetros o son inválidos');
    }

    let resultado;

    // Realizar la operación según el parámetro recibido
    switch (operacion) {
        case 'suma':
            resultado = operando1 + operando2;
            break;
        case 'resta':
            resultado = operando1 - operando2;
            break;
        case 'multiplicacion':
            resultado = operando1 * operando2;
            break;
        case 'division':
            if (operando2 === 0) {
                return res.status(400).send('No se puede dividir por 0');
            }
            resultado = operando1 / operando2;
            break;
        default:
            return res.status(400).send('Operación no válida');
    }

    // Enviar el resultado al usuario
    res.send(`El resultado de la operación ${operacion} es: ${resultado}`);
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

/*
http://localhost:5000/calculadora?operando1=5&operando2=3&operacion=suma
http://localhost:5000/calculadora?operando1=5&operando2=3&operacion=resta
http://localhost:5000/calculadora?operando1=5&operando2=3&operacion=division
http://localhost:5000/calculadora?operando1=5&operando2=3&operacion=multiplicacion
*/