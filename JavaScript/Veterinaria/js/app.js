const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const pacientes = {};
  for (const [key, value] of formData) {
    pacientes[key] = value;
  }
  console.log(pacientes);
});
