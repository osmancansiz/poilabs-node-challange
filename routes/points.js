var express = require("express");
var router = express.Router();

const Points = require("../models/Points");

router.get("/", function(req, res, next) {
  Points.find({}).then(function(points) {
    console.log(points.title);
    res.send(points);
  });
});


module.exports = router;
