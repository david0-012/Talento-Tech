//Importaciones
const express = require('express');//Importación del módulo express
const app = express();//Aplicación de express
const port = 3000;//Establecer el puerto de escucha del servidor en el puerto 3000
//** const IP = "192.x.x.x"; //Establecer dirección de mi computadora para acceder a la aplicación desde otro dispositivo ipconfig en cmd

//Aplicación de express
app.get('/', (req, res) => {  // 'app.get': configura una ruta para la página principal ('/') del sitio
    res.send('Hola Mundo');   // 'res.send': envía la respuesta "Hola Mundo" al cliente (el navegador)
});

//Establecer el puerto de escucha del servidor en el puerto 3000
app.listen(port, () => {  // 'app.listen': inicia el servidor y lo configura para que escuche en un puerto (p. ej., 3000)
    console.log(`Servidor escuchando en http://localhost:${port}`);  // 'console.log': imprime un mensaje en la consola cuando el servidor está listo
    // console.log("http://"+ IP +":" + port + "/"); //** Imprime la dirección de mi computadora para acceder a la aplicación desde otro dispositivo
});


