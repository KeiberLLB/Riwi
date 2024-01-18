//selectores
const inputTitle = document.querySelector("#search");
let timer;
const container = document.querySelector(".container-cards");
//eventos
inputTitle.addEventListener("input", (event) => {
  //event = evento que ocurrio
  //target = la etiqueta donde ocurrio el evento
  //value = el valor del input

  //hacemos un backDrop de forma manual con JAVASCRIPT
  clearTimeout(timer);
  timer = setTimeout(() => {
    callToApi(event.target.value);
  }, 500);
});

//funcion para hacer el llamado a la API
async function callToApi(title) {
  const URL = `https://www.omdbapi.com/?apikey=690d22ef&s=${title}`;
  //realizo la peticion HTTP con el servicio fetch
  //await = codigo no bloqueante a codigo bloqueante
  const response = await fetch(URL);
  const data = await response.json();
  printMovies(data.Search);
}

function printMovies(movies) {
  cleanHTML();
  //VALIDAR QUE SI EXISTAN PELICULAS
  if (!movies) {
    const titleError = document.createElement("h2");
    titleError.textContent = "No se encontraron peliculas";
    titleError.classList.add("alert");
    container.appendChild(titleError);
  }

  // container.innerHTML = ""; ES LENTA
  movies.forEach((movie) => {
    //inyectar el HTML
    container.innerHTML += `
    <div class="card">
      <h2 class="tittle-movie">${movie.Title}</h2>
      <img
          class="card-img"
          src="${movie.Poster}"
          alt=""/>
      <p>Año <span>${movie.Year}</span></p>
      <p>Tipo <span>${movie.Type}</span></p>
      <button>Ver más</button>
    </div>`;
  });
}

function cleanHTML() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.innerHTML = "";
}
