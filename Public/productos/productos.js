console.log("JS funcionando");


// 🔥 CONSULTA PRODUCTOS DESDE EL SERVIDOR
fetch("http://localhost:3000/productos")

    // Convierte respuesta a JSON
    .then(res => res.json())

    // Envía datos a la función
    .then(data => {

        console.log("DATOS:", data);

        mostrarProductos(data);
    })

    // Captura errores
    .catch(err => {

        console.error("Error cargando productos:", err);
    });




// 🔥 FUNCIÓN PARA MOSTRAR PRODUCTOS
function mostrarProductos(productos) {

    // Contenedor principal
    const contenedor = document.getElementById("contenedor-productos");

    // Limpia contenido anterior
    contenedor.innerHTML = "";



    // Recorre todos los productos
    productos.forEach(producto => {

        console.log("PRODUCTO:", producto.nombre);

        // 🧠 IMAGEN POR DEFECTO
        let imagen = "/img/Memory.jpeg";


        // Convierte nombre a minúscula
        const nombre = (producto.nombre ?? "").toLowerCase();



        // =========================
        // IMÁGENES SEGÚN COLCHÓN
        // =========================

// 🔥 COLCHÓN MEMORY
if (nombre.includes("memory")) {

    imagen = "/img/Memory.jpeg";
}


// 🔥 SUPER PILLOWTOP
else if (nombre.includes("super")) {

    imagen = "/img/superpillotow.jpeg";
}


// 🔥 CASSATA
else if (nombre.includes("cassata")) {

    imagen = "/img/cassata.jpeg";
}


// 🔥 SEMIORTOPÉDICO
else if (nombre.includes("semi")) {

    imagen = "/img/semiortopedico.jpeg";
}


// 🔥 PILLOWTOP Y RESORTADOS
else if (
    nombre.includes("pillow") ||
    nombre.includes("resortado")
) {

    imagen = "/img/pillotowp.jpeg";
}


        // =========================
        // CREAR TARJETA PRODUCTO
        // =========================

        const card = `

            <div class="card">

                <!-- Imagen -->
                <img src="${imagen}" class="img-producto" alt="producto">


                <!-- Nombre -->
                <h3>${producto.nombre || "Sin nombre"}</h3>


                <!-- Precio -->
                <p>

                    Precio:
                    $<span class="precio-final">

                        ${producto.precio || 0}

                    </span>

                </p>


                <!-- Selector tamaños -->
                <select onchange="cambiarPrecio(this, ${producto.precio || 0})">

                    <option value="1">
                        Sencillo
                    </option>

                    <option value="1.2">
                        Semidoble
                    </option>

                    <option value="1.4">
                        Doble
                    </option>

                    <option value="1.8">
                        Queen
                    </option>

                    <option value="2">
                        King
                    </option>

                </select>


                <!-- Botón comprar -->
                <button onclick="comprar('${producto.nombre}', ${producto.precio})">

                    Comprar

                </button>

            </div>
        `;


        // Agrega tarjeta al contenedor
        contenedor.innerHTML += card;

    });
}




// 🔥 CAMBIAR PRECIO
function cambiarPrecio(select, precioBase) {

    // Obtiene multiplicador
    const factor = parseFloat(select.value);

    // Calcula nuevo precio
    const nuevoPrecio = precioBase * factor;

    // Busca contenedor padre
    const contenedor = select.parentElement;

    // Actualiza precio visualmente
    contenedor.querySelector(".precio-final").innerText =
    nuevoPrecio.toLocaleString("es-CO");
}




// 🛒 SIMULACIÓN DE COMPRA
function comprar(nombre, precio) {

    alert(

        "Compraste: " +
        nombre +
        " | Precio base: $" +
        precio
    );
}