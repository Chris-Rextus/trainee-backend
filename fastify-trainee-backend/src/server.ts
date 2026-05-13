// src/server.ts

import { buildApp } from "./app.js";
import { env } from "./config/env.js";
import "dotenv/config"

const app = buildApp();

app.listen({ port: env.PORT, host: "0.0.0.0" }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});