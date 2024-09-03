const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();
const port = 3000;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/estudiantesS', cursoRoutes);

//Establecer puerto
app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
}
);