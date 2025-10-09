const express = require("express"); // ou import express from "express";
const produitRoutes = require("./routes/produit.routes");
const app = express();

let tab = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/produits", produitRoutes);

app.use((error, req, res, next) => {
  const statusPersonnalise = error.statusCode || 500;
  const message = error.message || "Erreur interne au serveur";

  console.log("On est dans le controleur de la gestion des erreurs");

  res.status(statusPersonnalise).json({ message });
});
// app.get("/m2i", (req, res) => {
//   res.send("<h1>Premier test de notre API</h1>");
// });

// app.get("/intro", (req, res) => {
//   console.log(req);

//   res.sendFile(`index.html`); // SendFile exige un chemin absolu
// });

// app.get("/form", (req, res) => {
//   res.sendFile(`${__dirname}/index.html`);
// });

// app.post("/add", (req, res) => {
//   console.log(req);
//   console.log(req.body);
//   res.json({ message: "body parfaitement récupéré" });
// });

// app.post("/new", (req, res) => {
//   console.log(req);
//   tab.push(req.body);
//   res.json({ message: "Produit ajouté", Produits: tab });
// });

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
