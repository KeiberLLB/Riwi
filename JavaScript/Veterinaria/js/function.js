function pintarCartas() {
  const containerCites = document.getElementById("containerCites");
  containerCites.innerHTML = '';
  pacientes.forEach((paciente, index) => {
    const card = document.createElement("div");
    card.classList.add("card card_cite");
    card.innerHTML = `<div class="card-body">
                <h5 class="card-title fs-3 fw-bold">${paciente.petName}</h5>
                <p class="card-text">
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Propietario:</span>
                    <span>${paciente.userName}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Telefono:</span>
                    <span>${paciente.phoneNumber}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Fecha:</span>
                    <span>${paciente.date}</span>
                  </div>
                  
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Hora:</span>
                    <span>${paciente.time}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Sintomas:</span>
                    <span>${paciente.description}</span>
                  </div>
                </p>
                <div class="d-flex gap-2">
                  <button class="btn btn-primary">Editar</button>
                  <button class="btn btn-danger">Eliminar</button>
                </div>
              </div>`;
    
    containerCites.appendChild(card);
    eliminarPaciente(index);
  });
}

function eliminarPaciente(index) {
  const deleteButton = card.document.querySelector(".btn-danger");
    deleteButton.addEventListener("click", () => {
      //splice es un metodo de listas y strings, donde el primer valor es la posicion y el segundo el numero de elementos a borrar
      pacientes.splice(index, 1);
      localStorage.setItem("ls", JSON.stringify(pacientes));
      pintarCartas();
    })
}