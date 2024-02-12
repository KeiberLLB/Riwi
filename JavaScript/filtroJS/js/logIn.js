// variables generadas para autenticar login
const email = document.getElementById("email");
const password = document.getElementById("password");

// url del json donde se encuentra toda la informacion para el login
const URL = "http://localhost:3001/companies";

//funcion llamada desde el index.js solo para inicio de seccion y guardado en localStorage para futuras verificaciones
export async function logIn() {
  const response = await fetch(`${URL}?email=${email.value}`);
  const data = await response.json();

  if (!data.length) {
    showAlert("Email no registrado");
    return;
  }
  if (data[0].password === password.value) {
    // verificada la informacion se envia el usuario a la pagina de administracion
    window.location.href = "administrator.html";
    // se guardan dos parametros en el local storage para futuras acciones (editar y eliminar jobs)
    localStorage.setItem("isAuthorizated", "true");
    localStorage.setItem("id", `${data[0].id}`);
  } else {
    showAlert("Credenciales incorrectas");
  }
}

// se usa para generar alertas al encontrar inconcistencias en el login
function showAlert(message) {
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "error",
    toast: "true", // para que no sea tan grande
    timer: 2000,
    showConfirmButton: false,
    position: "center",
    confirmButtonText: "Aceptar",
  });
}
