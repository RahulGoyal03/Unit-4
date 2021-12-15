const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  Book: { type: String, required: true },
  aurthor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: true,
  },
  section_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sections",
    required: true,
  },
  checked: { type: Boolean, required: false },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
});

const book = mongoose.model("books", bookSchema);

module.exports = book;

