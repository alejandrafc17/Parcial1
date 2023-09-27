document.addEventListener("DOMContentLoaded", function () {
    const listaProductos = document.getElementById("product_list");
    const comentariosForm = document.getElementById("comentariosForm");
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const comentarioTextarea = document.getElementById("comentario");
    const data = [
        {
            "product_id": "1",
            "product_name": "Juguetes",
            "product_description": "Pelotas",
            "product_price": "35.000",
            "product_image": "assets/juguetes.jfif",
            "product_material": "Goma",
            "product_color": "Naranja"
        },
        {
            "product_id": "2",
            "product_name": "Concentrado",
            "product_description": "Concentrado para perro adulto",
            "product_price": "100.000",
            "product_image": "assets/concentrado.png",
            "product_material": "Mezcla de granos",
            "product_color": "Café"
        },
        {
            "product_id": "3",
            "product_name": "Implementos de Aseo",
            "product_description": "Shampoo, Acondicionador, entre otros para adulto",
            "product_price": "190.000",
            "product_image": "assets/images2.jfif",
            "product_material": "Diferentes Tipos",
            "product_color": "Multicolor"
        },
        {
            "product_id": "4",
            "product_name": "Collar para mascota",
            "product_description": "Agradable con su piel y cómodo",
            "product_price": "70.000",
            "product_image": "assets/images.jfif",
            "product_material": "Espuma entre otros",
            "product_color": "Naranja"
        }

    ];

    let products = '';
    data.forEach(product => {
        const li = document.createElement("li");
        products += `<section id="${product.id_product}" class="product product-background">
                <img src="${product.product_image}" alt="Esta es nuestro producto" width="200px" height="200px">
                <h2>${product.product_name}</h2>
                <p>${product.product_description}</p>
                <h3>Descripción del producto</h3>
                <ol>
                    <li>Color: ${product.color}</li>
                    <li>Material: ${product.product_material}</li>
                    <li>Precio: $${product.product_price}</li>
                </ol>
                <a href="pages/product.html" target="_blank"> Ver detalles </a>
            </section>`;
    });
    listaProductos.innerHTML = products;

});

document.addEventListener('scroll', function (){
    console.log('Hiciste scroll');
});


// Agregamos un evento de escucha para el envío del formulario
comentariosForm.addEventListener("submit", function(event) {
    // Detenemos el envío del formulario por defecto
    event.preventDefault();

    // Validamos los campos antes de enviar el formulario
    if (validarFormulario()) {
        // Aquí puedes enviar el formulario usando AJAX o realizar otras acciones
        alert("Formulario válido. Enviando comentarios...");
        // Puedes agregar aquí la lógica para enviar los datos del formulario
    }
});

// Función para validar el formulario
function validarFormulario() {
    let valido = true;

    if (nombreInput.value.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        valido = false;
    }

    if (correoInput.value.trim() === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        valido = false;
    } else if (!validarCorreo(correoInput.value)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        valido = false;
    }

    if (comentarioTextarea.value.trim() === "") {
        alert("Por favor, ingresa un comentario o sugerencia.");
        valido = false;
    }

    return valido;
}

// Función para validar el formato de correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

// Agrega el evento "mouseover" al formulario
comentariosForm.addEventListener("mouseover", function () {
    comentariosForm.style.backgroundColor = "lightblue";
});

// Agrega el evento "mouseout" al formulario
comentariosForm.addEventListener("mouseout", function () {
    comentariosForm.style.backgroundColor = "";
});

