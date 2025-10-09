var Joi = require("joi");
var listeProduits = [
  {
    id: 1,
    nom: "Produit 1",
    prix: 225,
    statut: "disponible",
    isdeleted: false,
  },
  {
    id: 2,
    nom: "Produit 2",
    prix: 321,
    statut: "indisponible",
    isdeleted: false,
  },
  {
    id: 3,
    nom: "Produit 3",
    prix: 75,
    statut: "epuise",
    isdeleted: false,
  },
  {
    id: 4,
    nom: "Produit 4",
    prix: 567,
    statut: "disponible",
    isdeleted: false,
  },
];

var produit_schema = Joi.object({
  nom: Joi.string().min(3).required(),
  prix: Joi.number().positive().min(50).max(2000).required(),
  statut: Joi.string().valid("disponible", "indisponible", "epuise"),
});

module.exports.listeProduits = listeProduits;
module.exports.produit_schema = produit_schema;
