
// src/plugins/cors.ts

import fp from "fastify-plugin";
import cors from "@fastify/cors";
import { FastifyPluginAsync } from "fastify";

const corsPlugin: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(cors, {
    origin: true, 
    credentials: true,
  });
});

export default corsPlugin;