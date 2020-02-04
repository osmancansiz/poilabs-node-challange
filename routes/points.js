var express = require("express");
var router = express.Router();

const Points = require("../models/Points");

/* GET users listing. */
router.get("/", function(req, res, next) {
  Points.find({}).then(function(points) {
    res.send(points);
  });
  //res.send("respond with a resource");
});

module.exports = router;
