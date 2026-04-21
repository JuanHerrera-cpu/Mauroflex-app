console.log("JS funcionando");

fetch("http://localhost:3000/productos")
    .then(res => res.json())
    .then(data => {
        mostrarProductos(data);
    });

function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        contenedor.innerHTML += `
            <div class="card">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button onclick="comprar('${producto.nombre}', ${producto.precio})">
                    Comprar
                </button>
            </div>
        `;
    });
}

function comprar(nombre, precio) {
    alert("Compraste: " + nombre + " | Precio: $" + precio);
}