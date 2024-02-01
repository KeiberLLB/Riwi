//selectores
const formLogin = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");

const URLBase = "http://localhost:3000/users";

//Eventos
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

async function login() {
  const response = await fetch(`${URLBase}?email=${email.value}`);
  const data = await response.json();

  if (!data.length) {
    console.log("Email no resgistrado");
    return;
  }
  if (data[0].password === password.value) {
    window.location.href = "administrator.html";
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userID", data[0].id);
  } else {
    console.log("Credenciales incorrectas");
  }
}
