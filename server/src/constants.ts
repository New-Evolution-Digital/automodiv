import dotenv from "dotenv";

dotenv.config();

export const __prod__ = process.env.NODE_ENV === "production";
export const __postgres__ = {
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
};
