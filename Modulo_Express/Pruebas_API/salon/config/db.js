const mongoose = require('mongoose'); 

//Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos2',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch((error) => console.log("Error de conexión a la base de datos", error));

module.exports = mongoose;