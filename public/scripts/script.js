$(function() {

    $('.toast').toast('show');

    $('.nav-item.dropdown').mouseenter(function() {
        $(this).addClass('show');
        $(this).children('.dropdown-menu').addClass('show');
        $(this).children('.dropdown-toggle').attr('aria-expanded', 'true');
    }).mouseleave(function() {
        $(this).removeClass('show');
        $(this).children('.dropdown-menu').removeClass('show');
        $(this).children('.dropdown-toggle').attr('aria-expanded', 'false');
    });

    $('.img-small').on('mouseenter click', function() {
        var src = $(this).data('src');
        $('.img-large').css("background-image", "url('"+src+"')");
    });

    var imgLarge = $('.img-large');

    imgLarge.mousemove(function(event) {
        var relX = event.pageX - $(this).offset().left;
        var relY = event.pageY - $(this).offset().top;
        var width = $(this).width();
        var height = $(this).height();
        var x = (relX / width) * 100;
        var y = (relY / height) * 100;
        $(this).css("background-position", x+"% "+y+"%");
    });

    imgLarge.mouseout(function() {
        $(this).css("background-position", "center");
    });

    $( window ).resize(function() {
        setImgLarge();
        setImgSmall();
    });

    setImgLarge();
    setImgSmall();

});

function setImgLarge() {
    var imgLarge = $('.img-large');
    var width = imgLarge.width();
    imgLarge.height(width * 2/3);
}

function setImgSmall() {
    var imgSmall = $('.img-small');
    var width = imgSmall.width();
    imgSmall.height(width);
}

// Variable para almacenar el número de productos en el carrito
let cantidadCarrito = 0;

// Función para actualizar el contador en el carrito
function actualizarContador() {
  // Actualiza el contenido del contador en el ícono del carrito
  document.getElementById('cart-count').textContent = cantidadCarrito;
}

// Asignar eventos a los botones de "Agregar al carrito"
document.addEventListener('DOMContentLoaded', () => {
  // Buscar todos los botones de "Agregar al carrito"
  const botonesAgregar = document.querySelectorAll('.btn-agregar');

  // Agregar el evento click a cada botón
  botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', () => {
      // Incrementar la cantidad de productos en el carrito
      cantidadCarrito++;

      // Actualizar el contador en el carrito
      actualizarContador();
    });
  });
});