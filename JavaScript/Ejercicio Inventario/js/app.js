function main() {
  let flag = true;
  do {
    const opcion = menu();
    switch (opcion) {
      case "1":
        agregarProducto();
        break;
      case "2":
        eliminarProducto();
        break;
      case "6":
        mostrarReporte();
      case "7":
        mostrarAlerta("Saliendo del sistema");
        flag = false;
        break;
      default:
        mostrarAlerta();
    }
  } while (flag);
}
function agregarProducto() {
  nombre = prompt("Ingrese el nombre del producto");
  categoria = prompt("Ingrese la categoria del producto");
  cantidad = Number(prompt("Ingrese la cantidad del producto"));
  precio = Number(prompt("Ingrese el precio del producto"));

  //Validacion de numeros
  if (isNaN(cantidad) || isNaN(precio)) {
    mostrarAlerta("Cantidad y precio deben ser numericos");
    return;
  }
  const id = Date.now();
  // cuando la key es igual a la variable nueva que se quiere agregar se deja como esta abajo
  const nuevoProducto = {
    id,
    nombre,
    categoria,
    cantidad,
    precio,
  };
  listaDeProductos.unshift(nuevoProducto);

  console.log(listaDeProductos);
}
function eliminarProducto() {
  mostrarReporte();
  const nombreEliminar = prompt("Ingresa el nombre del producto a Eliminar");
  if (
    !listaDeProductos.some(
      (producto) =>
        producto.nombre.toLowerCase() == nombreEliminar.toLowerCase()
    )
  ) {
    mostrarAlerta(`No existe productos con el nombre ${nombreEliminar}`);
    return;
  }

  listaDeProductos = listaDeProductos.filter(
    (producto) => producto.nombre.toLowerCase() != nombreEliminar.toLowerCase()
  );
  mostrarAlerta(
    `Los productos con el nombre ${nombreEliminar} fueron eliminados exitosamente`
  );
}
function mostrarAlerta(mensaje = "Opcion no valida") {
  alert(mensaje);
}
function menu() {
  const opcion = prompt(`
  MENU DE OPCIONES
  1. Agregar producto
  2. Eliminar producto
  3. Modificar producto
  4. Buscar por nombre
  5. Filtrar por rango de precios
  6. Crear reporte de inventario ordenado
  7. Salir

  Ingrese una opcion:
  `);
  return opcion;
}
function mostrarReporte() {
  if (listaDeProductos.length < 0) {
    mostrarAlerta("No hay productos para reportar");
    return;
  }
  // ordena (muta) la listaDeProductos
  listaDeProductos.sort((a, b) => a.categoria.localeCompare(b.categoria));

  const fechaHoy = new Date().toDateString();
  let listaString = `Lista de productos ${fechaHoy}`;

  listaDeProductos.forEach((producto, index) => {
    const { id, nombre, categoria, cantidad, precio } = producto;
    listaString += `\n${
      index + 1
    }. id: ${id}, Nombre: ${nombre}, Categoria: ${categoria}, Cantidad: ${cantidad}, Precio: ${precio}\n`;
  });
  mostrarAlerta(listaString);

  // for (let i = 0; i < listaDeProductos.length; i++) {
  //   let producto = listaDeProductos[i];
  // }
}

main();
