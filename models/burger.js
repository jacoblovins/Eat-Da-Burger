// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");


// create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, res => {
      cb(res);
    });
  },
  update: (id, cb) => {
    orm.updateOne(id, res => {
      cb(res);
    });
  }
};


module.exports = burger;
