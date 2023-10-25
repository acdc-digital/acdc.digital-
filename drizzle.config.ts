import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  driver: "pg",
  schema: "/Users/matthewsimon/Documents/GitHub/acdc.cooksite/cooksite-ChatComplete/acdc.cooksite/cooksite/src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;

// npx drizzle-kit push:pg