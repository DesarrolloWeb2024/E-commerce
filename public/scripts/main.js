document.addEventListener('DOMContentLoaded', () => {
    // Hacer una solicitud GET al servidor para obtener la información de productos
    try {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(products => {
            // Manipular los datos en el frontend, por ejemplo, mostrarlos en la lista
            const productList = document.getElementById('product-list');
  
            products.forEach(product => {
                const listItem = document.createElement('div');
                listItem.classList.add('col-lg-3','col-sm-6','my-3');
                listItem.innerHTML = 
                                    `
                                        <div class='col-12 bg-white text-center h-100 product-item'>
                                            <div class='row h-100'>
                                                <div class='col-12 p-0 mb-3'>
                                                    <a href="#">
                                                        <img src="${product.urlImg}" class="img-fluid">
                                                    </a>
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <a href="#" class="product-name">${product.name}</a>
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <span class="product-price-old">
                                                    $${product.oldPrice}
                                                    </span>
                                                    <br>
                                                    <span class="product-price">
                                                    $${product.price}
                                                    </span>
                                                </div>
                                                <div class="col-12 mb-3 align-self-end">
                                                    <button class="btn btn-outline-dark add-to-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.urlImg}"><i class="fas fa-cart-plus me-2"></i>Agregar al carrito</button>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    } catch (e) {
        console.log('Error en el try-catch')
        console.log(e)
    }

    // Manejar la adición de productos al carrito
    document.getElementById('product-list').addEventListener('click', function(event) {
        if (event.target && event.target.matches('.add-to-cart')) {
            // Obtener los datos del producto (nombre, precio, imagen)
            const productName = event.target.dataset.name;
            const productPrice = event.target.dataset.price;
            const productImage = event.target.dataset.image;

            // Crear el elemento del carrito
            const cartItem = `
                <div class="cart-item d-flex justify-content-between mb-2">
                    <img src="${productImage}" alt="${productName}" class="cart-item-image" style="width: 50px;">
                    <div class="cart-item-info d-flex flex-column justify-content-center">
                        <span>${productName}</span>
                        <span>$${productPrice}</span>
                    </div>
                    <button class="btn btn-danger btn-sm remove-item" onclick="removeItem(this)">X</button>
                </div>
            `;

            // Agregar el producto al carrito
            document.getElementById("cart-items").insertAdjacentHTML('beforeend', cartItem);

            // Mostrar el carrito de compras (modal)
            $("#shopping-cart").modal("show");
        }
    });
});

// Función para eliminar un producto del carrito
function removeItem(button) {
    button.closest(".cart-item").remove();
}
