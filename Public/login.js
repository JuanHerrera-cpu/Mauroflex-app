document.getElementById("formLogin").addEventListener("submit", function(e) {
    e.preventDefault();

    let correo = document.getElementById("correo").value;

    // 💾 guardar sesión
    sessionStorage.setItem("usuarioActivo", correo);

    // 🚀 redirigir
    window.location.href = "menu.html";
});