const express = require("express");
const produitControllers = require("../controllers/produit.controller");
// const { getM2i, getIntro } = require("../controllers/produit.controller")

const router = express.Router();

router.get("/all", produitControllers.getAllProducts);
router.get("/search", produitControllers.searchProducts);
router.get("/:id", produitControllers.getProduct);
router.post("/new", produitControllers.addProduct);
router.put("/edit/:identifiant", produitControllers.updateProduct);
router.delete("/delete/:id", produitControllers.deleteProduct);
router.delete("/softdelete/:id", produitControllers.softDeleteProduct);
router.patch("/restore/:id", produitControllers.restoreProduct);

router.get("/m2i", produitControllers.getM2i);
router.get("/intro", produitControllers.getIntro);
router.post("/add", produitControllers.addExample);

module.exports = router;
