// carrito de compras
let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = ''; // Limpia el carrito

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `${item.product} - $${item.price.toFixed(2)} <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">X</button>`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length; // Actualiza el número de productos en el carrito
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. ¡Agrega productos antes de comprar!');
        return;
    }

    let mensaje = 'Hola, este es mi pedido:\n';
    cart.forEach(item => {
        mensaje += `${item.product} - $${item.price.toFixed(2)}\n`;
    });
    mensaje += `Total: $${total.toFixed(2)}`;

    const numeroTelefono = '5491132530607'; // Reemplaza con tu número de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;

    // Redirigir a WhatsApp
    window.open(url, '_blank');
}

