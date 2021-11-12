"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
const createServer = async () => {
    const schema = await (0, type_graphql_1.buildSchema)({ resolvers: [resolvers_1.TestResolver] });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema });
    await apolloServer.start();
    const app = (0, express_1.default)();
    apolloServer.applyMiddleware({
        app,
        cors: { origin: "https://studio.apollographql.com", credentials: true },
    });
    return app;
};
exports.createServer = createServer;
//# sourceMappingURL=app.js.map