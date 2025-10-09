const mongoose = require("mongoose");

let authorSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);
