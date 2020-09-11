// Import the ORM to interact with the database.
const orm = require("../config/orm.js");


// Grab all burgers
const burger = {
  all: (cb) => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  // Create a new burger
  create: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, res => {
      cb(res);
    });
  },
  // Update if burger has  been eaten
  update: (id, cb) => {
    orm.updateOne(id, res => {
      cb(res);
    });
  }
};

// Export the burger module
module.exports = burger;
