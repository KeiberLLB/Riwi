// selectores
const URLBase = "http://localhost:3000";
const nameUser = document.querySelector("#user-name");
const ageUser = document.querySelector("#user-age");
const idUser = document.querySelector("#user-id");
const form = document.querySelector("#form");
const tbody = document.querySelector("#tbody");

// eventos
document.addEventListener("DOMContentLoaded", () => {
  getUsers();
});

tbody.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("delete")) {
    const id = event.target.getAttribute("data-id");
    eliminar(id);
  }
  if (event.target.classList.contains("edit")) {
    const id = event.target.getAttribute("data-id");
    editar(id);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createUser();
});

async function createUser() {
  //VERBOS HTTP
  //GET -> OBTENER
  //POST -> CREAR
  //PUT -> ACTUALIZAR
  //DELETE -> ELIMINAR
  //PATCH -> ACTUALIZAR PARCIAL
  const user = {
    name: nameUser.value,
    age: ageUser.value,
  };
  const response = await fetch(`${URLBase}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  getUsers();
}
async function getUsers() {
  //fetch trae por defecto GET
  const response = await fetch(`${URLBase}/users`);
  const data = await response.json();
  console.log(data);
  renderUser(data);
}

function renderUser(users) {
  console.log(users);
  cleanTbody();
  users.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML += `<td>${user.id}</td>
    <th>${user.name}</th>
    <th>${user.age}</th>
    <td><button class="edit" data-id="${user.id}">Editar</button></td>
    <td><button class="delete" data-id="${user.id}">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function cleanTbody() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}
