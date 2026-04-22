import { url } from "node:inspector";

    export default {
    schema: "./src/schema/*.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://postgres:123@localhost:5432/hono_db",
    },
    };