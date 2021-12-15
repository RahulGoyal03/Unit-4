const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

const author = mongoose.model("authors", authorSchema);

module.exports = author;
