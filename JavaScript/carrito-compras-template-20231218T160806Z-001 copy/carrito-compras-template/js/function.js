function main() {
  const cardC = document.querySelector("#lista-productos .card_container");
  cardProduct.forEach((product) => { 
    const listaDeCalificacion = Array.from({ length: 5 }).map((e, index) => {
      return`<i class='bx bxs-star star'></i>`
    })
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img
              src="${product.imagen}"
              class="imagen-curso u-full-width"
            />
            <div class="info-card">
              <h4>${product.nombre}</h4>
              <p>${product.marca}</p>
              <span>${listaDeCalificacion.join("")}</span>
        
              ${
                !product.descuento
                  ? `<p class="psd">$${product.precio}</p>`
                  : `<p class="precio">$${product.precio}<span class="u-pull-right">$${product.precioD}</span></p>`
              }
             
              <a
                href="#"
                class="u-full-width button input agregar-carrito"
                data-id="${product.id}"
                >Agregar Al Carrito</a
              >
            </div>`;
    cardC.appendChild(card);
  });
}

function agregarProducto(id, card) {
  const p = cardProduct.find((producto) => producto.id == id);

  const producto = {
    nombre: card.querySelector("h4").textContent,
    imagen: card.querySelector(".imagen-curso").src,
    precio: p.descuento
      ? card.querySelector(".precio span").textContent
      : card.querySelector(".psd").textContent,
    id,
    cantidad: 1,
    descuento: p.descuento,
  };
  // !listaProductos.some(producto.id)
  //   ? listaProductos.push(producto)
  //   : listaProductos.find(producto.id).cantidad++;

  if (!listaProductos.some((item) => item.id == id)) {
    listaProductos.push(producto);
  } else {
    const product = listaProductos.find((item) => item.id == id);
    product.cantidad++;
  }
  mostrarProductos();
}
function mostrarProductos() {
  tbody.innerHTML = "";

  listaProductos.forEach((producto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>
    <img 
    src="${producto.imagen}" 
        alt="img producto"  
        height="100px"
        />
        </td>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>
      <button class="borrar-producto" data-id="${producto.id}">Eliminar</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function eliminarProducto(id) {
  const product = listaProductos.find((item) => item.id == id);
  if (product.cantidad > 1) {
    product.cantidad--;
  } else {
    listaProductos = listaProductos.filter((producto) => producto.id != id);
  }

  mostrarProductos();
}
// !listaProductos.some(producto.id)
//   ? listaProductos.push(producto)
//   : listaProductos.find(producto.id).cantidad++;

function sumaTotal() {
  totalC.innerHTML = "";
  let total = 0;
  const tr = document.createElement("tr");

  listaProductos.forEach((producto) => {
    total += Number(producto.precio.slice(1)) * producto.cantidad;
    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(total);
  });

  tr.innerHTML = `<td>
      <td colspan="3">Total</td>
      <td colspan="2">$${total}</td>
    </td>`;
  totalC.appendChild(tr);

  if (listaProductos == "") {
    totalC.innerHTML = "";
  }
}
