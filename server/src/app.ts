import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { TestResolver } from "./resolvers";
import { createConnection } from "typeorm";
import { __postgres__, __prod__ } from "./constants";
import { DealershipRootDealerResolver } from "./resolvers/dealershipRootUser.resolver";
import { DealershipOrganization } from "./entities/DealershipOrganization";
import { DealershipRootUser } from "./entities/DealershipRootUser";

export const createServer = async () => {
  await createConnection({
    type: "postgres",
    host: "automodiv_server_db_1",
    port: 5432,
    username: __postgres__.POSTGRES_USER,
    password: __postgres__.POSTGRES_PASSWORD,
    database: __postgres__.POSTGRES_DB,
    entities: ["src/entities/*.ts"],
    logging: !__prod__ && "all",
    logger: "advanced-console",
    synchronize: true,
  });

  const schema = await buildSchema({
    resolvers: [TestResolver, DealershipRootDealerResolver],
    orphanedTypes: [DealershipOrganization, DealershipRootUser],
    dateScalarMode: "timestamp",
  });

  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  const app = express();
  apolloServer.applyMiddleware({
    app,
    cors: { origin: "https://studio.apollographql.com", credentials: true },
  });
  return app;
};
