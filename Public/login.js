document.getElementById("formLogin").addEventListener("submit", async function (e) {
    e.preventDefault();

    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ correo, clave })
    });

    const data = await res.json();

    if (data.success) {
        sessionStorage.setItem("usuarioActivo", correo);
        window.location.href = "menu.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});