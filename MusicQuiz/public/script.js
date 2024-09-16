function mostrarConfirmacion(genero) {
    document.getElementById('confirmacion-mensaje').textContent = `Realizarás el quiz de ${genero.charAt(0).toUpperCase() + genero.slice(1)} para probar qué tanto sabes sobre él. ¡Suerte!`;
    document.getElementById('confirmacion').style.display = 'block';
    
    document.getElementById('confirmar-boton').onclick = function() {
        window.location.href = `/quiz?genero=${genero}`;
    };
}

function cerrarConfirmacion() {
    document.getElementById('confirmacion').style.display = 'none';
}
// Código para la página de quiz
document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const genero = queryParams.get('genero');

    const tituloQuiz = document.getElementById('titulo-quiz');
    const contenedorPreguntas = document.getElementById('contenedor-preguntas');
    const formulario = document.getElementById('quiz-form');
    const resultado = document.getElementById('resultado');
    const resultadoMensaje = document.getElementById('resultado-mensaje');
    const botonEnviar = document.getElementById('enviar-respuestas');

    if (genero) {
        tituloQuiz.textContent = `Quiz de ${genero.charAt(0).toUpperCase() + genero.slice(1)}`;

        const preguntas = obtenerPreguntas(genero);

        preguntas.forEach((pregunta, index) => {
            const preguntaElement = document.createElement('div');
            preguntaElement.className = 'pregunta';
            preguntaElement.innerHTML = `
                <h3>Pregunta ${index + 1}</h3>
                <p>${pregunta.texto}</p>
                ${pregunta.opciones.map((opcion, i) => `
                    <div>
                        <input type="radio" id="opcion${index}-${i}" name="pregunta${index}" value="${opcion}">
                        <label for="opcion${index}-${i}">${opcion}</label>
                    </div>
                `).join('')}
            `;
            contenedorPreguntas.appendChild(preguntaElement);
        });

        botonEnviar.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el envío del formulario

            // Obtén las respuestas del formulario
            const respuestas = [];
            preguntas.forEach((pregunta, index) => {
                const seleccion = document.querySelector(`input[name="pregunta${index}"]:checked`);
                respuestas.push(seleccion ? seleccion.value : null);
            });

            // Calcula el puntaje
            const respuestasCorrectas = preguntas.map(p => p.opciones[0]); // Supongamos que la primera opción es la correcta
            let puntaje = 0;
            respuestas.forEach((respuesta, index) => {
                if (respuesta === respuestasCorrectas[index]) {
                    puntaje++;
                }
            });

            // Muestra el resultado
            resultadoMensaje.textContent = `Has respondido ${puntaje} de ${preguntas.length} preguntas correctamente.`;
            resultado.style.display = 'block';

            // Deshabilita el formulario y los botones para evitar cambios
            formulario.querySelectorAll('input, button').forEach(el => el.disabled = true);
            botonEnviar.disabled = true;
        });
    } else {
        tituloQuiz.textContent = 'No se ha seleccionado un género';
    }
});

function obtenerPreguntas(genero) {
    const preguntas = {
        rock: [
            { texto: '¿Quién es el cantante principal de Queen?', opciones: ['Freddie Mercury', 'Robert Plant', 'Mick Jagger'] },
            { texto: '¿Cuál es el álbum más famoso de Nirvana?', opciones: ['Nevermind', 'In Utero', 'Bleach'] }
        ],
        pop: [
            { texto: '¿Quién cantó "Thriller"?', opciones: ['Michael Jackson', 'Madonna', 'Prince'] },
            { texto: '¿Qué álbum es conocido como "el álbum blanco"?', opciones: ['The Beatles', 'Abbey Road', 'Let It Be'] }
        ],
        jazz: [
            { texto: '¿Quién es conocido como el "rey del jazz"?', opciones: ['Louis Armstrong', 'Duke Ellington', 'Charlie Parker'] },
            { texto: '¿Qué instrumento es fundamental en el jazz?', opciones: ['Saxofón', 'Guitarra', 'Violín'] }
        ]
    };

    return preguntas[genero] || [];
}
