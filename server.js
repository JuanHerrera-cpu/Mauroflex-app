const mysql = require("mysql2");

const express = require("express");

// 🔥 IMPORTAR CORS
const cors = require("cors");

const path = require("path");


// 🔥 CREA LA APLICACIÓN EXPRESS
const app = express();


// 🔥 ACTIVAR CORS
app.use(cors());


// =========================
// MIDDLEWARES
// =========================

// Permite recibir datos JSON
app.use(express.json());


// Permite leer formularios HTML
app.use(express.urlencoded({ extended: true }));


// Permite usar archivos estáticos
// como HTML, CSS, JS e imágenes
app.use(express.static(path.join(__dirname, "Public")));




// =========================
// CONEXIÓN MYSQL
// =========================

const conexion = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "Isabela01*",

    database: "mauroflex"
});




// 🔥 VERIFICAR CONEXIÓN
conexion.connect(err => {

    // Si hay error
    if (err) {

        console.log("Error de conexión:", err);
    }

    // Si conecta correctamente
    else {

        console.log("Conectado a MySQL");
    }
});




// =========================
// RUTA PRINCIPAL
// =========================

// Abre login automáticamente
app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "Public", "login.html")
    );
});




// =========================
// API PRODUCTOS
// =========================


// 🔥 OBTENER PRODUCTOS
app.get("/productos", (req, res) => {

    conexion.query(

        "SELECT * FROM productos",

        (err, resultados) => {

            // Error consulta
            if (err) {

                console.log("Error en query:", err);

                return res
                    .status(500)
                    .send("Error en la base de datos");
            }

            // Envía productos al frontend
            res.json(resultados);
        }
    );
});




// 🔥 CREAR PRODUCTO
app.post("/productos", (req, res) => {

    // 🔥 DATOS DEL BODY
    const { nombre, precio } = req.body;


    // 🔥 SQL
    const sql = `
    
        INSERT INTO productos(nombre, precio)
        
        VALUES (?, ?)
    `;


    // 🔥 EJECUTAR QUERY
    conexion.query(

        sql,

        [nombre, precio],

        (err, resultado) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    error: "Error al crear producto"
                });
            }


            // 🔥 RESPUESTA JSON
            res.json({

                mensaje: "Producto creado correctamente",

                id: resultado.insertId
            });
        }
    );
});




// 🔥 ELIMINAR PRODUCTO
app.delete("/productos/:id", (req, res) => {

    // 🔥 OBTENER ID
    const id = req.params.id;


    // 🔥 SQL
    const sql = `
    
        DELETE FROM productos
        
        WHERE id = ?
    `;


    // 🔥 EJECUTAR
    conexion.query(

        sql,

        [id],

        (err, resultado) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    error: "Error al eliminar producto"
                });
            }


            // 🔥 RESPUESTA
            res.json({

                mensaje: "Producto eliminado correctamente"
            });
        }
    );
});
// 🔥 ACTUALIZAR PRODUCTO
app.put("/productos/:id", (req, res) => {

    // 🔥 OBTENER ID
    const id = req.params.id;


    // 🔥 OBTENER DATOS
    const { nombre, precio } = req.body;


    // 🔥 SQL
    const sql = `
    
        UPDATE productos
        
        SET nombre = ?, precio = ?
        
        WHERE id = ?
    `;


    // 🔥 EJECUTAR
    conexion.query(

        sql,

        [nombre, precio, id],

        (err, resultado) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    error: "Error al actualizar producto"
                });
            }


            // 🔥 RESPUESTA
            res.json({

                mensaje: "Producto actualizado correctamente"
            });
        }
    );
});



// =========================
// REGISTRO USUARIOS
// =========================

// Guarda usuarios en MySQL
app.post("/registro", (req, res) => {

    // Obtiene datos formulario
    const {
        nombre,
        apellido,
        correo,
        clave

    } = req.body;


    // Consulta SQL
    const sql =

        "INSERT INTO usuarios (nombre, apellido, correo, clave) VALUES (?, ?, ?, ?)";


    // Ejecuta inserción
    conexion.query(

        sql,

        [nombre, apellido, correo, clave],

        (err, resultado) => {

            // Error registro
            if (err) {

                console.log("Error al registrar:", err);

                return res.send("Error al registrar");
            }


            // Registro exitoso
            console.log("Usuario guardado en DB");


            // Regresa al login
            res.redirect("/login.html");
        }
    );
});




// =========================
// LOGIN REAL
// =========================

// Valida usuario en MySQL
app.post("/login", (req, res) => {

    // Obtiene datos enviados desde login.js
    const {

        correo,
        clave

    } = req.body;


    // Consulta SQL login
    const sql =

        "SELECT * FROM usuarios WHERE correo = ? AND clave = ?";


    // Ejecuta consulta
    conexion.query(

        sql,

        [correo, clave],

        (err, resultados) => {

            // Error servidor
            if (err) {

                console.log("Error login:", err);

                return res.json({

                    success: false
                });
            }


            // ✅ Usuario encontrado
            if (resultados.length > 0) {

                res.json({

                    success: true
                });
            }


            // ❌ Usuario incorrecto
            else {

                res.json({

                    success: false
                });
            }
        }
    );
});




// =========================
// SERVIDOR
// =========================

// Inicia servidor puerto 3001
app.listen(3001, () => {

    console.log("Servidor corriendo en puerto 3001");
});