"use strict";
exports.__esModule = true;
var express_1 = require("express");
var GptController_1 = require("../controllers/GptController");
var gptRoute = express_1.Router();
gptRoute.post("/gpt", new GptController_1.GptController().send);
exports["default"] = gptRoute;
