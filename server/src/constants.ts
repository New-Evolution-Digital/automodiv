import dotenv from "dotenv"

dotenv.config()

export const __prod__ = process.env.NODE_ENV === "production"

export const __jwt__ = {
  secret: process.env.JWT_SECRET as string,
}

export const __redis__ = {
  REDIS_URL: process.env.REDIS_URL,
}

export const __mysql__ = {
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DB: process.env.MYSQL_DB,
}
