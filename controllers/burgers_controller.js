const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function (req, res) {
    console.log('GET burgers html request received');
    burger.all(function (data) {
        res.render("index", data);
    });
});

router.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        return res.json(data);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log('POST burgers api request received');
    console.log(`req.body.name=${req.body.name}`);
    burger.create(['burger_name'], [req.body.name], function (data) {
        console.log('Burger created');
        res.status(200);
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log('PUT burgers api request received');
    var burger_id = req.params.id;
    burger.update({ devoured: 1 }, `id=${burger_id}`, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.redirect('/');
        }
    });

});

// Export routes for server.js to use.
module.exports = router;