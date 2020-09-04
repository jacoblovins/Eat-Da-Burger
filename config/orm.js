var connection = require("./connection.js");

var orm = {

  selectALl: function(tableInput) {
    var query = "SELECT * FROM ??";
    connection.query(query, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(whatToSelect, table, orderCol) {
    var query = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    // console.log(queryString);
    connection.query(query, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var query = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(query, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
