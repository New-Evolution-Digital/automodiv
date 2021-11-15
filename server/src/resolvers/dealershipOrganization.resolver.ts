import { ApolloError } from "apollo-server-express";
import { Arg, Args, Mutation, Resolver } from "type-graphql";
import { DealershipOrganization } from "../entities/DealershipOrganization";
import * as misc from "../utils/misc";
import { OrganizationInput } from "./InputTypes";

@Resolver(DealershipOrganization)
export class OrganizationResolver {
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
