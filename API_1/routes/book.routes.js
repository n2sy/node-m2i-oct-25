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

router.post("/add", isAuth, role("admin"), createBook);
router.get("/all", getAllBooks);
router.get("/deleted/all", getAllDeletedBooks);
router.get("/filter", isAuth, searchBooks);
router.get("/:id", isAuth, role("admin"), getBookById);
router.put("/:id", isAuth, updateBook);
router.delete("/:id", isAuth, role("admin"), deleteBook);
router.patch("/:id", isAuth, role("admin"), restoreBook);

module.exports = router;
