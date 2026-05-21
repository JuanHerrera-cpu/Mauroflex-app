// 🔥 IMPORTAR HOOKS DE REACT
import { useEffect, useState } from "react";


// 🔥 COMPONENTE PRODUCTOS
function Productos() {

    // 🔥 STATE PARA GUARDAR PRODUCTOS
    const [productos, setProductos] = useState([]);


    // 🔥 CUANDO CARGA LA PÁGINA
    useEffect(() => {

        // 🔥 PETICIÓN AL BACKEND
        fetch("http://localhost:3001/productos")

            .then(res => res.json())

            .then(data => {

                console.log("DATOS:", data);

                // 🔥 GUARDAR PRODUCTOS
                setProductos(data);
            })

            .catch(err => {

                console.log("ERROR:", err);
            });

    }, []);


    // 🔥 RETORNO DEL COMPONENTE
    return (

        <div style={{

            padding: "20px"
        }}>

            {/* TÍTULO */}
            <h2>Productos Mauroflex</h2>


            {/* CONTENEDOR DE CARDS */}
            <div style={{

                display: "flex",

                flexWrap: "wrap",

                gap: "20px",

                marginTop: "20px"
            }}>


                {/* 🔥 RECORRER PRODUCTOS */}
                {productos.map((producto) => (

                    <div

                        key={producto.id}

                        style={{

                            backgroundColor: "white",

                            padding: "20px",

                            borderRadius: "10px",

                            boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",

                            width: "220px"
                        }}
                    >

                        {/* NOMBRE */}
                        <h3>

                            {producto.nombre}

                        </h3>


                        {/* PRECIO */}
                        <p>

                            Precio:
                            ${producto.precio}

                        </p>


                        {/* BOTÓN */}
                        <button>

                            Comprar

                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
}


// 🔥 EXPORTAR COMPONENTE
export default Productos;