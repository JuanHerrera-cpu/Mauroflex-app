const productos = [
    {
        nombre: "Pillowtop",
        imagen: "https://via.placeholder.com/150",
        tamaños: [
            { tipo: "Sencillo", precio: 650000 },
            { tipo: "Doble", precio: 800000 },
            { tipo: "Queen", precio: 900000 },
            { tipo: "King", precio: 1200000 }
        ]
    },
    {
        nombre: "Super Pillowtop",
        imagen: "https://via.placeholder.com/150",
        tamaños: [
            { tipo: "Sencillo", precio: 700000 },
            { tipo: "Doble", precio: 850000 },
            { tipo: "Queen", precio: 950000 },
            { tipo: "King", precio: 1250000 }
        ]
    },
    {
        nombre: "Pillowtop Ortopédico",
        imagen: "https://via.placeholder.com/150",
        tamaños: [
            { tipo: "Sencillo", precio: 850000 },
            { tipo: "Doble", precio: 900000 },
            { tipo: "Queen", precio: 1000000 },
            { tipo: "King", precio: 1300000 }
        ]
    },
    {
        nombre: "Super Pillowtop Ortopédico",
        imagen: "https://via.placeholder.com/150",
        tamaños: [
            { tipo: "Sencillo", precio: 800000 },
            { tipo: "Doble", precio: 950000 },
            { tipo: "Queen", precio: 1050000 },
            { tipo: "King", precio: 1350000 }
        ]
    }
];

const contenedor = document.getElementById("contenedor-productos");

productos.forEach(producto => {
    contenedor.innerHTML += `
        <div class="card">
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}">

            <select onchange="cambiarPrecio(this)">
                <option value="${producto.tamaños[0].precio}">Sencillo</option>
                <option value="${producto.tamaños[1].precio}">Doble</option>
                <option value="${producto.tamaños[2].precio}">Queen</option>
                <option value="${producto.tamaños[3].precio}">King</option>
            </select>

            <p>Precio: $0</p>

            <button onclick="comprar(this)">Comprar</button>
        </div>
    `;
});

function cambiarPrecio(select) {
    let precio = select.value;
    let parrafo = select.nextElementSibling;

    parrafo.textContent = "Precio: $" + precio;
}
function comprar(boton) {

    let card = boton.parentElement;

    let nombre = card.querySelector("h3").textContent;

    let select = card.querySelector("select");
    let tamaño = select.options[select.selectedIndex].text;

    let precio = select.value;

    alert("Compraste: " + nombre + " | Tamaño: " + tamaño + " | Precio: $" + precio);

}