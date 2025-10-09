const express = require("express");
const { createBook, getAllBooks } = require("../controllers/book.controller");

const router = express.Router();

router.post("/add", createBook);
router.get("/all", getAllBooks);

module.exports = router;
