import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import {
  DealershipRootDealerResolver,
  OrganizationResolver,
} from "./resolvers";
import { __postgres__, __prod__ } from "./constants";
import { DealershipOrganization } from "./entities/DealershipOrganization";
import { DealershipRootUser } from "./entities/DealershipRootUser";

export const createServer = async () => {
  await createConnection({
    type: "mysql",
    host: "automodiv_server_db_1",
    username: "root",
    password: "password",
    database: "automodiv",
    entities: ["src/entities/*.ts"],
    logging: !__prod__ && "all",
    logger: "advanced-console",
    synchronize: true,
  });

  const schema = await buildSchema({
    resolvers: [DealershipRootDealerResolver, OrganizationResolver],
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
