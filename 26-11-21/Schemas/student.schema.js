const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  batch: String,
  userId: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
});

const student = mongoose.model("students", studentSchema);

module.exports = student;
