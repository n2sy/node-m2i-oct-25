const Book = require("../models/book.model");

exports.createBook = async (req, res) => {
  let newBook = new Book(req.body);

  try {
    let data = await newBook.save();
    return res.status(201).json({
      message: `Le Livre ${data.title} a été créé avec succès`,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllBooks = async (req, res) => {
  let filter = req.query.search;
  try {
    let data = await Book.find({
      title: new RegExp(filter, "i"),
    }).notDeleted();

    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getAllDeletedBooks = async (req, res) => {
  try {
    let data = await Book.find().isDeleted();

    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  let bookId = req.params.id;
  try {
    let b = await Book.findById(bookId).notDeleted();
    if (!b) {
      let error = new Error("Aucun livre n'existe avec cet ID");
      error.statusCode = 404;
      throw error;
    }
    return res.json({ message: "Livre trouvé", livre: b });
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  let bookId = req.params.id;
  try {
    let data = await Book.findByIdAndUpdate(bookId, req.body, {
      new: false,
    }).notDeleted();
    if (!data) {
      let error = new Error("Aucun livre avec cet ID ne peut être mis à jour");
      error.statusCode = 404;
      throw error;
    }
    res.json({
      message: `Livre "${data.title}" a été modifié avec succès en "${req.body.title}"`,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    let b = await Book.findById(req.params.id).notDeleted();
    if (!b) {
      let error = new Error("Aucun livre avec cet ID ne peut être supprimé");
      error.statusCode = 404;
      throw error;
    }

    b.isDeleted = true;
    b.deleteAt = new Date();
    b.save();
    res.json({ message: `Le livre d'id ${req.params.id} a été supprimé` });
  } catch (err) {
    next(err);
  }
};

exports.restoreBook = async (req, res, next) => {
  let bookId = req.params.id;
  try {
    let b = await Book.findOne({ _id: bookId, isDeleted: true });
    if (!b) {
      let error = new Error(
        "Aucun livre (supprimé) avec cet ID ne peut être restauré"
      );
      error.statusCode = 404;
      throw error;
    }
    b.isDeleted = false;
    b.deleteAt = null;
    b.save();
    res.json({ message: `Le livre d'id ${req.params.id} a été restauré` });
  } catch (err) {
    next(err);
  }
};

exports.searchBooks = (req, res, next) => {};
