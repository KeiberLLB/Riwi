//Crear una lista

const lista = [
  "T o  más     ",
  true,
  { nombre: "Terry", barrio: "Belen" },
  2,
  [1, 2, 3, 4],
];

//Acceder a elementos
console.log(lista[3]);
// console.log(lista.at(3));
console.log(lista[2]["nombre"]);
console.log(lista[2].nombre);
// \s expresion para espacios
console.log(lista[0].replace(/\s/g, ""));
console.log(lista[0].trim().split(" ").join(""));
