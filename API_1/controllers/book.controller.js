const Book = require("../models/book.model");

exports.createBook = async (req, res) => {
  let newBook = new Book(req.body);

  try {
    let data = await newBook.save();
    return res.status(201).json({
      message: "Livre créé avec succès",
      data,
    });
  } catch (err) {
    next(err);
  }
};
