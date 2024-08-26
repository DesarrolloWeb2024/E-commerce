// public/scripts/main.js

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
                                            </div>
                                        </div>
                                    `;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }catch (e) {
        console.log('try-catch')
        console.log(e)
    }
});
  

/***
 *   
                                    <div class="col-lg-3 col-sm-6 my-3">
                                        <div class="col-12 bg-white text-center h-100 product-item">
                                            <div class="row h-100">
                                                <div class="col-12 p-0 mb-3">
                                                    <a href="#">
                                                        <img src="images/image-1.jpg" class="img-fluid">
                                                    </a>
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <a href="#" class="product-name">Sony Alpha DSLR Camera</a>
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <span class="product-price-old">
                                                        $500
                                                    </span>
                                                    <br>
                                                    <span class="product-price">
                                                        $500
                                                    </span>
                                                </div>
                                                <div class="col-12 mb-3 align-self-end">
                                                    <button class="btn btn-outline-dark" type="button"><i class="fas fa-cart-plus me-2"></i>Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
 */