import { nanoid } from "nanoid";

export default (prefix) => `${prefix}${nanoid(5)}`;
