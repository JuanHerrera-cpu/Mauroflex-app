// ================================
// CARGAR INVENTARIO AL ABRIR
// ================================
window.onload = cargarInventario;

// ================================
// PRODUCTO EN EDICIÓN
// ================================
let idEditar = null;

// ================================
// CONSULTAR INVENTARIO
// ================================
function cargarInventario() {

    fetch("http://localhost:3001/inventario")

        .then(res => res.json())

        .then(productos => {

            let tabla = document.getElementById("tablaInventario");

            tabla.innerHTML = "";

            productos.forEach(producto => {

                let fila = tabla.insertRow();

                let celdaNombre = fila.insertCell(0);
                let celdaStock = fila.insertCell(1);
                let celdaPrecio = fila.insertCell(2);
                let celdaAcciones = fila.insertCell(3);

                celdaNombre.innerText = producto.nombre;
                celdaStock.innerText = producto.cantidad;
                celdaPrecio.innerText = "$" + producto.precio;

                celdaAcciones.innerHTML = `
                    <button class="btn-editar"
                        onclick="editarProducto(${producto.id})">
                        ✏️
                    </button>

                    <button class="btn-eliminar"
                        onclick="eliminarProducto(${producto.id})">
                        🗑️
                    </button>
                `;

                if (producto.cantidad <= 10) {

                    celdaStock.style.color = "red";
                    celdaStock.style.fontWeight = "bold";

                }

            });

        })

        .catch(error => {

            console.log(error);

        });

}

// ================================
// AGREGAR / ACTUALIZAR PRODUCTO
// ================================
function agregarProducto() {

    let nombre = document.getElementById("producto").value;
    let cantidad = document.getElementById("stock").value;
    let precio = document.getElementById("precio").value;

    if (nombre === "" || cantidad === "" || precio === "") {

        alert("Debe completar todos los campos");
        return;

    }

   
    

    // ================================
// DEFINIR SI ES AGREGAR O ACTUALIZAR
// ================================
let url = "http://localhost:3001/inventario";

let metodo = "POST";

if (idEditar !== null) {

    url = "http://localhost:3001/inventario/" + idEditar;

    metodo = "PUT";

}

fetch(url, {

    method: metodo,

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            nombre: nombre,
            cantidad: cantidad,
            precio: precio

        })

    })

.then(res => res.json())

.then(data => {

    alert(data.mensaje);

    document.getElementById("producto").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("precio").value = "";

    // Volver al modo Agregar
    idEditar = null;

    document.querySelector("button").innerText = "Agregar Producto";

    cargarInventario();

})
    

    .catch(error => {

        console.log(error);

    });

}

// ================================
// EDITAR PRODUCTO
// ================================
function editarProducto(id){

    fetch("http://localhost:3001/inventario")

    .then(res => res.json())

    .then(productos => {

        const producto = productos.find(p => p.id == id);

        idEditar = id;

        document.getElementById("producto").value = producto.nombre;
        document.getElementById("stock").value = producto.cantidad;
        document.getElementById("precio").value = producto.precio;

        document.querySelector("button").innerText = "Actualizar Producto";

    });

}

// ================================
// ELIMINAR PRODUCTO
// ================================
function eliminarProducto(id){

    if(confirm("¿Está seguro de eliminar este producto?")){

        fetch("http://localhost:3001/inventario/" + id, {

            method: "DELETE"

        })

        .then(res => res.json())

        .then(data => {

            alert(data.mensaje);

            cargarInventario();

        })

        .catch(error => {

            console.log(error);

        });

    }

}