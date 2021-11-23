import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import connectRedis from "connect-redis";
import session from "express-session";
import Redis from "ioredis";
import morgan from "morgan";

import {
  DoorResolver,
  EmployeeResolver,
  OrgResolver,
  RootUserResolver,
} from "./resolvers";
import { __postgres__, __prod__, __mysql__ } from "./constants";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { DealershipOrganization } from "./entities/DealershipOrganization";
import { DealershipRootUser } from "./entities/DealershipRootUser";
import { DealershipDoor } from "./entities/DealershipDoor";
import { Employee } from "./entities";

export const createServer = async () => {
  await createConnection({
    type: "mysql",
    host: "automodiv_server_db_1",
    username: __mysql__.MYSQL_USER,
    port: 3306,
    password: __mysql__.MYSQL_PASSWORD,
    database: __mysql__.MYSQL_DB,
    entities: [
      DealershipOrganization,
      DealershipRootUser,
      DealershipDoor,
      Employee,
    ],
    logging: !__prod__ && "all",
    logger: "advanced-console",
    synchronize: true,
  });

  const redisStore = connectRedis(session);
  let redis: Redis.Redis;
  if (process.env.REDIS_URL) redis = new Redis(process.env.REDIS_URL);
  else redis = new Redis(6379, "automodiv_server_redis_1");

  const schema = await buildSchema({
    resolvers: [OrgResolver, RootUserResolver, EmployeeResolver, DoorResolver],
    dateScalarMode: "timestamp",
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  const app = express();

  !__prod__ && app.use(morgan("dev"));
  app.use(
    session({
      name: "amdid",
      store: new redisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "lax",
        secure: __prod__,
      },
      secret: "secret",
      resave: false,
      saveUninitialized: false,
    })
  );

  apolloServer.applyMiddleware({
    app,
    cors: { origin: "http://localhost:3000", credentials: true },
  });
  return app;
};
