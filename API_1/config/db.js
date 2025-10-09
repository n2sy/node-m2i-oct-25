const mongoose = require("mongoose");
//const dotenv = require("dotenv");

require("dotenv").config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.projectname}.cpsst.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`
    );
    console.log("Connecté à MongoDB");
    return conn;
  } catch (err) {
    console.log("Problème de connexion avec MongoDB");
  }
};

module.exports = connectDb;
