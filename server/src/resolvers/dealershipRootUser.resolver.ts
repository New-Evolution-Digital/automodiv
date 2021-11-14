import { Arg, Args, Int, Mutation, Query, Resolver } from "type-graphql";
import agron from "argon2";
import { DealershipRootUser } from "../entities/DealershipRootUser";
import { InputNewRootUser } from "./InputTypes";
import * as misc from "../utils/misc";
import { DealershipOrganization } from "../entities/DealershipOrganization";

@Resolver(DealershipRootUser)
export class DealershipRootDealerResolver {
  @Query(() => [DealershipRootUser])
  async getAllRootUsers() {
    return await DealershipRootUser.find({
      relations: ["dealershipOrganization"],
    });
  }

  @Mutation(() => DealershipRootUser)
  async registerRootUser(
    @Args() { firstName, lastName, username, email, password }: InputNewRootUser
  ) {
    const pw = await agron.hash(password);
    const credentials = misc.allStringsToLowerCase(
      misc.trimStringsInObject({ firstName, lastName, username, email })
    );

    const newUser = new DealershipRootUser();
    newUser.firstName = credentials.firstName;
    newUser.lastName = credentials.lastName;
    newUser.email = credentials.email;
    newUser.username = credentials.username;
    newUser.password = pw;
    const newOrg = new DealershipOrganization();
    newUser.dealershipOrganization = newOrg;
    const user = await newUser.save();

    return await DealershipRootUser.findOne(user.id);
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
