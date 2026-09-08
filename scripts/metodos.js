document.addEventListener('DOMContentLoaded', () => {
 
  
 
    const formulario = document.querySelector('.buscador form');
    const buscador = document.getElementById('buscador');
    const contenedorItems = document.querySelector('.items');
 
    if (formulario && buscador && contenedorItems) {
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
    }
 

 
    const formAuth = document.getElementById('loginillo');
 
    if (formAuth) {
        const contenedorLogin = document.getElementById('contenedor-login');
        const contenedorRegistro = document.getElementById('contenedor-registro');
        const irARegistro = document.getElementById('ir-a-registro');
        const irALogin = document.getElementById('ir-a-login');
 

        irARegistro.addEventListener('click', evento => {
            evento.preventDefault();
            contenedorLogin.hidden = true;
            contenedorRegistro.hidden = false;
        });
 
        irALogin.addEventListener('click', evento => {
            evento.preventDefault();
            contenedorRegistro.hidden = true;
            contenedorLogin.hidden = false;
        });
 
        formAuth.addEventListener('submit', evento => {
            evento.preventDefault();

            if (!contenedorLogin.hidden) {
                const usuario = document.getElementById('usuario-login').value.trim();
                const password = document.getElementById('contraseña-login').value.trim();
                const error = document.getElementById('error-login');
 
                if (usuario === '' || password === '') {
                    error.textContent = 'Debes ingresar usuario y contraseña.';
                    return;
                }
 
                error.textContent = '';
                window.location.href = '../index.html';
 
            } else {
                const correo = document.getElementById('correo-registro').value.trim().toLowerCase();
                const error = document.getElementById('registro-error');
                const exito = document.getElementById('registro-exito');
 
                exito.textContent = '';
 
                if (correo === '') {
                    error.textContent = 'Debes ingresar tu correo.';
                    return;
                }
 
                if (!correo.endsWith('@gmail.com')) {
                    error.textContent = 'El correo debe ser una cuenta de @gmail.com';
                    return;
                }
 
                error.textContent = '';
                exito.textContent = '¡Cuenta creada con éxito! Ya puedes iniciar sesión.';
                formAuth.reset();
            }
        });
    }
 
});
