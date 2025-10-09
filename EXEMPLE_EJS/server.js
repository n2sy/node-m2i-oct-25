const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded());

var listeProduits = [
  {
    nom: "Produit 1",
    prix: 225,
  },
  {
    nom: "Produit 2",
    prix: 321,
  },
  {
    nom: "Produit 3",
    prix: 75,
  },
  {
    nom: "Produit 4",
    prix: 567,
  },
];

app.get("/", (req, res) => {
  res.render("produit", {
    title: "Exercice sur EJS",
    prenom: "Nidhal",
    show: false,
    tab: listeProduits,
  });
});

app.post("/new", (req, res) => {
  listeProduits.push({
    ...req.body,
  });
  //res.redirect("/");
  res.render("produit", {
    title: "Exercice sur EJS",
    prenom: "Nidhal",
    show: false,
    tab: listeProduits,
    message: "Produit bien ajouté",
  });
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
