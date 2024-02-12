import { logIn } from "./logIn.js";

//variable generada para escuchar el login
const login = document.getElementById("login");

//evento login
login.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn();
});
