import { Arg, Args, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import argon from "argon2";
import { DealershipRootUser } from "../entities/DealershipRootUser";
import { InputNewRootUser, UserLogin } from "./InputTypes";
import * as misc from "../utils/misc";
import { DealershipOrganization } from "../entities/DealershipOrganization";
import { ApolloError } from "apollo-server-express";

@Resolver(DealershipRootUser)
class RootUserResolver {
  @Query(() => DealershipRootUser)
  async me(@Ctx() { req }: ServerContext) {
    if (!req.session.userId) {
      return new ApolloError("No authenticated user");
    }

    const user = await DealershipRootUser.findOne(req.session.userId, {
      relations: ["dealershipOrganization", "dealershipOrganization.employees"],
      loadEagerRelations: true,
    });
    console.log(user);
    return user;
  }

  @Query(() => [DealershipRootUser])
  async getAllRootUsers() {
    return await DealershipRootUser.find({
      relations: ["dealershipOrganization"],
    });
  }

  /**
   * Create A New Root User Account and Organization asynchronously
   * @param param0
   * @param param1
   * @returns
   */
  @Mutation(() => DealershipRootUser)
  async registerRootUser(
    @Args()
    { firstName, lastName, username, email, password }: InputNewRootUser,
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
    const newUser = DealershipRootUser.create({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      username: credentials.username,
      password: pw,
      dealershipOrganization: org,
    });
    org.employees = [newUser];
    await org.save();
    const savedUser = await newUser.save();

    req.session.userId = savedUser.id;

    return await DealershipRootUser.findOne(savedUser, {
      loadEagerRelations: true,
    });
  }

  @Mutation(() => DealershipRootUser)
  async login(
    @Ctx() { req }: ServerContext,
    @Arg("login") { password, username, email }: UserLogin
  ) {
    if (req.session.userId) {
      return await DealershipRootUser.findOne(req.session.userId, {
        relations: ["dealershipOrganization"],
      });
    }

    if ((!email && !username) || !password) {
      return new ApolloError("Missing Credentials");
    }

    let found: DealershipRootUser | undefined;

    if (email)
      found = await DealershipRootUser.findOne({
        where: { email: misc.makeDbSearchable(email) },
      });
    else if (username)
      found = await DealershipRootUser.findOne({
        where: { username: misc.makeDbSearchable(username) },
      });

    if (!found) {
      return new ApolloError("No user matching credentials");
    }

    if (!(await argon.verify(found.password, password))) {
      return new ApolloError("No user matching credentials");
    }

    req.session.userId = found.id;

    return await DealershipRootUser.findOne(found.id, {
      relations: ["dealershipOrganization"],
    });
  }

  @Mutation(() => Boolean)
  async deleteRootUser(@Arg("id", () => Int) id: number) {
    try {
      await DealershipRootUser.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default RootUserResolver;
