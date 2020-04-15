/**
 * Modulo operation. Operates differently to the remainder (%) JS
 * operator when n is negative.
 * @param {number} n Quotient.
 * @param {number} m Dividend.
 *
 * @example
 * -1 % 4 = -1
 * mod(-1, 4) = 3
 */
const mod = (n, m) => ((n % m) + m) % m;

export default mod;
