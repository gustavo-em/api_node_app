import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Entrie } from "./entities/Entries";
import { Payment } from "./entities/Payments";
import { TypeEntry } from "./entities/TypeEntry";
import { User } from "./entities/User";

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  name: process.env.DB_NAME,
  database: process.env.AMBIENT === "dev" ? undefined : process.env.DB_NAME,
  entities: [User, Entrie, Payment, TypeEntry],
  migrations: [`${__dirname} /**/migrations/*.ts`],
  ssl:
    process.env.AMBIENT === "dev"
      ? false
      : {
          rejectUnauthorized: false,
        },
});
