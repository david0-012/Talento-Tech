const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Habilitamos el uso de archivos estáticos

// Ruta para la página principal
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
});


// Ruta para el quiz
app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/quiz.html'));
});



// Establecer puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});