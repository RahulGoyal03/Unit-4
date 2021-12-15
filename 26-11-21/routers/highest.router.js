const express = require("express");

const router = express.Router();
const evaluations = require("../Schemas/evaluation.schema");
const student = require("../Schemas/student.schema");
const user = require("../Schemas/user.schema");

router.get("/evaluationsId=:evalId", async (req, res) => {
  let data = await evaluations
    .find({ evalId: req.params.evalId })
    .lean()
    .exec();

  let maxScore = Math.max(...data[0].studentScore);
  let maxIndex = data[0].studentScore.indexOf(maxScore);

  let studentHighestScore = await student
    .findById(data[0].studentId[maxIndex])
    .populate("userId")
    .lean()
    .exec();
  // let userData = await user.findById(studentHighestScore.userId).lean().exec();
  // res.send({ ...userData, batch: studentHighestScore.batch });
  res.send(studentHighestScore);
});

module.exports = router;
