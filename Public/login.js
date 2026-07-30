// 🔥 CAPTURA EL FORMULARIO LOGIN
document.getElementById("formLogin").addEventListener("submit", function (e) {

    // Evita que la página se recargue
    e.preventDefault();

    // =========================
    // OBTENER DATOS DEL FORMULARIO
    // =========================

    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    // =========================
    // ENVIAR DATOS AL SERVIDOR
    // =========================

    fetch("/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            correo: correo,
            clave: clave
        })

    })

    // Convierte respuesta a JSON
    .then(res => res.json())

    // Procesa respuesta del servidor
    .then(data => {

        if (data.success) {

            // Guarda el id del usuario
            sessionStorage.setItem("idUsuario", data.id);

            // Guarda el correo
            sessionStorage.setItem("usuarioActivo", data.correo);
            console.log("Bienvenido:", data.correo);

            window.location.href = "menu.html";

        } else {

            alert("Usuario o contraseña incorrectos");

        }

    })

    // Captura errores
    .catch(err => {

        console.log("Error login:", err);

    });

});