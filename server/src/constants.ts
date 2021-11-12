import dotenv from "dotenv-safe";

const { required, error, parsed } = dotenv.config();

console.log(required, error, parsed);

export const __prod__ = false;
