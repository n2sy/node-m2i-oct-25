const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.inscription = async (req, res, next) => {
  try {
    let { name, username, email, password, role } = req.body;
    let userExistant = await User.findOne({ email: email });
    if (userExistant) {
      let error = new Error(
        "Il y a un utilisateur déjà inscrit avec cet email"
      );
      throw error;
    } else {
      let cryptedPassword = await bcrypt.hash(password, 10);
      let newUser = new User({
        name,
        username,
        email,
        password: cryptedPassword,
        role: role || "user",
      });
      let data = await newUser.save();
      res.status(201).json({
        message: "Utilisateur créé avec succès",
        infos: data,
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.authentification = async (req, res, next) => {
  let { identifiant, password } = req.body;
  try {
    let u = await User.findOne({
      $or: [{ email: identifiant }, { username: identifiant }],
    });
    if (!u) {
      let error = new Error("Aucun utilisateur avec cet identifiant");
      error.statusCode = 404;
      throw error;
    } else {
      let resultMatching = await bcrypt.compare(password, u.password);
      if (!resultMatching) {
        let error = new Error("Mot de passe erroné");
        throw error;
      } else {
        const generatedToken = jwt.sign(
          {
            // name: u.name,
            // role: u.role,
            id: u.id,
          },
          process.env.secret,
          {
            expiresIn: "1d",
          }
        );
        res.status(200).json({
          message: "Utilisateur authentifé avec succès",
          token: generatedToken,
          role: u.role,
        });
      }
    }
  } catch (err) {
    next(err);
  }
};
