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

  insertOne: function(table, colNames, values) {
    var query = "INSERT INTO ?? (??) VALUES (?)" 
 
    // console.log(queryString);
    connection.query(query, [table, colNames, [values]], function(err, result) {
      if (err) throw err;
      console.log(result);
        // cb(result);
    });
  },

  updateOne: function(table, objColVals, colName, value) {
    var query = "UPDATE ?? SET ? WHERE ?? = ?" 
    console.log(queryString);
    connection.query(query, [table, objColVals, colName, value], function(err, result) {
      if (err) {
        throw err;
      }
      // cb(result);
    });
  },
};

module.exports = orm;
