import { nanoid } from "nanoid";

/**
 * Generates a random unique id.
 * @param {string} prefix String to prefix id with.
 */
const uniqueId = (prefix) => `${prefix}${nanoid(5)}`;

export default uniqueId;
