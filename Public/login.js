// 🔥 CAPTURA EL FORMULARIO LOGIN
document.getElementById("formLogin").addEventListener("submit", function(e) {

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


    // Procesa respuesta servidor
    .then(data => {


        // ✅ SI EL LOGIN ES CORRECTO
        if (data.success) {

            // Guarda sesión
            sessionStorage.setItem("usuarioActivo", correo);

            // Redirecciona al menú
            window.location.href = "menu.html";
        }


        // ❌ SI EL LOGIN ES INCORRECTO
        else {

            alert("Correo o contraseña incorrectos");
        }

    })


    // Captura errores
    .catch(err => {

        console.log("Error login:", err);
    });

});