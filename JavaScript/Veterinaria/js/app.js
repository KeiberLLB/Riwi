pintarCartas();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const paciente = {};
  for (const [key, value] of formData) {
    paciente[key] = value;
  }
  pacientes.push(paciente);
  localStorage.setItem("ls", JSON.stringify(pacientes));
});

document.addEventListener("DOMContentLoaded", () => {
  let listaCache = localStorage.getItem("ls");
  if (listaCache) {
    pacientes = JSON.parse(listaCache);
  }
});
