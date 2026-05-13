// src/plugins/db.ts

import fp from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";
import { PrismaClient } from ".prisma/client";

const prismaPlugin: FastifyPluginAsync = fp(async (fastify) => {
    
  const prisma = new PrismaClient();

  fastify.decorate("prisma", prisma);

  fastify.addHook("onClose", async (app) => {
    await app.prisma.$disconnect();
  });
});

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export default prismaPlugin;