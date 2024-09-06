window.onload = async function () {// La función se ejecutará cuando la página haya terminado de cargarse
    try {
        // Realiza una solicitud HTTP GET a la ruta /api/data para obtener datos
        const response = await fetch('/api/data');
        // Convierte la respuesta de la solicitud en un objeto JSON
        const data = await response.json();
        // Selecciona el elemento <tbody> dentro de la tabla con el id userTable
        const tbody = document.querySelector('#userTable tbody');

        data.forEach(user => {// Itera sobre cada objeto user en el array data
            const tr = document.createElement('tr');// Crea un nuevo elemento de fila de tabla (<tr>)

            // Crea un nuevo elemento de celda de tabla (<td>) para el ID
            const tdId = document.createElement('td');
            tdId.textContent = user.id; // Asigna el valor del id del usuario a la celda
            tr.appendChild(tdId); // Agrega la celda a la fila

            const tdNombre = document.createElement('td');
            tdNombre.textContent = user.nombre;
            tr.appendChild(tdNombre);

            const tdEmail = document.createElement('td');
            tdEmail.textContent = user.email;
            tr.appendChild(tdEmail);

            tbody.appendChild(tr); // Agrega la fila al <tbody> de la tabla
        });
    } catch (error) {
        // Captura cualquier error que ocurra en el bloque try y lo muestra en la consola
        console.log('Error al obtener los datos:', error);
    }
}