"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var port = process.env.DB_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME
});
