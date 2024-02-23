import { logInlogUp, register, logIn, logOut,logIf } from "./loginup.js";

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  if (
    localStorage.getItem("isAuthenticated") == false ||
    localStorage.getItem("isAuthenticated") == null ||
    localStorage.getItem("isAuthenticated") == undefined
  ) {
    logInlogUp();
    return;
  } else {
    logIf();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ghost")) {
    const container = document.getElementById("logInlogUp");
    container.classList.add("right-panel-active");
  }
  if (e.target.classList.contains("ghost2")) {
    const container = document.getElementById("logInlogUp");
    container.classList.remove("right-panel-active");
  }
  if (e.target.classList.contains("signUp")) {
    register();
  }
  if (e.target.classList.contains("signIn")) {
    logIn();
  }
  if (e.target.classList.contains("bx")) {
    logOut();
  }
});
