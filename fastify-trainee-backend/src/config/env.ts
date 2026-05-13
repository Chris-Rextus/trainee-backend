// src/config/env.ts

import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().default("postgresql://user:password@localhost:5432/trainee_db"),
  JWT_SECRET: z.string().default("dev-secret-placeholder-change-me"),
  PORT: z.coerce.number().default(3000),
});

export const env = envSchema.parse(process.env);