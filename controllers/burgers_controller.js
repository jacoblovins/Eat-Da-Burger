const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    res.json({id: result.insertId});
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.update(req.params.id, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
