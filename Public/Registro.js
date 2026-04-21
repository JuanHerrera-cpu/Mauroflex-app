// Capturar el formulario
let form = document.getElementById("formRegistro");

form.addEventListener("submit", function(event) {

    // evitar que la pagina se recargue
    event.preventDefault();

    // capturar datos
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let documento = document.getElementById("documento").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let error = document.getElementById("error");

    // validar contraseñas
    if (password !== confirmPassword) {
        error.textContent = "Las contraseñas no coinciden";
        error.style.color = "red";
        return;
    }

    // crear objeto usuario
    let usuario = {
        nombres: nombres,
        apellidos: apellidos,
        documento: documento,
        correo: correo,
        password: password
    };

    // guardar en el navegador
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    // mensaje
    alert("Usuario registrado correctamente");

    // redirigir al login
    window.location.href = "Inicio.html";

});
