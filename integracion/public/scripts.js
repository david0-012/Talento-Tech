document.getElementById("dataForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const name = document.getElementById("name").value; // Obtiene el valor del input con el valor 'name'
    
    //Enviar peticion POST a la ruta /api/data con los datos del formulario
    const response = await fetch('/api/data',{
        method: 'POST', // Indica método de la petición
        headers: { // Indica el tipo de contenido que se envía en el cuerpo
            'Content-Type': 'application/json' // Indica que se envía un objeto JSON
        },
        body: JSON.stringify({name}) // Convierte el objeto a un string
    });
    const result = await response.json(); // Convierte la respuesta a un objeto JSON
    //! document.getElementById('responseMessage').textContent = result.message; // Muestra el mensaje de respuesta en el HTML
    document.getElementById('responseMessage').textContent = `${result.message}: ${JSON.stringify(result.receivedData)}`;
});
