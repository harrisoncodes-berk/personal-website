const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  yearRead: { type: Number, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model("Book", bookSchema);