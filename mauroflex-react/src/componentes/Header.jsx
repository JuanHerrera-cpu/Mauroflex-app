// 🔥 IMPORTAR LOGO
import logo from "../img/logo.jpeg";
// 🔥 COMPONENTE HEADER

function Header() {

    // LO QUE RETORNA EL COMPONENTE
    return (

        // CONTENEDOR PRINCIPAL
        <header style={{

            backgroundColor: "#2f2a63",

            color: "white",

            padding: "20px",

            display: "flex",

            alignItems: "center",

            gap: "15px"
        }}>

            {/* LOGO */}
            <img

                src={logo}

                alt="logo"

                style={{

    width: "80px",

    height: "80px",

    borderRadius: "50%"
}}
            />


            {/* TEXTOS */}
            <div>

                <h1>Mauroflex</h1>

                <p>
                    Gestión y Confirmación de Pedidos
                </p>

            </div>

        </header>
    );
}


// 🔥 EXPORTA EL COMPONENTE
export default Header;