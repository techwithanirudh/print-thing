import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

import { db } from '@/server/db';
import * as schema from "@/server/db/schema"
import { headers } from "next/headers"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema
  }),
  emailAndPassword: {
    enabled: true
  }
})

export const getSession = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};