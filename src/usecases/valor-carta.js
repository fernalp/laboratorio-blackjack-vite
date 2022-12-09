/**
 * Esta funcion toma la carta con su valor en string y devuelve el valor numerico
 * @param {String} carta
 * @returns {Number}
 */

export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
