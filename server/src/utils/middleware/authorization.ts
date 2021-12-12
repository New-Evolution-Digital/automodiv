import { ApolloError } from "apollo-server-express"
import { MiddlewareFn } from "type-graphql"
import { FindOneOptions } from "typeorm"
import { DealershipUser } from "../../entities"
import { JwtHandler } from "../jwtHandler"

const findUserById = async (
  id: number | string,
  options?: FindOneOptions<DealershipUser>
) => {
  return await DealershipUser.findOne({
    ...options,
    relations: options?.relations || ["dealershipOrganization"],
    where: options?.where || {
      id: id,
    },
  })
}

const isLoggedIn: MiddlewareFn<ServerContext> = async ({ context }, next) => {
  if (context.req.session.userId) return next()

  const token = context.req.headers.authorization
  if (token) {
    const jwtContent = new JwtHandler().verifyJWT(token.split(" ")[1])
    if (typeof jwtContent !== "string") {
      const { payload } = jwtContent
      if (payload.userId && payload.orgKey) {
        const foundUser = await findUserById(payload.userId, { select: ["id"] })
        if (foundUser) {
          context.req.session.userId = foundUser.id
          return next()
        }
      }
    }
  }

  throw new ApolloError("User Is Not Authenticated")
}

export { isLoggedIn }
