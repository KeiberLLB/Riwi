function waste(selectPiso) {
  const data = puntosEcologicos.find(
    (puntosEcologicos) => puntosEcologicos.piso == selectPiso
  );
  const contadorCanecas = document.querySelectorAll(".body_top span");
  contadorCanecas[0].textContent = `${data.aprovechables}/500`;
  contadorCanecas[1].textContent = `${data.organicos}/500`;
  contadorCanecas[2].textContent = `${data.no_aprovechables}/500`;
}
