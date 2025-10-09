const express = require("express");
const {
  createAuthor,
  getAllAuthors,
} = require("../controllers/author.controller");

const router = express.Router();

router.post("/add", createAuthor);
router.get("/all", getAllAuthors);

module.exports = router;
