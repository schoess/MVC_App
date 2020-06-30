const orm = require("../config/orm.js");


let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (newName, cb) {
    orm.insertOne("burgers", "burger_name", newName, function (res) {
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    orm.updateOne("burgers", "devoured", true, id, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;