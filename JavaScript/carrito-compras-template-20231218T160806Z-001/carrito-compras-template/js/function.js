function agregarProducto(id, card) {
  const producto = {
    nombre: card.querySelector("h4").textContent,
    imagen: card.querySelector(".imagen-curso").src,
    precio: card.querySelector(".precio span").textContent,
    id,
    cantidad: 1,
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
    total += Number(producto.precio.slice(1) * producto.cantidad);
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
