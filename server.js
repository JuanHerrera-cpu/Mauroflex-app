const express = require("express");
const path = require("path");

const app = express();

// 👇 PRIMERO la ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "Inicio.html"));
});

// 👇 DESPUÉS static
app.use(express.static(path.join(__dirname, "Public")));

// API
app.get("/productos", (req, res) => {
    res.json([
        { nombre: "Semiortopedico resortado", precio: 650000 },
        { nombre: "Ortopedico cassata", precio: 700000 },
        { nombre: "Resortado pillotow", precio: 850000 },
        { nombre: "Cassata pillotow", precio: 900000 },
        { nombre: "Resortado superpillotow", precio: 1200000 },
        { nombre: "Superpillotow cassata", precio: 1500000 }
    ]);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});