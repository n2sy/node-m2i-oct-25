const express = require("express");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  getAllDeletedBooks,
} = require("../controllers/book.controller");

const router = express.Router();

router.post("/add", createBook);
router.get("/all", getAllBooks);
router.get("/deleted/all", getAllDeletedBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
