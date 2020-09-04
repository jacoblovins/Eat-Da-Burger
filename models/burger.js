// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      console.log(res)
      console.log("burger.js")
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals) {
    orm.insertOne("burgers", cols, vals, function(res) {
      // cb(res);
    });
  },
  update: function(objColVals, condition) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      // cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
