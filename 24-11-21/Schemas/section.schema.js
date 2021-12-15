const mongoose = require("mongoose");
const sectionSchema = new mongoose.Schema({
  sectionName: String,
});

const section = mongoose.model("sections", sectionSchema);

module.exports = section;
