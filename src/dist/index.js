"use strict";
exports.__esModule = true;
var express_1 = require("express");
var data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(function () {
    var app = express_1["default"]();
    app.use(express_1["default"].json());
    app.get("/", function (req, res) {
        return res.json("ok");
    });
    return app.listen(process.env.PORT, function () {
        return console.log("rodando em ", process.env.PORT);
    });
});
