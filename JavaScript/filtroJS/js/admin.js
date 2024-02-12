import {
  saveJob,
  printJobs,
  deleteJob,
  editJob,
  resetForm,
} from "./functions/functions.js";

//preferi escuchar todo el documento para agruparlos en pocas lineas
document.addEventListener("click", (e) => {
  //cerrar sesion usuario
  if (e.target.classList.contains("outAd")) {
    localStorage.clear();
    window.location.href = "./home.html";
  }
  // detacta el save de una nueva noticia o el guardado de una edicion
  if (e.target.classList.contains("save")) {
    saveJob();
  }
  // detecta si el usuario quiere eliminar un job
  if (e.target.classList.contains("delete")) {
    const id = e.target.getAttribute("data-id");
    deleteJob(id);
  }
  // detecta si el usuario quiere editar un job
  if (e.target.classList.contains("edit")) {
    const id = e.target.getAttribute("data-id");
    editJob(id);
  }
  //eventos para limpiar formulario
  if (e.target.classList.contains("closedB")) {
    resetForm();
  }
});

//acciones a tomar cuando se recargue la pagina
document.addEventListener("DOMContentLoaded", () => {
  printJobs();
  
});
