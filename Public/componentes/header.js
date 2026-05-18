// Función encargada de cargar el encabezado del sistema
function cargarHeader() {

    // Inserta dinámicamente el header reutilizable
    document.getElementById("header").innerHTML = `

    <!-- Encabezado principal -->
    <div style="
        background: linear-gradient(180deg,  #2c2c54, #2c2c54);
        color: white;
        display: flex;
        align-items: center;
        padding: 15px 30px;
        gap: 20px;
        box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
    ">

        <!-- Logo empresa -->
        <img 
            src="/img/logo.jpeg" 
            width="80"
            style="
                border-radius: 10px;
            "
        >

        <!-- Nombre del sistema -->
        <div>

            <h2 style="margin:0;">
                Mauroflex
            </h2>

            <p style="margin:0;">
                Gestión y Confirmación de Pedidos
            </p>

        </div>

    </div>

    `;
}