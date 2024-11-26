document.addEventListener('DOMContentLoaded', () => {
    // Fetch para obtener productos del servidor
    fetch('http://localhost:3000/api/products')
        .then(response => {
            if (!response.ok) throw new Error('Error en la respuesta del servidor');
            return response.json();
        })
        .then(products => {
            const productList = document.getElementById('product-list');

            // Renderizar cada producto
            products.forEach(product => {
                const productHTML = `
                    <div class="col-lg-3 col-sm-6 my-3">
                        <div class="col-12 bg-white text-center h-100 product-item">
                            <div class="row h-100">
                                <div class="col-12 p-0 mb-3">
                                    <a href="#">
                                        <img src="${product.urlImg}" class="img-fluid" alt="${product.name}">
                                    </a>
                                </div>
                                <div class="col-12 mb-3">
                                    <a href="#" class="product-name">${product.name}</a>
                                </div>
                                <div class="col-12 mb-3">
                                    <span class="product-price-old"> $${product.oldPrice}</span><br>
                                    <span class="product-price"> $${product.price}</span>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary btn-agregar">Comprar Ya!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                productList.insertAdjacentHTML('beforeend', productHTML);
            });

            asignarEventosCarrito();
        })
        .catch(error => console.error('Error fetching products:', error));
});

// Función para asignar eventos al carrito
function asignarEventosCarrito() {
    let cantidadCarrito = 0;
    const cartCount = document.getElementById('cart-count');

    document.querySelectorAll('.btn-agregar').forEach(button => {
        button.addEventListener('click', () => {
            cantidadCarrito++;
            cartCount.textContent = cantidadCarrito;
        });
    });
}

// Variables del carrito
let cart = [];
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Abrir el modal del carrito
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    updateCart();
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Agregar productos al carrito
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Actualizar el carrito
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.quantity} x $${item.price}</span>
            </div>
        `;
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

