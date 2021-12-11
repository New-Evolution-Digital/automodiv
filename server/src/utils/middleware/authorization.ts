import { ApolloError } from "apollo-server-express"
import { MiddlewareFn } from "type-graphql"

const isLoggedIn: MiddlewareFn<ServerContext> = async ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new ApolloError("User Is Not Authenticated")
  }
  return next()
}

export { isLoggedIn }
