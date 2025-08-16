import { ENV } from "./src/config/env.js";
import dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: { url: ENV.DATABASE_URL },
};
