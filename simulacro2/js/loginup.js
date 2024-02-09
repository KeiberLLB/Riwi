const container = document.getElementById("container");
const URL = "http://localhost:3000/users";

export function logInlogUp() {
  container.innerHTML = `<div class="logInlogUp" id="logInlogUp">
          <div class="form-container sign-up-container">
            <form id="register" action="#">
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Full Name" id="fullName" required/>
              <input type="email" placeholder="Email" id="email" required/>
              <input type="password" placeholder="Password" id="password" required/>
              <input type="password" placeholder="Password Confirmation" id="password-confirmation" required/>
              <button class="signUp" type="submit">Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <span>or use your account</span>
              <input id="emailI" type="email" placeholder="Email" required />
              <input id="passwordI" type="password" placeholder="Password" required />
              <button class="signIn" type="submit">Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost2" id="signIn">Sign In</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>`;
}

function cleanHTML() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export async function register() {
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  //1. La contraseñas tienen que ser iguales

  const { validated, message } = validatePassword();
  //2. Contraseña segura

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

  //3. No existe una cuenta con este correo
  if (await validateEmail()) {
    showAlert("El email ya se encuentra registrado");
    return;
  }

  try {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        fullName: fullName.value,
        password: password.value,
      }),
    });
  } catch (error) {
    showAlert(error);
  }
}

async function validateEmail() {
  const response = await fetch(`${URL}?email=${email.value}`);
  const data = await response.json();
  return data.length;
}

function validatePassword() {
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("password-confirmation");
  if (password.value != passwordConfirmation.value) {
    return { validated: false, message: "Las contraseñas no coinciden" };
  }

  return { validated: true };
}

function validatePasswordSegurity() {
  const password = document.getElementById("password");
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  //El metodo test permite evaluar una cadena de texto a partir de una expresión regular
  if (regex.test(password.value)) {
    return { validated: true };
  }

  return {
    validated: false,
    message:
      "La contraseña debe tener mayusculas, minusculas, un caracater especial y un rango de 8 a 15 caracateres",
  };
}
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

export async function logIn() {
  const email = document.getElementById("emailI");
  const password = document.getElementById("passwordI");
  const response = await fetch(`${URL}?email=${email.value}`);
  const data = await response.json();
  if (!data.length) {
    console.log("Email no resgistrado");
    return;
  }
  if (data[0].password === password.value) {
    //con el objeto window podemos redireccionar al usuario
    localStorage.setItem("dataId", data[0].id);
    localStorage.setItem("isAuthenticated", "true");
    navbar(data);
  } else {
    const alert = "Credenciales incorrectas";
    showAlert(alert);
  }
}

function navbar(data) {
  const ul = document.getElementById("login");
  ul.innerHTML += `<li><a href="#">${data[0].fullName}</a></li>
                    <li><i class='bx bx-log-out-circle'></i></li>`;
}

export function logOut() {
  const ul = document.getElementById("login");
  localStorage.removeItem("isAuthenticated");
  ul.innerHTML = `<li><a href="#">Home</a></li>`;
  logInlogUp();
}

export async function logIf() {
  const ul = document.getElementById("login");
  const info = localStorage.getItem("dataId");
  const response = await fetch(`${URL}/${info}`);
  const data = await response.json();
  console.log(data);
  ul.innerHTML += `<li><a href="#">${data.fullName}</a></li>
                    <li><i class='bx bx-log-out-circle'></i></li>`;
}
