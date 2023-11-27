let saldo = 2500000;
let continuar = true;
let diasVagaciones = 0;
let gastos = 0;

//caso 1
do {
  const opcion = prompt(`*** Aeropuerto el Dorado ***
  1. Compra una almojábana con gaseosa son 15.000
  2. Compra un Subway con gaseosa 23.000
  3. No compra nada`);

  switch (opcion) {
    case "1":
      saldo = saldo - 15000;
      gastos += 15000;
      alert(`Su saldo es $ ${saldo}`);
      continuar = false;
      break;
    case "2":
      saldo = saldo - 23000;
      gastos += 23000;
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
alert(`Es un poco mas grande del tamaño normal.
Retira las prendas que consideres necesarias para obtener las dimensiones adecuadas.
¡Retirando prendas ... !`);
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
alert(`Las nuevas dimensiones cumplen con los estanderes establecidos`);

//caso 3

alert(`!!!Bienvenido a Medellin!!!
Recordatorio!: debes estar por lo menos 20 minutos antes en sala de espera para abortar tu proximo vuelo`);
alert(`Confirma tu Reserva`);
alert(`Buscando red WiFi...`);
const redWiFi = `Nuenva red disponible: 
ElPassEs: 01110010_01101001_01110111_01101001`;
alert(`${redWiFi}`);
alert(`***Hacking WiFi Passwords***`);
let claveWiFi = redWiFi.slice(34, 69);
claveWiFi = claveWiFi.split("_");
let contraseña = "";
for (const i of claveWiFi) {
  const decimal = parseInt(i, 2);
  const letra = String.fromCharCode(decimal);
  contraseña += letra;
}
alert(`Clave WiFi obtenida: ${contraseña} 
Reserva Confirmada con exito`);
saldo = saldo - 50000;
gastos += 50000;
alert(`Se ha generado un cobro de $ ${50000}
Concepto: Uso WiFi/hora`);
alert(`Tu saldo actual es de $ ${saldo}`);

//caso 4
alert(`¡Bienvenido a Macondo!`);

do {
  continuar = true;
  const opcion = prompt(`*** Herramienta Comunicacion Macondo ***
  1. Ingresa la frase deseada.
  2. Salir`);

  switch (opcion) {
    case "1":
      let frase = prompt("Traducir: ");
      alert(`Traduciendo ...`);
      frase = frase.replace(/[aeou]/g, "i");
      alert(frase);
      break;

    default:
      continuar = false;
      break;
  }
} while (continuar);

//caso 5
alert(`Llegaste al Hotel:`);
alert(`Taxista: Siriin $ 300 000 pir il sirvicii`);
alert(`Viejo ladron ! juguemos piedra, papel o tijera, si gano se va a dormir sin plata,
si ganas pues me tumba`);
do {
  continuar = true;
  const opcion = prompt(`*** Que Inicie el Juego ***
  1.Piedra
  2.Papel
  3.Tijera
  Elige una opcion`);
  let taxi = Math.random();
  console.log(Math.ceil(taxi * 3));
  switch (opcion) {
    case "1":
      if (taxi == 3) {
        alert(`Has ganado !!!
        Pi li cisi viiji lidrin`);
        continuar = false;
      } else if (taxi == 2) {
        saldo = saldo - 300000;
        gastos += 300000;
        alert(`DX ...
        Nuevo saldo disponible $ ${saldo}`);
        continuar = false;
      } else {
        alert(`Volver a jugar!!!`);
      }
      break;
  }
} while (continuar);

//caso 6
alert(
  `Bienvenido al Hotel "SI SOBREVIVES TE DEVOLVEMOS EL 10%"!!! el costo por día es $300.000`
);
let vivo = true;
const costoDiaH = 300000;
let costoTotalH = 0;
const vestuario = ["Amarillo", "Verde", "Rojo", "Azul"];
let op = "";
while ((diasVagaciones <= 4, !vivo)) {
  const opcion = prompt(`*** Vestuario ***
  Elige el color de prenda que deseas usar el dia de hoy !!!
  1.${vestuario[0]}
  2.${vestuario[1]}
  3.${vestuario[2]}  
  4.${vestuario[3]}  
  *** ***`);
  switch (opcion) {
    case "1":
      alert(`Elegiste ${vestuario[opcion - 1]} `);
      op = prompt(`DIA DE PISCINA !!!
      Deseas meterte a la piscina ???
      S/N`);
      if (op.toUpperCase() == "s") {
        vivo = false;
        diasVagaciones++;
        costoTotalH = diasVagaciones + costoDiaH;
        saldo -= costoTotalH;
        gastos += costoTotalH;
        alert(`Se te hizo la moricion !!!`);
        alert(`El total de dias Vagacionados fueron ${diasVagaciones}
        El gasto total fue de $ ${gastos}
        Dejaste por heredar $ ${saldo}
        `);
      } else {
        alert(`Esperemos que el proximo día sea mucho mejor!!!`);
        diasVagaciones++;
        costoTotalH = diasVagaciones + costoDiaH;
        saldo -= costoTotalH;
        gastos += costoTotalH;
        alert(`Nuevo saldo disponible $ ${saldo}`);
      }
      break;
    case "2":
      alert(`Elegiste ${vestuario[opcion - 1]}`);
      op = prompt(`DIA DE CAMINATA !!!
        Deseas realizar toda la caminata ???
        S/N`);
      if (op.toUpperCase() == "s") {
        vivo = false;
        diasVagaciones++;
        costoTotalH = diasVagaciones + costoDiaH;
        saldo -= costoTotalH;
        gastos += costoTotalH;
        alert(`Te perdiste y un jaguar te encontro ... 
        Se te hizo la moricion !!!`);
        alert(`El total de dias Vagacionados fueron ${diasVagaciones}
        El gasto total fue de $ ${gastos}
        Dejaste por heredar $ ${saldo}
        `);
      } else {
        alert(`Esperemos que el proximo día sea mucho mejor!!!`);
        diasVagaciones++;
        costoTotalH = diasVagaciones + costoDiaH;
        saldo -= costoTotalH;
        gastos += costoTotalH;
        alert(`Nuevo saldo disponible $ ${saldo}`);
      }
      break;

    default:
      break;
  }
}
