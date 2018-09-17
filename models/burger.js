// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
};
// Export the database functions for the controller.
module.exports = burger;