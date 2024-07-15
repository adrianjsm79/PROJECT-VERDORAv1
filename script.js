//MENU DE NAVEGACIÓN
document.addEventListener('DOMContentLoaded', function () {
    const abrirMenu = document.getElementById('abrir-menu');
    const cerrarMenu = document.getElementById('cerrar-menu');
    const navMediaq = document.getElementById('nav-mediaq');

    abrirMenu.addEventListener('click', () => {
        navMediaq.classList.add('active');
    });

    cerrarMenu.addEventListener('click', () => {
        navMediaq.classList.remove('active');
    });
});

//DONAR ARBBOLES
document.addEventListener('DOMContentLoaded', () => {
    const tipoArbolButtons = document.querySelectorAll('.btn-arbol');
    const cantidadInput = document.getElementById('cantidad');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const subtotalInput = document.getElementById('subtotal');

    let tipoArbol = 'Roble';
    let cantidad = 1;
    const precios = {
        'Roble': 20,
        'Manzano': 30,
        'Pino': 25
    };

    tipoArbolButtons.forEach(button => {
        button.addEventListener('click', () => {
            tipoArbolButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tipoArbol = button.getAttribute('data-type');
            actualizarSubtotal();
        });
    });

    increaseButton.addEventListener('click', () => {
        cantidad++;
        cantidadInput.value = cantidad;
        actualizarSubtotal();
    });

    decreaseButton.addEventListener('click', () => {
        if (cantidad > 1) {
            cantidad--;
            cantidadInput.value = cantidad;
            actualizarSubtotal();
        }
    });

    function actualizarSubtotal() {
        const precio = precios[tipoArbol];
        const subtotal = precio * cantidad;
        subtotalInput.value = `S/.${subtotal}`;
    }
});

//COMPRAS
// Función para actualizar la cantidad
function updateQuantity(id, increment) {
    const quantityInput = document.querySelector(`.quantity[data-id='${id}']`);
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity = increment ? currentQuantity + 1 : currentQuantity - 1;
    if (currentQuantity < 1) currentQuantity = 1;
    quantityInput.value = currentQuantity;
}

// Añade eventos a los botones de incremento y decremento
document.querySelectorAll('.increment').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        updateQuantity(id, true);
    });
});

document.querySelectorAll('.decrement').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        updateQuantity(id, false);
    });
});

// Añade evento al botón de "Agregar"
document.querySelectorAll('.btn-agregar').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const quantity = document.querySelector(`.quantity[data-id='${id}']`).value;
        // Redirige a la página de compra con el ID del producto y la cantidad
        window.location.href = `/tarjeta.html?product=${id}&quantity=${quantity}`;
    });
});

//INFO CLIENTES Y CONFIRMAR COMPRA
document.getElementById("formulario-compra").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Mostrar el modal de éxito
    document.getElementById("modal-exito").style.display = "block";

    // Redirigir después de 3 segundos
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
});

window.onclick = function(event) {
    if (event.target == document.getElementById("modal-exito")) {
        document.getElementById("modal-exito").style.display = "none";
        window.location.href = "index.html";
    }
}
