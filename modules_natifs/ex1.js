const fs = require("fs");

fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Erreur dans la tentative de lecture du fichier", err);
    return;
  }
  console.log("Contenu du fichier :", data);

  const nouvelleLigne = `
  Nouvelle Ligne ajoutée le ${new Date().toLocaleString()}`;
  fs.appendFile("notes.txt", nouvelleLigne, (err) => {
    if (err) {
      console.log("Erreur dans la tentative d'écriture du fichier", err);
    } else {
      console.log("Mise à jour réussie du fichier");
    }
  });
});
