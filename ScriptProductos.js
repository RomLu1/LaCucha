
// PRODUCTOS
const productos = [
    {
        nombre: "¡Chumbale! perros 21KG",
        precio: 15000,
        imagen: "Alimentos/chumbale.jpg"
    },
    {
        nombre: "¡Chumbale! perros 3KG",
        precio: 2200,
        imagen: "Alimentos/chumbale.jpg"
    },
    {
        nombre: "DR.PERROT 20KG",
        precio: 20000,
        imagen: "Alimentos/Dr.perrotAdulto.jpeg.png"
    },
    {
        nombre: "DR.PERROT 3KG",
        precio: 3000,
        imagen: "Alimentos/Dr.perrotAdulto.jpeg.png"
    },
    {
        nombre:"TURBO CAN 3KG",
        precio: 2300,
        imagen: "Alimentos/TurboCanAdulto.jpeg"

    },
    {
        nombre:"TURBO CAN 20KG",
        precio: 0,
        imagen: "Alimentos/TurboCanAdulto.jpeg"

    }
    ,
    {
        nombre:"RAZA 1.5KG",
        precio: 3500,
        imagen: "Alimentos/RazaAdultos.jpeg"

    }
    ,
    {
        nombre:"RAZA bolsa ?KG",
        precio: 0,
        imagen: "Alimentos/RazaAdultos.jpeg"

    }


];

const productosContainer = document.getElementById('productosContainer');

productos.forEach(producto => {
    const card = `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="card" style="width: 100%;">
                <img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio.toLocaleString()}</p>
                    <button class="btn botones" onclick="addToCart('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;
    productosContainer.innerHTML += card;
});
