import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql"
import argon from "argon2"
import { DealershipUser } from "../entities/DealershipUser"
import { InputNewUser, UserLogin } from "./InputTypes"
import * as misc from "../utils/misc"
import { DealershipOrganization } from "../entities/DealershipOrganization"
import { ApolloError } from "apollo-server-express"
import { UserAuthReturn } from "./ReturnTypes"
import { HandleJWT } from "../utils/jwtHandler"

const createUserJWT = (id: number, key: string) => {
  return new HandleJWT().createIdJWT({
    userId: id,
    orgKey: key,
  })
}

@Resolver(DealershipUser)
class RootUserResolver {
  @Query(() => DealershipUser)
  async me(@Ctx() { req }: ServerContext) {
    if (!req.session.userId) {
      return new ApolloError("No authenticated user")
    }

    const user = await DealershipUser.findOne(req.session.userId, {
      relations: ["dealershipOrganization", "dealershipOrganization.employees"],
    })
    return user
  }

  @Query(() => [DealershipUser])
  async getAllRootUsers() {
    return await DealershipUser.find({
      relations: ["dealershipOrganization"],
    })
  }

  /**
   * Create A New Root User Account and Organization asynchronously
   * @param param0
   * @param param1
   * @returns
   */
  @Mutation(() => UserAuthReturn)
  async registerRootUser(
    @Arg("credentials")
    { firstName, lastName, username, email, password }: InputNewUser,
    @Ctx() { req }: ServerContext
  ): Promise<UserAuthReturn | undefined> {
    if (password.length < 6) {
      throw new ApolloError("Password is too short")
    }
    const credentials = misc.allStringsToLowerCase(
      misc.trimStringsInObject({ firstName, lastName, username, email })
    )

    if (credentials.username.length < 6) {
      throw new ApolloError("Username is too short")
    }

    if (/@\w+.\w+/g.test(credentials.username)) {
      throw new ApolloError("Username can't look like an email")
    }

    if (!/@\w+.\w+/g.test(credentials.email)) {
      throw new ApolloError("Email may not be valid")
    }
    const pw = await argon.hash(password)

    const org = DealershipOrganization.create()
    await org.save()
    const newUser = DealershipUser.create({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      username: credentials.username,
      password: pw,
      dealershipOrganization: org,
      role: "root",
    })
    const savedUser = await newUser.save()

    req.session.userId = savedUser.id

    const jwt = createUserJWT(
      savedUser.id,
      savedUser.dealershipOrganization.key
    )

    return { user: savedUser, jwt }
  }

  @Mutation(() => UserAuthReturn)
  async login(
    @Ctx() { req }: ServerContext,
    @Arg("login") { password, username, email }: UserLogin
  ): Promise<UserAuthReturn | undefined> {
    if (req.session.userId) {
      const user = await DealershipUser.findOne(req.session.userId, {
        relations: [
          "dealershipOrganization",
          "dealershipOrganization.employees",
        ],
      })

      const jwt = createUserJWT(user.id, user.dealershipOrganization.key)

      return { user, jwt }
    }

    if ((!email && !username) || !password) {
      throw new ApolloError("Missing Credentials")
    }

    let foundUser: DealershipUser | undefined
    const options = {
      relations: ["dealershipOrganization", "dealershipOrganization.employees"],
    }

    if (email)
      foundUser = await DealershipUser.findOne({
        ...options,
        where: { email: misc.makeDbSearchable(email) },
      })
    else if (username)
      foundUser = await DealershipUser.findOne({
        ...options,
        where: { username: misc.makeDbSearchable(username) },
      })

    if (!foundUser) {
      throw new ApolloError("No user matching credentials")
    }

    if (!(await argon.verify(foundUser.password, password))) {
      throw new ApolloError("No user matching credentials")
    }

    req.session.userId = foundUser.id

    const jwt = createUserJWT(
      foundUser.id,
      foundUser.dealershipOrganization.key
    )

    return { user: foundUser, jwt }
  }

  @Mutation(() => Boolean)
  async deleteRootUser(@Arg("id", () => Int) id: number) {
    try {
      await DealershipUser.delete(id)
      return true
    } catch (error) {
      return false
    }
  }
}

export default RootUserResolver
