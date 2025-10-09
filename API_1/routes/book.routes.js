const express = require("express");
const { createBook } = require("../controllers/book.controller");

const router = express.Router();

router.post("/add", createBook);

module.exports = router;
