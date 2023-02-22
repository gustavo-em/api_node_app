import { Router } from "express";
import { GptController } from "./controllers/GptController";
import { UserController } from "./controllers/UserController";
//import gptRoute from "./routes/gptRoute";

const routes = Router();

//routes.use(gptRoute);

routes.post("/gpt", new GptController().send);
routes.post("/user", new UserController().create);

export default routes;
