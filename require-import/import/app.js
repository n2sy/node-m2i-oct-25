//const operations = require("operations.js");

import multiplier from "./operations.js";
import { additionner as somme } from "./operations.js";

// const { additionner, multiplier: produit } = require("./operations.js");

console.log("Adddition de 3 et 4 =", somme(3, 4));
console.log("Produit de 3 et 4 =", multiplier(3, 4));
