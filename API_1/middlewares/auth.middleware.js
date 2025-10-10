const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

require("dotenv").config();

const isAuth = async (req, res, next) => {
  let authValue = req.header("Authorization");
  if (!authValue) {
    let error = new Error("Utilisateur non authentifié");
    error.statusCode = 401;
    next(error);
  } else {
    let tokenRecupere = authValue.split(" ")[1];
    //  let tokenRecupere = authValue.replace("Bearer ", "")
    try {
      const decodedToken = jwt.verify(tokenRecupere, process.env.secret);
      console.log(decodedToken);
      let user = await User.findById(decodedToken.id);

      req.roleUser = user.role;

      next();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = isAuth;
