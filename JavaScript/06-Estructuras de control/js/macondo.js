let saldo = 2500000;
let continuar = true;
//caso 1
do {
  const opcion = prompt(`*** Aeropuerto el Dorado ***
  1. Compra una almojábana con gaseosa son 15.000
  2. Compra un Subway con gaseosa 23.000
  3. No compra nada`);

  switch (opcion) {
    case "1":
      saldo = saldo - 15000;
      alert(`Su saldo es $ ${saldo}`);
      continuar = false;
      break;
    case "2":
      saldo = saldo - 23000;
      alert(`Su saldo es $ ${saldo}`);
      continuar = false;
      break;
    default:
      alert(`Su saldo es $ ${saldo}`);
      continuar = false;
      break;
  }
} while (continuar);
//caso 2
const altoPermitido = 0.55;
const largoPermitido = 0.4;
const anchoPermitido = 0.2;
let altoOriginal =
  prompt(`*** Abordaje con maleta de mano ***
  Ingresa el alto de tu maleta en centimetros`) / 100;
let largoOriginal =
  prompt(`*** Abordaje con maleta de mano ***
  Ingresa el largo de tu maleta en centimetros`) / 100;
let anchoOriginal =
  prompt(`*** Abordaje con maleta de mano ***
  Ingrese el ancho de tu maleta en centimetros`) / 100;
alert(`Es un poco mas grande del tamaño normal`);
let factorAlto = altoPermitido / altoOriginal;
let factorLargo = largoPermitido / largoOriginal;
let factorAncho = anchoPermitido / anchoOriginal;

const factorReduccion = Math.min(factorAlto, factorLargo, factorAncho);
let nuevoAlto = altoOriginal * factorReduccion;
let nuevoLargo = largoOriginal * factorReduccion;
let nuevoAncho = anchoOriginal * factorReduccion;
alert(
  `Tu maleta es ${nuevoAlto} cm de alto, ${nuevoLargo} cm de largo y ${nuevoAncho} cm de ancho`
);
