/*
Middleware.
Implementar un middleware: Crea un middleware que registre información sobre cada solicitud (método, ruta, fecha y hora) en la consola.
Aplicar el middleware: Aplica el middleware a todas las rutas de la aplicación.
Verificar logs: Observa los registros en la consola para confirmar que el middleware se está ejecutando correctamente.
*/
const express = require('express');
const app = express();
const port = 3000;

// Middleware para registrar información sobre cada solicitud
const logger = (req, res, next) => {
    const metodo = req.method;
    const ruta = req.originalUrl;
    const fecha = new Date().toLocaleString();

    console.log(`[${fecha}] ${metodo} ${ruta}`); // Mostrar información en la consola
    next(); // Continuar con la siguiente función (pasar a la ruta correspondiente)
};

// Aplicar el middleware a todas las rutas
app.use(logger);

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la página principal!');
});

app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`¡Hola, ${nombre}!`);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
/*
http://localhost:3000/saludo/Jhonatan
*/