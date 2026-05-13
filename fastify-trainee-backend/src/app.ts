// src/app.ts

import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import jwt from "@fastify/jwt";

import { env } from "./config/env.js";
import corsPlugin from "./plugins/cors.js";
import { AppError } from "./shared/errors/AppError.js";

export function buildApp() {
    
  const app = Fastify({ logger: true });

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(jwt, { secret: env.JWT_SECRET });
  app.register(corsPlugin);

  app.setErrorHandler((error, _req, reply) => {
    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({ message: error.message });
    }
    app.log.error(error);
    return reply.status(500).send({ message: "Internal server error" });
  });

  app.get("/", async () => {
    return { message: "🚀 Trainee backend is running!" };
  });

  return app;
}