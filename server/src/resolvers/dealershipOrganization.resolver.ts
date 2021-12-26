import { ApolloError } from "apollo-server-express"
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql"
import { DealershipUser } from "../entities"
import { CarInventory } from "../services/InventoryService/car.entity"
import { DealershipOrganization } from "../entities/DealershipOrganization.entity"
import { InventoryTypes } from "../types/OrganizationTypes"
import { isLoggedIn } from "../utils/middleware"
import * as misc from "../utils/misc"
import { OrganizationInput } from "./InputTypes"

@Resolver(() => DealershipOrganization)
class OrganizationResolver {
  @FieldResolver(() => [InventoryTypes], { nullable: true })
  @UseMiddleware(isLoggedIn)
  async getInventory(@Root() { id }: DealershipOrganization) {
    return await CarInventory.find({ where: [{ dealership_org_id: id }] })
  }

  @Query(() => DealershipOrganization)
  async getDealershipOrgById(
    // @Arg("id", { nullable: true }) id: number,
    // @Arg("key", { nullable: true }) key: string,
    @Ctx() { req }: ServerContext
  ) {
    if (req.session.userId) {
      const found: DealershipUser = await DealershipUser.findOne(
        req.session.userId,
        { loadEagerRelations: true }
      )

      if (found && found.dealershipOrganization.id !== null) {
        const org = await DealershipOrganization.findOne(
          found.dealershipOrganization,
          { loadEagerRelations: true }
        )
        if (!org) {
          return undefined
        }
        return org
      } else {
        return null
      }
    } else {
      return null
    }
  }

  /**
   * Root User Mutation to update Dealer Org
   * @param param0
   * @param orgId
   * @param props
   * @returns
   */
  @Mutation(() => DealershipOrganization)
  async updateDealerOrg(
    @Ctx() { req }: ServerContext,
    @Arg("dealerKey") key: string,
    @Arg("organizationInput", () => OrganizationInput) props: OrganizationInput
  ) {
    if (!req.session.userId) {
      throw new ApolloError("Not Authorized")
    }

    const found = await DealershipOrganization.findOne({
      where: [{ key }],
      relations: ["employees"],
    })

    if (!found) {
      return new ApolloError("No dealer organization found")
    }

    if (
      !found.employees.find((emp) => {
        return (
          emp.id === req.session.userId &&
          (emp.role === "admin" || emp.role === "root")
        )
      })
    ) {
      throw new Error("Not Authorized")
    }

    const params = misc.allStringsToLowerCase(misc.trimStringsInObject(props))

    await DealershipOrganization.update(found.id, params)
    return await DealershipOrganization.findOne(found.id, {
      relations: ["employees", "dealershipDoors"],
    })
  }
}

export default OrganizationResolver
