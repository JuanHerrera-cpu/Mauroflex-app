const mysql = require("mysql2");
const express = require("express");
const path = require("path");

const app = express();

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

// ✅ STATIC PRIMERO
app.use(express.static(path.join(__dirname, "Public")));

// ✅ LUEGO RUTA
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "login.html"));
});

// API
app.get("/productos", (req, res) => {
    conexion.query("SELECT * FROM productos", (err, resultados) => {
        if (err) {
            console.log("Error en query:", err);
            return res.status(500).send("Error en la base de datos");
        }
        res.json(resultados);
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});