function mostrarImagenes(indice) {
    const galeria = document.getElementById('galeria');
    const tarjetas = galeria.querySelectorAll('.card');

    tarjetas.forEach((tarjeta) => {
        tarjeta.style.display = 'block'; // Mostrar todas las tarjetas
    });

    // Ocultar las tarjetas que no corresponden al botón seleccionado
    const tarjetasNoCorrespondientes = galeria.querySelectorAll(`.card:not([data-boton="${indice}"])`);
    tarjetasNoCorrespondientes.forEach((tarjeta) => {
        tarjeta.style.display = 'none';
    });
}

// Manejar clics fuera de los botones para mostrar todas las tarjetas
document.addEventListener('click', (event) => {
    const galeria = document.getElementById('galeria');
    const tarjetas = galeria.querySelectorAll('.card');

    if (!event.target.classList.contains('boton')) {
        tarjetas.forEach((tarjeta) => {
            tarjeta.style.display = 'block'; // Mostrar todas las tarjetas
        });
    }
});