const connection = require("./connection.js");

const orm = {

  selectAll: (tableInput, cb) => {
    const query = "SELECT * FROM ??";
    return connection.query(query, [tableInput], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (table, colNames, values, cb) => {
    const query = "INSERT INTO ?? (??) VALUES (?)" 
    connection.query(query, [table, colNames, [values]], (err, result) => {
      if (err) throw err;
        cb(result);
    });
  },

  updateOne: (id, cb) => {
    const query = "UPDATE burgers SET devoured = 0 WHERE id = ?" 
    connection.query(query, [id], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
