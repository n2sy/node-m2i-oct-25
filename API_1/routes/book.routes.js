const express = require("express");
const isAuth = require("../middlewares/auth.middleware");
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
router.get("/filter", searchBooks);
router.get("/:id", isAuth, getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.patch("/:id", restoreBook);

module.exports = router;
