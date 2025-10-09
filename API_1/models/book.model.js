const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      min: 2000,
    },
    genre: {
      type: String,
    },
    avatar: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deleteAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

bookSchema.query.notDeleted = function () {
  return this.where({ isDeleted: false });
};
bookSchema.query.isDeleted = function () {
  return this.where({ isDeleted: true });
};

module.exports = mongoose.model("Book", bookSchema);
