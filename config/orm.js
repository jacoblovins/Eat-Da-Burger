// Import database connection information
const connection = require("./connection.js");

const orm = {

  // Send query to the database grabbing all burgers
  selectAll: (tableInput, cb) => {
    const query = "SELECT * FROM ??";
    return connection.query(query, [tableInput], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  // Insert new burger into the database
  insertOne: (table, colNames, values, cb) => {
    const query = "INSERT INTO ?? (??) VALUES (?)" 
    connection.query(query, [table, colNames, [values]], (err, result) => {
      if (err) throw err;
        cb(result);
    });
  },

  // Update burger in the database
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

// Export the orm module
module.exports = orm;
