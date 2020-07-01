const connection = require("../config/connection.js");
const util = require("util");
// Object for all our SQL statement functions.
let orm = {
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO ?? (??) VALUES (?)`;
    console.log(queryString)
    console.log(table,cols,vals)
    connection.query(queryString, [table, cols, vals], function(err, result) {
    //connection.query(`INSERT INTO ${table} (${cols}) VALUES ("${vals}")`, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {
    console.log(table)
    console.log(objColVals)
    console.log(condition)
    let queryString = "UPDATE burgers SET devoured=true WHERE ";

    queryString += condition;
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;

