// selectores
const tbody = document.querySelector("#tbody");
//lista de productos
const listaProductos = [
  {
    id: Date.now(),
    nombre: "Pastas",
    precio: 5.0,
    cantidad: 10,
    imagen:
      "https://www.helios.es/wp-content/uploads/2023/01/helios_blog_sq-tipospasta-1200x700.jpg",
    categoria: "Carbohidrato",
  },
];

function mostrarProductos() {
  //limpiar tabla
  tbody.innerHTML = "";
  //recorro mi lista de objetos con foreach
  //donde producto es el item que se esta recorriendo en el momento
  //index es el indice correspondiente al item del momento
  listaProductos.forEach(function (producto, indice) {
    //desestructuramos el objeto (producto)
    const { cantidad, categoria, id, imagen, nombre, precio } = producto;
    const precioFormat = Number(precio).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    tbody.innerHTML += `
    <tr>
      <td class="indice">${indice + 1}</td>
      <td>
        <img 
        src="${imagen}" 
        alt="img producto" 
        class="rounded-circle"
        width="50px" 
        height="50px"
        />
      </td>
      <td>${nombre}</td>
      <td>${nombre}</td>
      <td>${categoria}</td>
      <td>${cantidad}</td>
      <td>
        <button class="btn btn-primary edit-product">Editar</button>
        <button class="btn btn-danger delete-product">Eliminar</button>
      </td>
    </tr>
    `;
  });
}

mostrarProductos();
