import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import express from "express"
import { buildSchema } from "type-graphql"
import { createConnection } from "typeorm"
import connectRedis from "connect-redis"
import session from "express-session"
import Redis from "ioredis"
import morgan from "morgan"
import { __prod__, __mysql__, checkEnvVars, __redis__ } from "./constants"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

export const createServer = async () => {
  checkEnvVars()

  await createConnection({
    type: "mysql",
    host: "automodiv_server_db_1",
    username: __mysql__.MYSQL_USER,
    port: 3306,
    password: __mysql__.MYSQL_PASSWORD,
    database: __mysql__.MYSQL_DATABASE,
    entities: [__dirname + "/**/*.entity.ts"],
    logging: !__prod__ && "all",
    logger: "debug",
    synchronize: !__prod__,
  })

  const redisStore = connectRedis(session)
  let redis: Redis.Redis
  if (!__redis__.REDIS_URL!.includes("automodiv_server_redis_1"))
    redis = new Redis(__redis__.REDIS_URL)
  else redis = new Redis(6379, "automodiv_server_redis_1")

  const schema = await buildSchema({
    resolvers: [__dirname + "/**/*.resolver.ts"],
    dateScalarMode: "timestamp",
  })

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  })

  await apolloServer.start()

  const app = express()

  !__prod__ && app.use(morgan("dev"))
  app.use(
    session({
      name: "amdid",
      store: new redisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "lax",
        secure: __prod__,
      },
      secret: __redis__.REDIS_SECRET!,
      resave: false,
      saveUninitialized: false,
    })
  )

  apolloServer.applyMiddleware({
    app,
    cors: { origin: "http://localhost:3000", credentials: true },
  })
  return app
}
