document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('form');
    const buscador = document.getElementById('buscador');
    const contenedorItems = document.querySelector('.items');

    if (!formulario || !buscador || !contenedorItems) return;

    const items = [...contenedorItems.querySelectorAll('.item')];

    function filtrarItems(texto) {
        const busqueda = texto.trim().toLowerCase();
        let hayVisibles = false;

        items.forEach(item => {
            const nombre = item.querySelector('h3')?.textContent.toLowerCase() ?? '';
            const visible = busqueda === '' || nombre.includes(busqueda);

            item.style.display = visible ? '' : 'none';
            if (visible) hayVisibles = true;
        });

        let mensaje = document.getElementById('sin-resultados');
        if (!hayVisibles && busqueda !== '' && !mensaje) {
            mensaje = Object.assign(document.createElement('p'), {
                id: 'sin-resultados',
                textContent: 'No se encontraron items que coincidan con la búsqueda.'
            });
            contenedorItems.appendChild(mensaje);
        } else if ((hayVisibles || busqueda === '') && mensaje) {
            mensaje.remove();
        }
    }

    formulario.addEventListener('submit', evento => {
        evento.preventDefault();
        filtrarItems(buscador.value);
    });

    buscador.addEventListener('input', () => filtrarItems(buscador.value));
});
