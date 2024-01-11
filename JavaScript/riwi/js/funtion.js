function waste(selectPiso) {
  const data = puntosEcologicos.find(
    (puntosEcologicos) => puntosEcologicos.piso == selectPiso
  );
  const contadorCanecas = document.querySelectorAll(".body_top span");
  contadorCanecas[0].textContent = `${data.aprovechables}/500`;
  contadorCanecas[1].textContent = `${data.organicos}/500`;
  contadorCanecas[2].textContent = `${data.no_aprovechables}/500`;
}

function limpiarPiso(selectPiso) {
  const data = puntosEcologicos.find(
    (puntosEcologicos) => puntosEcologicos.piso == selectPiso
  );
  data.aprovechables = 0;
  data.no_aprovechables = 0;
  data.organicos = 0;
  localStorage.setItem("ls", JSON.stringify(puntosEcologicos));
  const contadorCanecas = document.querySelectorAll(".body_top span");
  contadorCanecas[0].textContent = `${data.aprovechables}/500`;
  contadorCanecas[1].textContent = `${data.organicos}/500`;
  contadorCanecas[2].textContent = `${data.no_aprovechables}/500`;
}
