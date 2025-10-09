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

exports.getAllBooks = (req, res) => {
  let filter = req.query.search;
  Book.find({
    title: new RegExp(filter, "i"),
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};
