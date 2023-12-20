main();



let listaProductos = [];

const tbody = document.querySelector("#carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const totalC = document.querySelector("#carrito tfoot");

const contenedorProductos = document.querySelector("#lista-productos");

vaciarCarrito.addEventListener("click", function (event) {
  event.preventDefault(); //evita que se recargue la pagina al hacer click en el boton
  listaProductos = [];
  tbody.innerHTML = "";
  totalC.innerHTML = "";
});

tbody.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("borrar-producto")) {
    const id = event.target.getAttribute("data-id");
    eliminarProducto(id);
    sumaTotal();
  }
});

contenedorProductos.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("agregar-carrito")) {
    const id = event.target.getAttribute("data-id");
    const card = event.target.parentElement.parentElement;
    agregarProducto(id, card);
    sumaTotal();
  }
});
