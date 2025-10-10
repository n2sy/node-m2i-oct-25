const express = require("express");
const {
  inscription,
  authentification,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", inscription);
router.post("/login", authentification);

module.exports = router;
