// Función encargada de cargar el encabezado del sistema
function cargarHeader() {

    document.getElementById("header").innerHTML = `

    <div style="
        background:#2c2c54;
        color:white;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:15px 30px;
        box-shadow:0px 2px 8px rgba(0,0,0,.2);
    ">

        <div style="
            display:flex;
            align-items:center;
            gap:20px;
        ">

            <img
                src="/img/logo.jpeg"
                width="80"
                style="border-radius:10px;"
            >

            <div>

                <h2 style="margin:0;">
                    Mauroflex
                </h2>

                <p style="margin:0;">
                    Gestión y Confirmación de Pedidos
                </p>

            </div>

        </div>

        <div>

            <button onclick="window.location.href='/menu.html'">
                Inicio
            </button>

            <button onclick="window.location.href='/productos/productos.html'">
                Productos
            </button>

            <button onclick="window.location.href='/carrito.html'">
                Carrito
            </button>

            <button onclick="cerrarSesion()">
                Cerrar sesión
            </button>

        </div>

    </div>

    `;
}

// Cerrar sesión
function cerrarSesion(){

    // Borra la sesión del usuario
    sessionStorage.removeItem("idUsuario");

    sessionStorage.removeItem("usuarioActivo");

    // Vacía el carrito
    localStorage.removeItem("carrito");

    // Regresa al login
    window.location.href="/login.html";

}