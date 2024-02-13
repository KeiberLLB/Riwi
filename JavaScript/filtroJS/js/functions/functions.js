// 1 . Elementos necesarios en Home

//constante generada para seleccionar la barra de navegacion
export let navbar = document.querySelector("#nav-lis");
const containerHome = document.querySelector("#container");
const inputSearch = document.getElementById("titleSearch");
const selectSearch = document.getElementById("selectSearch");

//funcion para busqueda especifica
export async function searchjob() {
  const busqueda = await fetch(
    `${URL}?_embed=company&title=${inputSearch.value}&modality=${selectSearch.value}`
  );
  const data = await busqueda.json();
  pintarHome(data);
}

export async function obtenerJobs() {
  const response = await fetch(`${URL}?_embed=company`);
  const data = await response.json();
  pintarHome(data);
}

function pintarHome(data) {
  cleanHTMLHome();
  data.forEach((job) => {
    containerHome.innerHTML += `<div class="card-job">
        <h2>${job.title}</h2>

        <p>
          ${job.description}
        </p>

        <div class="row">
          <div class="col-6">
            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-current-location"></i>
              <span class="fw-semibold">${job.location}</span>
            </div>

            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-time"></i>
              <span class="fw-semibold">${job.publicationDate}</span>
            </div>
          </div>

          <div class="col-6 d-flex justify-content-end">
            <img
              src="${job.company.imageCompany}"
              alt="logo"
              height="80"
              width="80"
              class="object-fit-contain rounded-circle img-company"
            />
          </div>
        </div>
      </div>`;
  });
}

function cleanHTMLHome() {
  while (containerHome.firstChild) {
    containerHome.removeChild(containerHome.firstChild);
  }
}

export function navBar(cache) {
  if (cache == true) {
    navbar.innerHTML = `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="administrator.html"
                  >Admin</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link out" href="#">Sing Out</a>
              </li>`;
  } else {
    navbar.innerHTML = `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="administrator.html"
                  >Admin</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Sing In</a>
              </li>`;
  }
}

// 2 . Elementos necesarios en Administrator
export function resetForm() {
  const buttonForm = document.querySelectorAll(".closedB");
  buttonForm.forEach((b) => {
    formNewJob.reset();
    cacheEditor = undefined;
  });
}

// variable creada para inyectar los jobs en adm (solo se mostraran los jobs creados por el usuario actual)
const containerJobs = document.getElementById("tbodyAdm");

//del localStorage obtengo el id del user login
let id = localStorage.getItem("id");

//selecciono todo el formulario para obtener los inputs por name
let formNewJob = document.getElementById("formNewJob");
//variable generada para detectar el data-id
export let cacheEditor;
const URL = "http://localhost:3001/jobs";
//funcion para guardar nuevos jobs o guardar ediciones
export async function saveJob() {
  //metodo para obtener todos los inputs ::: inicio
  const formData = new FormData(formNewJob);
  const newJob = {};

  for (const [key, value] of formData) {
    if (value === "") return;
    newJob[key] = value;
  }
  // ::: fin

  // obtengo la fecha actual y la ajusto a lo que necesito
  const hoy = new Date();
  newJob.publicationDate = hoy.toLocaleDateString();
  newJob.companyId = `${id}`;

  if (cacheEditor == null || cacheEditor == undefined) {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    formNewJob.reset();
  } else {
    await fetch(`${URL}/${cacheEditor}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    formNewJob.reset();
  }
}

export async function printJobs() {
  const nameCompany = document.getElementById("nameCompany");
  const imgCompany = document.getElementById("imgCompany");

  const datajobs = await jobsLogin();
  cleanHTML();

  const infC = datajobs.filter((i) => i.companyId == id);
  nameCompany.innerHTML = `${infC[0].company.nameCompany}`;
  imgCompany.innerHTML = `<img
              src="${infC[0].company.imageCompany}"
              alt="Avatar"
              height="100"
              class="rounded-circle border-light border-3"
            />`;

  console.log(infC);

  datajobs.forEach((job) => {
    if (job.companyId === `${id}`) {
      containerJobs.innerHTML += `<tr>
                    <td>
                      <div class="d-middle">
                        <img
                          src="${job.company.imageCompany}"
                          alt="img-product"
                          width="60"
                          height="60"
                          class="img-fluid rounded-circle img-company"
                        />
                      </div>
                    </td>
                    <td>${job.company.nameCompany}</td>
                    <td>${job.title}</td>
                    <td>${job.location}</td>
                    <td>${job.experience}</td>
                    <td>${job.modality}</td>
                    <td>$ ${job.salary}</td>
                    <td>
                      <button
                        data-id="${job.id}"
                        class="btn btn-primary edit"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <i class="bx bx-edit"></i>
                      </button>

                      <button 
                        data-id="${job.id}"
                        class="btn btn-danger delete">
                        <i class="bx bx-trash"></i>
                      </button>
                    </td>
                  </tr>`;
    }
  });
}

async function jobsLogin() {
  const response = await fetch(`${URL}/?_embed=company`);
  const data = await response.json();
  return data;
}

function cleanHTML() {
  while (containerJobs.firstChild) {
    containerJobs.removeChild(containerJobs.firstChild);
  }
}

export async function deleteJob(id) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function editJob(id) {
  cacheEditor = id;
  obtenerJobsAdm(id);
}

//esta funcion limpia el form
async function obtenerJobsAdm(id) {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();
  pintarModal(data);
}

function pintarModal(data) {
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  const select = document.querySelector("select");
  select.value = data.modality;
  textArea.value = data.description;
  inputs.forEach((input) => {
    const propiedad = input.getAttribute("name");
    input.value = data[propiedad];
  });
}
