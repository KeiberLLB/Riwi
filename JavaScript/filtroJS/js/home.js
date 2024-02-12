import {
  navBar,
  navbar,
  obtenerJobs,
  searchjob,
} from "./functions/functions.js";
//selectores
//constante generada para verificar inicio de sesion
let cacheLg = JSON.parse(localStorage.getItem("isAuthorizated"));

const search = document.getElementById("search");

// detecta si el usuario quiere realizar una busqueda especifica
search.addEventListener("click", (e) => {
  searchjob();
});

//al iniciar la pagina se hará una verificacion para determinar si se inició sesion o no.
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  //se llama la funcion navBar para determinar lo que incluye dependiendo de si hay un login o no
  navBar(cacheLg);
  //se llama para pintar todos los jobs en el home
  obtenerJobs();
});

//eventos para escuchar la navbar
navbar.addEventListener("click", (e) => {
  //cerrar sesion usuario
  if (e.target.classList.contains("out")) {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }
});
