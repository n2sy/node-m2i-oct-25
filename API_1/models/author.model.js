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

authorSchema.virtual("livres", {
  ref: "Book",
  localField: "_id",
  foreignField: "author",
  justOne: false,
});

module.exports = mongoose.model("Author", authorSchema);
