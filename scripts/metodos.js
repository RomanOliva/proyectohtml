document.addEventListener('DOMContentLoaded', () => {


    const formulario = document.querySelector('form');
    const buscador = document.getElementById('buscador');
    const contenedorItems = document.querySelector('.items');


    if (!formulario || !buscador || !contenedorItems) {
        return;
    }

    function filtrarItems(texto) {
        const textoBusqueda = texto.trim().toLowerCase();
        const items = contenedorItems.querySelectorAll('.item');

        items.forEach(item => {
            const titulo = item.querySelector('h3');
            if (!titulo) return;

            const nombreItem = titulo.textContent.toLowerCase();
            const coincide = nombreItem.includes(textoBusqueda);


            item.style.display = (textoBusqueda === '' || coincide) ? '' : 'none';
        });

        mostrarMensajeSinResultados(textoBusqueda);
    }


    function mostrarMensajeSinResultados(textoBusqueda) {
        let mensaje = document.getElementById('sin-resultados');
        const items = contenedorItems.querySelectorAll('.item');
        const hayVisibles = Array.from(items).some(item => item.style.display !== 'none');

        if (!hayVisibles && textoBusqueda !== '') {
            if (!mensaje) {
                mensaje = document.createElement('p');
                mensaje.id = 'sin-resultados';
                mensaje.textContent = 'No se encontraron items que coincidan con la búsqueda.';
                contenedorItems.appendChild(mensaje);
            }
        } else if (mensaje) {
            mensaje.remove();
        }
    }


    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); 
        filtrarItems(buscador.value);
    });


    buscador.addEventListener('input', () => {
        filtrarItems(buscador.value);
    });

});
