const express = require("express");
const isAuth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
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

router.post("/add", isAuth, createBook);
router.get("/all", isAuth, getAllBooks);
router.get("/deleted/all", isAuth, getAllDeletedBooks);
router.get("/filter", isAuth, searchBooks);
router.get("/:id", isAuth, getBookById);
router.put("/:id", isAuth, role("admin"), updateBook);
router.delete("/:id", isAuth, role("admin"), deleteBook);
router.patch("/:id", isAuth, role("admin"), restoreBook);

module.exports = router;
