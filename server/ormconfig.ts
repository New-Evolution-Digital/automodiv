import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const config = {
  type: "postgres",
  host: "server_db",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ["src/entities/*.ts"],
  migrationsTableName: "custom_migration_table",
  migrations: ["src/migrations/*.ts"],
  cli: {
    migrationsDir: "migration",
  },
} as ConnectionOptions;
