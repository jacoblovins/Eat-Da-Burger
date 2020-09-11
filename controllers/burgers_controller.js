// Import all of the necessary dependancies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Get route that returns all burgers
router.get("/", (req, res) => {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// Post rout for adding a new burger
router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    res.json({id: result.insertId});
  });
});

// Put route for updating if the burger has been eaten
router.put("/api/burgers/:id", (req, res) => {
  burger.update(req.params.id, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export the router module
module.exports = router;
