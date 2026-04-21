// esta función se ejecuta cuando presionas el botón AGREGAR
function agregarProducto() {

    // 1️⃣ Capturamos lo que escribe el usuario
    let nombre = document.getElementById("producto").value;
    let stock = document.getElementById("stock").value;
    let precio = document.getElementById("precio").value;

    // 2️⃣ Validamos que no esté vacío
    if (nombre === "" || stock === "" || precio === "") {
        alert("Debe completar todos los campos");
        return; // detiene la función
    }

    // 3️⃣ Buscamos el cuerpo de la tabla
    let tabla = document.getElementById("tablaInventario");

    // 4️⃣ Creamos una nueva fila
    let fila = tabla.insertRow();

    // 5️⃣ Creamos las celdas
    let celdaNombre = fila.insertCell(0);
    let celdaStock = fila.insertCell(1);
    let celdaPrecio = fila.insertCell(2);

    // 6️⃣ Colocamos los datos dentro
    celdaNombre.innerText = nombre;
    celdaStock.innerText = stock;
    celdaPrecio.innerText = "$" + precio;

    // 7️⃣ Si el stock es bajo lo ponemos rojo
    if (stock <= 10) {
        celdaStock.style.color = "red";
        celdaStock.style.fontWeight = "bold";
    }

    // 8️⃣ Limpiamos los campos
    document.getElementById("producto").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("precio").value = "";
}
