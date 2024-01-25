import { renderMain, verMas } from "./function.js";
const container = document.querySelector(".container");
renderMain();

container.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("btn-primary")) {
    const id = event.target.getAttribute("data-id");
    verMas(id);
  }

  // if (event.target.classList.contains("bx-arrow-back")) {
  //   callToApi(inputTitle.value);
  // }
});
