const { listeProduits } = require("../models/produit.model");

exports.getAllProducts = (req, res) => {
  let notDeletedProducts = listeProduits.filter(
    (produit) => produit.isdeleted == false
  );
  return res.json(notDeletedProducts);
};
exports.getProduct = (req, res) => {
  let selectedProduit = listeProduits.find(
    (produit) => produit.id == req.params.id
  );
  if (!selectedProduit || selectedProduit.isdeleted == true)
    res
      .status(404)
      .json({ message: `Le produit d'id ${req.params.id} n'existe pas` });
  else res.status(200).json(selectedProduit);
};
exports.updateProduct = (req, res) => {
  let selectedId = req.params.identifiant;
  let i = listeProduits.findIndex((produit) => produit.id == selectedId);
  if (i == -1 || listeProduits[i].isdeleted == true)
    res.status(404).json({
      message: `Le produit d'id ${req.params.identifiant} n'existe pas`,
    });
  else {
    listeProduits[i] = { id: req.params.identifiant, ...req.body };
    res.json({ message: "Mise à jour réussie", listeProduits });
  }
};

exports.addProduct = (req, res) => {
  let newProduct = req.body;
  newProduct.id = crypto.randomUUID();
  // newProduct.isdeleted = false;
  listeProduits.push({ ...newProduct, isdeleted: false });
  res.status(201).json({
    message: "Produit ajouté avec succès",
    listeProduits,
  });
};

exports.deleteProduct = (req, res) => {
  let selectedId = req.params.id;
  let i = listeProduits.findIndex((produit) => produit.id == selectedId);
  listeProduits.splice(i, 1);
  res.status(200).json({
    message: "Produit supprimé avec succès",
    listeProduits,
  });
  //   setTimeout(() => {
  //     listeProduits.splice(i, 1);
  //     res.status(200).json({
  //       message: "Produit supprimé avec succès",
  //       listeProduits,
  //     });
  //   }, 5000);
};

exports.softDeleteProduct = (req, res) => {
  let selectedId = req.params.id;
  let i = listeProduits.findIndex((produit) => produit.id == selectedId);
  if (listeProduits[i].isdeleted == true) {
    res.status(404).json({
      message: `Le produit d'id ${req.params.id} n'existe pas, on peut pas le supprimer`,
    });
  } else {
    listeProduits[i].isdeleted = true;
    res.status(200).json({
      message: "Produit (soft) supprimé avec succès",
      listeProduits,
    });
  }
};
exports.restoreProduct = (req, res) => {
  const selectedId = req.params.id;
  let i = listeProduits.findIndex((produit) => produit.id == selectedId);
  if (i == -1) {
    res.status(404).json({
      message: `Aucun produit avec cet id ne peut être restauré`,
    });
  } else {
    listeProduits[i].isdeleted = false;
    res.status(200).json({
      message: "Produit (soft) supprimé avec succès",
      listeProduits,
    });
  }
};
exports.searchProducts = (req, res) => {
  //   let x = 10;
  //   x += +req.query.prixmin;
  //   console.log(x);
  let t = listeProduits.filter(
    (produit) =>
      produit.prix >= req.query.prixmin && produit.prix <= req.query.prixmax
  );
  return res.json({ tab: t });
  //console.log("Traitement après l'envoie de la réponse");
};

exports.getM2i = (req, res) => {
  res.send("<h1>Premier test de notre API</h1>");
};
exports.getIntro = (req, res) => {
  console.log(req);

  res.sendFile(`index.html`); // SendFile exige un chemin absolu
};
exports.addExample = (req, res) => {
  console.log(req);
  console.log(req.body);
  res.json({ message: "body parfaitement récupéré" });
};
