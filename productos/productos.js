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
        <div>
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}">
         <select onchange="cambiarPrecio(this)">
               <option>Sencillo</option>
               <option>Doble</option>
               <option>Queen</option>
               <option>King</option>
         </select>
        <p style="color:black;">Precio: $0</p> 

        </div>
    `;
});
