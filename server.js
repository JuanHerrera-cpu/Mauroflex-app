const mysql = require("mysql2");
const express = require("express");
const path = require("path");

const app = express();

// 🧠 MIDDLEWARE PRIMERO (IMPORTANTE)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🧠 ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, "Public")));

// 🧠 CONEXIÓN DB
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Isabela01*", 
    database: "mauroflex"
});

conexion.connect(err => {
    if (err) {
        console.log("Error de conexión:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});

// 🧠 RUTA PRINCIPAL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "login.html"));
});

// 🧠 API PRODUCTOS
app.get("/productos", (req, res) => {
    conexion.query("SELECT * FROM productos", (err, resultados) => {
        if (err) {
            console.log("Error en query:", err);
            return res.status(500).send("Error en la base de datos");
        }
        res.json(resultados);
    });
});

// 🧠 REGISTRO REAL
app.post("/registro", (req, res) => {
    const { nombre, apellido, correo, clave } = req.body;

    const sql = "INSERT INTO usuarios (nombre, apellido, correo, clave) VALUES (?, ?, ?, ?)";

    conexion.query(sql, [nombre, apellido, correo, clave], (err, resultado) => {
        if (err) {
            console.log("Error al registrar:", err);
            return res.send("Error al registrar");
        }

        console.log("Usuario guardado en DB");
        res.redirect("/login.html");
    });
});

// 🧠 SERVIDOR AL FINAL
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});