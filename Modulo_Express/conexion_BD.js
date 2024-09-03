//Importaciones
// npm install body-parser mongoose
const mongoose = require('mongoose'); // Biblioteca para conectar con la base de datos MongoDB
const bodyParser = require('body-parser'); // Permite leer los datos de las peticiones entrantes
const express = require('express');//Importación del módulo express

const app = express();//Aplicación de express
const port = 3000;//Establecer el puerto de escucha del servidor en el puerto 3000

//Middleware
app.use(bodyParser.json()); // Permite leer los datos de las peticiones entrantes

//Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/davidDB/estudiantes',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once("open",()=>{
    console.log("Conexión exitosa a la base de datos");
}
);

//Aplicación de express
app.get('/', (req, res) => {  
    res.send('Prueba de conexión a MongoDB');
}
);

//Establecer puerto
app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
}
);