// turno de la computadora
import { crearCartaHTML } from "./crear-carta-html.js";
import { pedirCarta } from "./pedir-carta.js";
import { valorCarta } from "./valor-carta.js";
/**
 *
 * @param {Number} puntosMinimos Puntos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Elemento Html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento html para mostrar las cartas
 * @param {Array<String>} deck
 */

export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck
) => {
  if (!puntosMinimos) throw new Error("Puntos mínimos son necesarios");
  if (!puntosHTML) throw new Error("Argumento puntsHTML es necesario");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
