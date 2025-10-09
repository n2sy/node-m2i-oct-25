const AuthorModel = require("../models/author.model");

exports.createAuthor = async (req, res, next) => {
  try {
    let newAuthor = new AuthorModel(req.body);
    let data = await newAuthor.save();
    res.json({
      message: `L'auteur ${data.prenom} ${data.nom} a été créé avec succès`,
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllAuthors = async (req, res, next) => {
  try {
    let data = await AuthorModel.find();
    res.json({ ListeAuteurs: data });
  } catch (err) {
    next(err);
  }
};
