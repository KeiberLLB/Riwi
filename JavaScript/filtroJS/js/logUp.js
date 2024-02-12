// url del json para registrar nuevo usuario
const URL = "http://localhost:3001/companies";

//variable generada para escuchar el logUp
//tambien se usara para obtener todos los datos del registro
const logup = document.getElementById("logup");

//variables generadas para autentificaciones de seguridad en el registro
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

//evento logUp
logup.addEventListener("submit", (e) => {
  e.preventDefault();
  //llamado funcion registro nuevo usuario
  logUp();
});

// ya que esta pagina solo se va a usar para realizar el registro de usuario no se importaran datos,
// si el registro se realiza de forma correcta se enviara a login nuevamente
async function logUp() {
  //verificando que las contraseñas sean iguales
  const { validated, message } = validatePassword();

  if (!validated) {
    showAlert(message);
    return;
  }

  const { validated: validatedSegurity, message: messageError } =
    validatePasswordSegurity();

  if (!validatedSegurity) {
    showAlert(messageError);
    return;
  }

  if (await validateEmail()) {
    showAlert("El email ya se encuentra registrado.");
    return;
  }
  // con este metodo traigo todos los inputs ::: inicio
  const formData = new FormData(logup);
  const newUser = {};

  for (const [key, value] of formData) {
    newUser[key] = value;
  }
  // ::: fin

  //normalmente el nit de una empresa ya esta definido,
  //por recomendacion del teacher se genero aleatoriamente :D
  newUser.nit = Date.now();

  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  window.location.href = "index.html";
}

//funcion para validar que la contraseña sea igual en los campos de verificaicon del formulario
function validatePassword() {
  if (password.value != passwordConfirmation.value) {
    return { validated: false, message: "Las contraseñas no coinciden" };
  }

  return { validated: true };
}

//funcion para validar que el correo no este ya registrado
async function validateEmail() {
  const response = await fetch(`${URL}?email=${email.value}`);
  const data = await response.json();
  return data.length;
}

function validatePasswordSegurity() {
  const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

  //El metodo test permite evaluar una cadena de texto a partir de una expresión regular
  if (regex.test(password.value)) {
    return { validated: true };
  }

  return {
    validated: false,
    message:
      "La contraseña debe tener mayusculas, minusculas y un rango de 6 a 10 caracateres",
  };
}

function showAlert(message) {
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "error",
    toast: "true",
    timer: 4000,
    showConfirmButton: false,
    position: "center",
    confirmButtonText: "Aceptar",
  });
}
