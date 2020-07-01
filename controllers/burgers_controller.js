const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let output = {
      burger: data
    };
    res.render("index", output);
  });
});

router.post("/api/add-burger", function (req, res) {
  console.log("ROUTE: ", req.body.name)
  burger.insertOne(req.body.name, function (data) {
  });
});

router.put("/api/eat-burger", function (req, res) {
  burger.updateOne(req.body.id, function (data) {
  });
});

module.exports = router;