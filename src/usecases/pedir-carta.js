/**
 * Esta función toma una carta de la baraja
 * @param {Array<String>} deck
 * @returns {String}
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "La baraja no escite o no hay cartas en la baraja";
  }
  const carta = deck.pop();
  return carta;
};
