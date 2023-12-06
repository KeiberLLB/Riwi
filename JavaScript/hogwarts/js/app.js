// function asignarCasa() {
//   casas.filter((casa) => {
//     console.log(casa);
//     casa.linaje.filter((i) => {
//       console.log(i);
//       i != estudiante.linaje;
//     });
//   });
// }
// asignarCasa();
let c = [];
casas.forEach((casa) => {
  let existecasa = casa.linaje.some((i) => i == estudiante.linaje);
  console.log(existecasa);
  if (existecasa == true) {
    c.push(casa);
  }

  console.log(c);
});
