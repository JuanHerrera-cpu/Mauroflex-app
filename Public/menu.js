// esperar a que cargue el HTML
document.addEventListener("DOMContentLoaded", function() {

    // 🔒 Verificar sesión
    let usuario = sessionStorage.getItem("usuarioActivo");

    if (!usuario) {
        window.location.href = "Inicio.html";
    }

    // 🚪 Botón cerrar sesión
    let botonSalir = document.getElementById("logout");

    botonSalir.addEventListener("click", function() {
        sessionStorage.removeItem("usuarioActivo");
        window.location.href = "Inicio.html";
    });

});

