//Importaciones
const mongoose = require('mongoose'); // Biblioteca para conectar con la base de datos MongoDB

//Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/davidDB/estudiantes',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => console.log("Conexión exitosa a la base de datos"))
.catch((error) => console.log("Error de conexión a la base de datos", error));
