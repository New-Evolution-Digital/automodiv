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
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
}

const requiredEnvVars = [
  "JWT_SECRET",
  "REDIS_URL",
  "MYSQL_USER",
  "MYSQL_PASSWORD",
  "MYSQL_DATABASE",
]

export const checkEnvVars = () => {
  for (const key of requiredEnvVars) {
    if (!!process.env[key]) {
      throw new Error(`Missing ${key} environment variable`)
    }
  }
}
