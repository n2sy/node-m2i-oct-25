const express = require("express");
const produitControllers = require("../controllers/produit.controller");
// const { getM2i, getIntro } = require("../controllers/produit.controller")

const router = express.Router();

router.get("/m2i", produitControllers.getM2i);
router.get("/intro", produitControllers.getIntro);
router.post("/add", produitControllers.addExample);
module.exports = router;
