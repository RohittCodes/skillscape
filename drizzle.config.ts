import type { Config } from "drizzle-kit";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.log("🔴 Cannot find database url");
}

export default {
  schema: "./lib/supbase/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  },
} satisfies Config;
