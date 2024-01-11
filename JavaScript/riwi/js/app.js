// Selectores
const selectPiso = document.getElementById("select_floor");
const canecas = document.querySelectorAll(".bowl");
const btnSubmit = document.getElementById("btnSubmit");
const vaciarC = document.getElementById("vaciar");
const vaciarAll = document.getElementById("vaciarAll");
// Eventos y Escuchadores de eventos
btnSubmit.addEventListener("click", () => {
  const cantidad = document.getElementById("cantidad").value;
  puntosEcologicos.forEach((punto) => {
    if (punto.piso == selectPiso.value) {
      punto[tipoCanecaAgregar] += parseInt(cantidad);
    }
  });
  console.log(selectPiso.value);
  waste(selectPiso.value);
  localStorage.setItem("ls", JSON.stringify(puntosEcologicos));
});
canecas.forEach((caneca) => {
  caneca.addEventListener("click", (event) => {
    // 1. abrir modal
    document.getElementById("btnOpenModal").click();
    // 2. obtener el atributo personalizado
    tipoCanecaAgregar = caneca.getAttribute("type-bowl");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let listaCache = localStorage.getItem("ls");
  if (listaCache) {
    puntosEcologicos = JSON.parse(listaCache);
  }
  waste(selectPiso.value);
});

selectPiso.addEventListener("input", () => {
  waste(selectPiso.value);
});

vaciarC.addEventListener("click", () => limpiarPiso(selectPiso.value));

vaciarAll.addEventListener("click", () => {
  puntosEcologicos.forEach((i) => {
    i.aprovechables = 0;
    i.no_aprovechables = 0;
    i.organicos = 0;
    localStorage.setItem("ls", JSON.stringify(puntosEcologicos));
  });
});
