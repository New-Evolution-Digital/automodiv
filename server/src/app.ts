import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { TestResolver } from "./resolvers";
import { createConnection } from "typeorm";
import { __prod__ } from "./constants";
import { config } from "../ormconfig";

export const createServer = async () => {
  await createConnection({ ...config, logging: !__prod__ });

  const schema = await buildSchema({
    resolvers: [TestResolver],
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
