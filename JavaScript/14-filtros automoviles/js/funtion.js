function mostrarAutos(autos) {
  limpiarHTML();
  autos.forEach((auto) => {
    contenedor.innerHTML += `
        <div class="card">
          <img
            src="${auto.imagen}"
            alt=""
          />
          <div class="description-card">
            <p>${auto.marca} - ${auto.modelo} - ${auto.year}</p>
            <p>Transmision: ${auto.transmision}</p>
            <p>Puertas: ${auto.puertas}</p>
            <p>Color: ${auto.color}</p>
            <p>Precio: $${auto.precio.toString().toLocaleString("en-US", {
              currency: "USD",
              style: "currency",
            })}</p>
          </div>
        </div>`;
  });
}

function limpiarHTML() {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

function filtrarAutos() {
  const resultado = autos.filter(filtrarPorMarca);
  mostrarAutos(resultado);
}

function filtrarPorMarca(auto) {
  if (datosBusqueda.marca) {
    return datosBusqueda.marca === auto.marca;
  }
  return auto;
}
