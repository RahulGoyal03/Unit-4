const mongoose = require("mongoose");

const evalSchema = new mongoose.Schema({
  date: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  topic: String,
  studentId: [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }],
  studentScore: [Number],
});

const evaluations = mongoose.model("evaluations", evalSchema);

module.exports = evaluations;

/*const authorise = (permission) => {
  return (req, res, next) => {
    const originalSendFunc = res.send.bind(res);
    res.send = function (body) {
      body.name = "Nrupul Dev";
      console.log(body); // do whatever here
      return originalSendFunc(body);
    };
    next();
  };
};
*/
