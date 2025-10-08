const path = require("path");

let chemin = "/Users/nidhal/Documents/notes.txt";

console.log("Nom du fichier", path. .basename(chemin)); // ERREUR avec chemin.basename();
console.log("Extension du fichier", path.extname(chemin));
console.log("Repertoire parent", path.dirname(chemin));
