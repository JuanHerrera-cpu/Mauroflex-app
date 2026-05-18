console.log("JS funcionando");

fetch("http://localhost:3000/productos")
    .then(res => res.json())
    .then(data => {
        console.log("DATOS:", data);
        mostrarProductos(data);
    })
    .catch(err => {
        console.error("Error cargando productos:", err);
    });

function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = "";

    productos.forEach(producto => {

        console.log("PRODUCTO:", producto.nombre);

        // 🧠 IMAGEN POR DEFECTO
        let imagen = "/img/Memory.jpeg";

        const nombre = (producto.nombre ?? "").toLowerCase();

        // 🔥 AJUSTADO A TEXTO REAL (MÁS FLEXIBLE)
        if (nombre.includes("memory")) {
            imagen = "/img/Memory.jpeg";
        } 
        else if (nombre.includes("pillow") || nombre.includes("resortado")) {
            imagen = "/img/Pillotow.jpeg";
        } 
        else if (nombre.includes("super")) {
            imagen = "/img/superpillotow.jpeg";
        }

        // 🧱 CREAR CARD
        const card = `
            <div class="card">

                <img src="${imagen}" class="img-producto" alt="producto">

                <h3>${producto.nombre || "Sin nombre"}</h3>

                <p>Precio: $<span class="precio-final">${producto.precio || 0}</span></p>

                <select onchange="cambiarPrecio(this, ${producto.precio || 0})">
                    <option value="1">Sencillo</option>
                    <option value="1.2">Semidoble</option>
                    <option value="1.4">Doble</option>
                    <option value="1.8">Queen</option>
                    <option value="2">King</option>
                </select>

                <button onclick="comprar('${producto.nombre}', ${producto.precio})">
                    Comprar
                </button>

            </div>
        `;

        contenedor.innerHTML += card;
    });
}

// 🔥 CAMBIAR PRECIO
function cambiarPrecio(select, precioBase) {
    const factor = parseFloat(select.value);
    const nuevoPrecio = precioBase * factor;

    const contenedor = select.parentElement;
    contenedor.querySelector(".precio-final").innerText = nuevoPrecio.toFixed(2);
}

// 🛒 SIMULACIÓN DE COMPRA
function comprar(nombre, precio) {
    alert("Compraste: " + nombre + " | Precio base: $" + precio);
}