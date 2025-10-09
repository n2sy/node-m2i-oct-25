const express = require("express");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  getAllDeletedBooks,
  restoreBook,
  searchBooks,
} = require("../controllers/book.controller");

const router = express.Router();

router.post("/add", createBook);
router.get("/all", getAllBooks);
router.get("/deleted/all", getAllDeletedBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.patch("/:id", restoreBook);
router.get("/filter", searchBooks);

module.exports = router;
