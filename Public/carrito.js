// Obtener carrito almacenado
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Referencias
const tbody = document.querySelector("#tablaCarrito tbody");
const total = document.getElementById("total");

// Mostrar carrito
function mostrarCarrito() {

    tbody.innerHTML = "";

    let totalCompra = 0;

    carrito.forEach((producto, index) => {

        const subtotal = producto.precio * producto.cantidad;

        totalCompra += subtotal;

        tbody.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toLocaleString("es-CO")}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal.toLocaleString("es-CO")}</td>
                <td>
                    <button onclick="eliminarProducto(${index})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    total.innerHTML = `Total: $${totalCompra.toLocaleString("es-CO")}`;
}

// Eliminar producto
function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}

mostrarCarrito();
// Botón confirmar pedido
document.getElementById("confirmar").addEventListener("click", () => {

    if (carrito.length === 0) {

        alert("El carrito está vacío.");

        return;
    }

    fetch("/pedidos", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(carrito)

    })

    .then(res => res.json())

    .then(data => {

        console.log(data);

        alert(data.mensaje);

    })

    .catch(error => {

        console.error(error);

        alert("Error al enviar el pedido.");

    });

});