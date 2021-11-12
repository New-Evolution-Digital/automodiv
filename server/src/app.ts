import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { TestResolver } from "./resolvers";

export const createServer = async () => {
  const schema = await buildSchema({ resolvers: [TestResolver] });
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  const app = express();
  apolloServer.applyMiddleware({
    app,
    cors: { origin: "https://studio.apollographql.com", credentials: true },
  });
  return app;
};
