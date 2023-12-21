//selectores

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const contenedor = document.querySelector(".container-card");

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

marca.addEventListener("input", (event) => {
  datosBusqueda.marca = event.target.value;
  filtrarAutos();
});
document.addEventListener("DOMContentLoaded", function () {
  mostrarAutos(autos);
  //llenar el select de años
  const max = new Date().getFullYear();
  const min = max - 26;
  //iteracion1
  //i=2023
  //min =2013
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    year.appendChild(option);
  }
});
