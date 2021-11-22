import { ApolloError } from "apollo-server-express";
import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { DealershipRootUser } from "../entities";
import { DealershipOrganization } from "../entities/DealershipOrganization";
import * as misc from "../utils/misc";
import { OrganizationInput } from "./InputTypes";

@Resolver(DealershipOrganization)
class OrganizationResolver {
  @Query(() => DealershipOrganization)
  async getDealershipOrgById(
    // @Arg("id", { nullable: true }) id: number,
    // @Arg("key", { nullable: true }) key: string,
    @Ctx() { req }: ServerContext
  ) {
    if (req.session.userId) {
      const found: DealershipRootUser = await DealershipRootUser.findOne(
        req.session.userId,
        { loadEagerRelations: true }
      );

      if (found && found.dealershipOrganization.id !== null) {
        const org = await DealershipOrganization.findOne(
          found.dealershipOrganization,
          { loadEagerRelations: true }
        );
        if (!org) {
          return undefined;
        }
        return org;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  @Mutation(() => DealershipOrganization)
  async updateDealerOrg(
    @Arg("org_id") orgId: number,
    @Args() props: OrganizationInput
  ) {
    const found = await DealershipOrganization.findOne(orgId);

    if (!found) {
      return new ApolloError("No dealer organization found");
    }

    const params = misc.allStringsToLowerCase(misc.trimStringsInObject(props));

    return await DealershipOrganization.update(found.id, params);
  }
}

export default OrganizationResolver;
