var connection = require("./connection.js");

var orm = {

  selectAll: function(tableInput, cb) {
    var query = "SELECT * FROM ??";
    return connection.query(query, [tableInput], function(err, result) {
      if (err) throw err;
      // console.log(result);
      // return result
      cb(result);
    });
  },

  insertOne: function(table, colNames, values, cb) {
    var query = "INSERT INTO ?? (??) VALUES (?)" 
 
    console.log(query);
    connection.query(query, [table, colNames, [values]], function(err, result) {
      if (err) throw err;
      console.log(result);
        cb(result);
    });
  },

  updateOne: function(id, cb) {
    var query = "UPDATE burgers SET devoured = 0 WHERE id = ?" 
    console.log(query);
    connection.query(query, [id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
