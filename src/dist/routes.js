"use strict";
exports.__esModule = true;
var express_1 = require("express");
var GptController_1 = require("./controllers/GptController");
var UserController_1 = require("./controllers/UserController");
//import gptRoute from "./routes/gptRoute";
var routes = express_1.Router();
//routes.use(gptRoute);
routes.post("/gpt", new GptController_1.GptController().send);
routes.post("/user", new UserController_1.UserController().create);
exports["default"] = routes;