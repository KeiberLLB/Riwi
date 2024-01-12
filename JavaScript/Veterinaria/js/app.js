pintarCartas();

form.addEventListener("submit", (event) => {
  
  event.preventDefault();
 
  const formData = new FormData(form);

  const paciente = {};
  
  for (const [key, value] of formData) {
    if (value=="") return
    paciente[key] = value;
  }
  pacientes.push(paciente);
  console.log(pacientes);
  localStorage.setItem("ls", JSON.stringify(pacientes));
  pintarCartas();
  form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  let listaCache = localStorage.getItem("ls");
  if (listaCache) {
    pacientes = JSON.parse(listaCache);
  }
  pintarCartas();
});
  