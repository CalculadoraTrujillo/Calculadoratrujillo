const boton = document.getElementById('mi-boton');
const contenedorInput = document.getElementById('contenedor-input');
const inputBuscador = document.getElementById('input-buscador');
const resultados = document.getElementById('resultados');
const maxResultados = 6; // Máximo 6 resultados a mostrar
let resultadosPrevios = [];
let resultadosAbiertos = false;
let resultadoActivoIndex = -1;

// Datos de resultados ficticios
const datosResultados = [
    { nombre: "Piso-Bakurah-gris", enlace: "#Piso-Bakurah-gris" },
    { nombre: "Resultado 2", enlace: "#resultado2" },
    { nombre: "Resultado 3", enlace: "#resultado3" },
    { nombre: "Resultado 4", enlace: "#resultado4" },
    { nombre: "Resultado 5", enlace: "#resultado5" },
    { nombre: "Resultado 6", enlace: "#resultado6" },
    { nombre: "Resultado 7", enlace: "#resultado7" },
    { nombre: "Resultado 8", enlace: "#resultado8" },
    { nombre: "Resultado 9", enlace: "#resultado9" },
    { nombre: "Resultado 10", enlace: "#resultado10" },
    { nombre: "Resultado 11", enlace: "#resultado11" },
    { nombre: "Resultado 12", enlace: "#resultado12" }
];

boton.addEventListener('click', function(event) {
    if (!resultadosAbiertos) {
        contenedorInput.style.display = 'block';
        inputBuscador.focus(); // Enfocar el input al mostrarlo

        // Restaurar resultados previos si existen
        if (resultadosPrevios.length > 0) {
            resultados.innerHTML = resultadosPrevios.join('');
            resultados.style.display = 'block';
        }
    } else {
        contenedorInput.style.display = 'none';
        resultados.style.display = 'none'; // Ocultar resultados al ocultar el input
    }
    resultadosAbiertos = !resultadosAbiertos;
    event.stopPropagation(); // Evitar que el clic llegue al documento
});

inputBuscador.addEventListener('input', function() {
    const query = inputBuscador.value.toLowerCase();
    
    // Realizar una búsqueda basada en la similitud con errores tipográficos
    const resultadosCoincidentes = datosResultados.sort((a, b) => {
        const similitudA = calcularSimilitud(query, a.nombre.toLowerCase());
        const similitudB = calcularSimilitud(query, b.nombre.toLowerCase());
        return similitudB - similitudA;
    });

    // Mostrar los resultados limitados
    resultados.innerHTML = resultadosCoincidentes.slice(0, maxResultados).map((resultado, index) => `<a href="${resultado.enlace}" data-index="${index}">${resultado.nombre}</a>`).join('');
    resultados.style.display = resultadosCoincidentes.length > 0 ? 'block' : 'none';
    resultadoActivoIndex = -1; // Reiniciar el índice del resultado activo
});

inputBuscador.addEventListener('keydown', function(event) {
    if (resultados.style.display === 'block') {
        const teclaPresionada = event.key;

        if (teclaPresionada === 'ArrowUp' && resultadoActivoIndex > 0) {
            resultadoActivoIndex--;
            actualizarResultadoActivo();
            event.preventDefault();
        } else if (teclaPresionada === 'ArrowDown' && resultadoActivoIndex < maxResultados - 1 && resultadoActivoIndex < resultados.children.length - 1) {
            resultadoActivoIndex++;
            actualizarResultadoActivo();
            event.preventDefault();
        } else if (teclaPresionada === 'Enter' && resultadoActivoIndex >= 0) {
            const enlaceResultado = resultados.children[resultadoActivoIndex].getAttribute('href');
            if (enlaceResultado.startsWith("#")) {
                // Si el enlace comienza con "#" (ancla), scroll a ese anclaje
                const destinoAncla = document.querySelector(enlaceResultado);
                if (destinoAncla) {
                    destinoAncla.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Si no comienza con "#", redireccionar a la URL
                window.location.href = enlaceResultado;
            }
            event.preventDefault();
        }
    }
});

function actualizarResultadoActivo() {
    const enlacesResultados = resultados.querySelectorAll('a');
    enlacesResultados.forEach((enlace, index) => {
        if (index === resultadoActivoIndex) {
            enlace.classList.add('resultado-activo');
        } else {
            enlace.classList.remove('resultado-activo');
        }
    });
}

// Cerrar los resultados al hacer clic fuera de ellos
document.addEventListener('click', function(event) {
    if (!contenedorInput.contains(event.target)) {
        resultados.style.display = 'none';
        resultadosAbiertos = false;
    }
});

// Función para calcular la similitud de Jaccard entre dos cadenas
function calcularSimilitud(str1, str2) {
    const set1 = new Set(str1);
    const set2 = new Set(str2);
    const interseccion = [...set1].filter(char => set2.has(char));
    const union = new Set([...set1, ...set2]);
    return interseccion.length / union.size;
}