const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

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
        data,
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.authentification = (req, res, next) => {};
