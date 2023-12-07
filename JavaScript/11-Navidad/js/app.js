const contNieve = document.querySelector(".nieve");
contNieve.innerHTML = "";

function generarNieve() {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(1, 10);
    contNieve.innerHTML += `<span style="--i: ${num}"></span>`;
  });
}
function generarNieve2() {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(2.5, 12.5);
    contNieve.innerHTML += `<span style="--i: ${num}"></span>`;
  });
}
function random(inicio, final) {
  return Math.floor(Math.random() * (final - inicio + 1) + inicio);
}
generarNieve();
generarNieve2();

document.addEventListener("DOMContentLoaded", function () {
  const imagen = document.querySelector("img");

  // Escucha el evento de finalización de la animación
  imagen.addEventListener("animationiteration", function () {
    reiniciarAnimacion();
  });

  // Función para reiniciar la animación
  function reiniciarAnimacion() {
    imagen.style.transform = "translateX(100%)";
  }
});
