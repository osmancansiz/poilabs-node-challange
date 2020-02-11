var express = require("express");
var router = express.Router();

const Points = require("../models/Points");

router.get("/", async (req, res) => {
  try {
    const points = await Points.find({});
    res.send(points);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
