const express = require("express");

const router = express.Router();
const evaluations = require("../Schemas/evaluation.schema");
router.get("/evaluationsId=:evalId", async (req, res) => {
  try {
    let data = await evaluations
      .findById(req.params.evalId)
      .populate("userId")
      .populate("studentId")
      .populate({
        path: "studentId",
        populate: {
          path: "userId",
        },
      })
      .lean()
      .exec();
    res.send(data);
  } catch (err) {
    res.send({ message: err.message });
  }
});

module.exports = router;
