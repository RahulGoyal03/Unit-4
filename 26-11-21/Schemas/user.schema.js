const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  gender: String,
  date_of_birth: String,
});

const user = mongoose.model("users", userSchema);

module.exports = user;
