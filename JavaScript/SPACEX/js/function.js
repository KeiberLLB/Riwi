const container = document.querySelector(".container");

export async function renderMain() {
  // cleanBody();
  const URL = "https://api.spacexdata.com/v3/launches";
  const response = await fetch(URL);
  const data = await response.json();
  if (!data) {
    const titleError = document.createElement("h2");
    titleError.textContent = "No se encontraron mision";
    titleError.classList.add("alert");
    container.appendChild(titleError);
  }
  data.forEach((mision) => {
    container.innerHTML += `
    <div
      class="card d-flex flex-column align-items-center text-center col-3"
      style="width: 18rem"
    >
      <img
        src="${mision.links.mission_patch_small}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${mision.mission_name}</h5>
        <p class="card-text">${mision.launch_year}</p>
        
        <button
          type="button"
          data-id="${mision.flight_number}" 
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Ver Info
        </button>
      </div>
    </div>`;
  });
}



export function verMas(id) {
  console.log(id);
}

