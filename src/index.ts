import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.get("/", (req, res) => {
    return res.json("ok");
  });

  app.use(routes);

  return app.listen(process.env.PORT, () =>
    console.log("rodando em ", process.env.PORT)
  );
});
