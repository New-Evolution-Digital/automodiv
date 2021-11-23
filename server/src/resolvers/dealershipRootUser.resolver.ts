import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import argon from "argon2";
import { DealershipUser } from "../entities/DealershipUser";
import { InputNewUser, UserLogin } from "./InputTypes";
import * as misc from "../utils/misc";
import { DealershipOrganization } from "../entities/DealershipOrganization";
import { ApolloError } from "apollo-server-express";

@Resolver(DealershipUser)
class RootUserResolver {
  @Query(() => DealershipUser)
  async me(@Ctx() { req }: ServerContext) {
    if (!req.session.userId) {
      return new ApolloError("No authenticated user");
    }

    const user = await DealershipUser.findOne(req.session.userId, {
      relations: ["dealershipOrganization", "dealershipOrganization.employees"],
    });
    return user;
  }

  @Query(() => [DealershipUser])
  async getAllRootUsers() {
    return await DealershipUser.find({
      relations: ["dealershipOrganization"],
    });
  }

  /**
   * Create A New Root User Account and Organization asynchronously
   * @param param0
   * @param param1
   * @returns
   */
  @Mutation(() => DealershipUser)
  async registerRootUser(
    @Arg("credentials")
    { firstName, lastName, username, email, password }: InputNewUser,
    @Ctx() { req }: ServerContext
  ) {
    if (password.length < 6) {
      return new ApolloError("Password is too short");
    }
    const credentials = misc.allStringsToLowerCase(
      misc.trimStringsInObject({ firstName, lastName, username, email })
    );

    if (credentials.username.length < 6) {
      return new ApolloError("Username is too short");
    }

    if (/@\w+.\w+/g.test(credentials.username)) {
      return new ApolloError("Username can't look like an email");
    }

    if (!/@\w+.\w+/g.test(credentials.email)) {
      return new ApolloError("Email may not be valid");
    }
    const pw = await argon.hash(password);

    const org = DealershipOrganization.create();
    await org.save();
    const newUser = DealershipUser.create({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      username: credentials.username,
      password: pw,
      dealershipOrganization: org,
      role: "root",
    });
    const savedUser = await newUser.save();

    req.session.userId = savedUser.id;

    return savedUser;
  }

  @Mutation(() => DealershipUser)
  async login(
    @Ctx() { req }: ServerContext,
    @Arg("login") { password, username, email }: UserLogin
  ) {
    if (req.session.userId) {
      return await DealershipUser.findOne(req.session.userId, {
        relations: [
          "dealershipOrganization",
          "dealershipOrganization.employees",
        ],
      });
    }

    if ((!email && !username) || !password) {
      return new ApolloError("Missing Credentials");
    }

    let found: DealershipUser | undefined;

    if (email)
      found = await DealershipUser.findOne({
        where: { email: misc.makeDbSearchable(email) },
      });
    else if (username)
      found = await DealershipUser.findOne({
        where: { username: misc.makeDbSearchable(username) },
      });

    if (!found) {
      return new ApolloError("No user matching credentials");
    }

    if (!(await argon.verify(found.password, password))) {
      return new ApolloError("No user matching credentials");
    }

    req.session.userId = found.id;

    return await DealershipUser.findOne(found.id, {
      relations: ["dealershipOrganization", "dealershipOrganization.employees"],
    });
  }

  @Mutation(() => Boolean)
  async deleteRootUser(@Arg("id", () => Int) id: number) {
    try {
      await DealershipUser.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default RootUserResolver;
