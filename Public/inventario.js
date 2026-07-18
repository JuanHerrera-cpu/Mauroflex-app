// ================================
// CARGAR INVENTARIO AL ABRIR
// ================================
window.onload = cargarInventario;


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

                celdaNombre.innerText = producto.nombre;
                celdaStock.innerText = producto.cantidad;
                celdaPrecio.innerText = "$" + producto.precio;

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
// AGREGAR PRODUCTO
// ================================
function agregarProducto() {

    let nombre = document.getElementById("producto").value;

    let cantidad = document.getElementById("stock").value;

    let precio = document.getElementById("precio").value;


    if (nombre === "" || cantidad === "" || precio === "") {

        alert("Debe completar todos los campos");

        return;

    }


    fetch("http://localhost:3001/inventario", {

        method: "POST",

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

        cargarInventario();

    })

    .catch(error => {

        console.log(error);

    });

}