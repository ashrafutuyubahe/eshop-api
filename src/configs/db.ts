import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:123@localhost:5432/hono_db",
});

client.connect();

export const db = drizzle(client);
