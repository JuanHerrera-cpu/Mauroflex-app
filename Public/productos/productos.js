console.log("JS funcionando");
// ======================================
// CARRITO DE COMPRAS
// ======================================

// Recupera el carrito guardado o crea uno nuevo si no existe
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// 🔥 CONSULTA PRODUCTOS DESDE EL SERVIDOR
fetch("http://localhost:3001/productos")

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
const precios = {
    precio100: producto.precio100,
    precio120: producto.precio120,
    precio140: producto.precio140,
    precio160: producto.precio160,
    precio200: producto.precio200
};
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

        ${producto.precio100.toLocaleString("es-CO")}

    </span>

</p>

<select onchange='cambiarPrecio(this, ${JSON.stringify(precios)})'>

    <option value="precio100">100 x 190</option>

    <option value="precio120">120 x 190</option>

    <option value="precio140">140 x 190</option>

    <option value="precio160">160 x 190</option>

    <option value="precio200">200 x 200</option>

</select>

                <!-- Botón comprar -->
               <button onclick='comprar("${producto.nombre}", ${JSON.stringify(precios)}, this)'>

                    Agregar al carrito

                </button>

            </div>
        `;


        // Agrega tarjeta al contenedor
        contenedor.innerHTML += card;

    });
}




// 🔥 CAMBIAR PRECIO
function cambiarPrecio(select, precios) {

    // Obtiene la medida seleccionada
    const medida = select.value;

    // Busca el precio correspondiente
    const nuevoPrecio = precios[medida];

    // Busca el contenedor de la tarjeta
    const contenedor = select.parentElement;

    // Actualiza el precio mostrado
    contenedor.querySelector(".precio-final").innerText =
        Number(nuevoPrecio).toLocaleString("es-CO");
}
// 🛒 AGREGAR PRODUCTOS AL CARRITO
function comprar(nombre, precios, boton) {

    // Busca el select de la tarjeta
    const tarjeta = boton.parentElement;

    const select = tarjeta.querySelector("select");

    // Medida seleccionada
    const medida = select.value;

    // Precio correspondiente
    const precio = precios[medida];

    // Busca si ya existe en el carrito
    const productoExistente = carrito.find(
        producto =>
            producto.nombre === nombre &&
            producto.medida === medida
    );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            nombre: nombre,

            medida: medida,

            precio: precio,

            cantidad: 1

        });

    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    console.log(carrito);

    alert(nombre + " agregado al carrito.");

}