const stockProductos = [
  {
    id: 1,
    nombre: "Jordan 5 Retro Concord",
    cantidad: 1,
    desc: "Basada en la clásica zapatilla de juego de 1990, tiene todos los detalles icónicos, incluido el cuello de choque, la palanca de encaje y las líneas de diseño inspiradas en el avión de combate. El aire visible debajo del talón y el aire encapsulado en el antepié proporcionan una amortiguación ligera.",
    precio: 1394950,
    img: "img/jordanRetro.jpg",
  },
  {
    id: 2,
    nombre: "Air Jordan 12 Retro Stealth",
    cantidad: 1,
    desc: "La parte superior con materiales de cuero auténtico y tela brinda durabilidad. La entresuela de espuma con amortiguación Zoom Air de largo completo brinda capacidad de respuesta. Enfranque de fibra de carbono. Suela de goma.",
    precio: 1394950,
    img: "img/jordanRetro12.jpg",
  },
  {
    id: 3,
    nombre: "Air Jordan 3 Desert Elephant",
    cantidad: 1,
    desc: "Tallas de: 25 cm a 31 cm. El legendario diseño de Tinker Hatfield que solidificó la relación de MJ con Nike regresa con un toque artesanal. Apodado el Desert Elephant, su estética envejecida (exhibida con ricas texturas y colores en tonos tierra) aporta un look sofisticado a cualquier atuendo.",
    precio: 1214950,
    img: "img/jordan3.jpg",
  },
  {
    id: 4,
    nombre: "Jordan 1 Low White Toe",
    cantidad: 1,
    desc: "Los Tenis Air Jordan 1 Low White Toe toman como inspiración los clásicos sneakers que usó Michael Jordan en los Bulls de Chicago. Este colorway sigue marcando tendencia desde su debut en los 80's, siendo icónicos en la cultura pop y streetstyle.",
    precio: 869950,
    img: "img/jordan1.jpg",
  },
  {
    id: 5,
    nombre: "Jordan 3 Retro Dark Iris",
    cantidad: 1,
    desc: "Jordan 3 Retro Dark Iris SU22 , elaborado con una base de cuero blanco con detalles en púrpura y superposiciones con estampado de elefante negro y una suela de goma gris para un mejor agarre.",
    precio: 1214950,
    img: "img/jordan3Retro.jpg",
  },
  {
    id: 6,
    nombre: "Adidas Forum 84 Camp Low",
    cantidad: 1,
    desc: "Un elemento básico del baloncesto de los 80. Un favorito en las calles de las ciudades de todo el mundo. El adidas Forum regresa con una actualización robusta. Colores frescos y materiales inesperados",
    precio: 499990,
    img: "img/adidasForum84.jpg",
  },
  {
    id: 7,
    nombre: "Adidas Forum Mid",
    cantidad: 1,
    desc: "Originalmente lanzada en 1984 como una zapatilla para jugar basketball, la adidas Forum se convirtió pronto en un ícono de la cultura. Siendo usada no solo por atletas, sino por skaters, músicos, artistas y bailarines, esta silueta hizo su transición de las canchas a las calles hasta transformarse en un clásico.",
    precio: 529990,
    img: "img/adidasForumMid.jpg",
  },
  {
    id: 8,
    nombre: "Adidas Adi2000",
    cantidad: 1,
    desc: "Un estilo llamativo inspirado en la era de los 2000, hecho parcialmente con materiales reciclados. Muestra tu lado más audaz con los tenis Adi2000, inspirados en la energía vibrante de principios de los 2000. Estos tenis adidas en tonos pastel con detalles de terciopelo fueron diseñados pensando en tu estilo único.",
    precio: 459990,
    img: "img/adidasAdi2000.jpg",
  },
  {
    id: 9,
    nombre: "Adidas Forum Jeremy Scott 84 Low Monogram",
    cantidad: 1,
    desc: "Disfruta de un drop de adidas forum, cargado de las ideas extravagantes y colores brillantes, emblemáticos de Jeremy Scott, como parte de una colaboración en curso, el diseñador le da un aspecto nuevo y fresco a una silueta clásica que comenzó en las canchas de béisbol. El cuero blanco de primera calidad es el lienzo perfecto para su creatividad y la tuya.",
    precio: 499990,
    img: "img/adidasForumJeremy.jpg",
  },
  {
    id: 10,
    nombre: "Adidas Forum Mid Patchwork",
    cantidad: 1,
    desc: "Esta nueva versión y su diseño con una combinación de colores, materiales y estampados contrastados con un toque de inspiración Bauhaus. Incluso los cordones lucen un estampado de lunares. La plantilla presenta también un estampado geométrico que completa este look exclusivo.",
    precio: 599990,
    img: "img/adidasForumMidP.jpg",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if (formulario) {
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if (existe) {
    const prod = carrito.map(prod => {
      if (prod.id === id) {
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const zapatoId = id;
  carrito = carrito.filter((zapato) => zapato.id !== zapatoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

function enviarCompra(e) {
  e.preventDefault()
  const persona = document.querySelector('#persona').value
  const correo = document.querySelector('#correo').value

  if (correo === '' || persona == '') {
    Swal.fire({
      title: "¡Debes completar tu email y nombre!",
      text: "Rellena el formulario",
      icon: "error",
      confirmButtonText: "Aceptar",
    })
  } else {

    const btn = document.getElementById('button');

    //document.getElementById('form')
    //.addEventListener('submit', function(event) {
    //event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_1il49d3';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Enviado!');
      }, (err) => {
        alert(JSON.stringify(err));
      });
    const spinner = document.querySelector('#spinner')
    spinner.classList.add('d-flex')
    spinner.classList.remove('d-none')

    setTimeout(() => {
      button.remove()

    }, 3000)

    setTimeout(() => {
      spinner.classList.remove('d-flex')
      spinner.classList.add('d-none')
      formulario.reset()

      const alertExito = document.createElement('p')
      alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
      alertExito.textContent = 'Compra realizada correctamente'
      formulario.appendChild(alertExito)

      setTimeout(() => {
        alertExito.remove()
      }, 3000)


    }, 3000)
  };
}

