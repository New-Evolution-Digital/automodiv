import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, ID, Mutation, Query, Resolver } from "type-graphql";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { DealershipDoor, DealershipOrganization } from "../entities";
import { makeDbSearchable } from "../utils/misc";
import { doorInputParams, orgIndexables } from "./InputTypes";

@Resolver(() => DealershipDoor)
class DoorResolver {
  @Query(() => [DealershipDoor])
  async getDoorsByOrgId(
    @Ctx() { req }: ServerContext,
    @Arg("orgCredentials") orgCredentials: orgIndexables
  ) {
    if (!req.session.userId) {
      throw new ApolloError("Not authorized");
    }

    const foundOrg = await DealershipOrganization.findOne({
      where: [
        {
          id: orgCredentials.id,
        },
        {
          key: orgCredentials.key,
        },
      ],
      relations: ["dealershipDoors", "employees"],
    });

    return foundOrg?.dealershipDoors;
  }

  /**
   * Currently only root user can add doors
   * @param param0
   * @returns
   */
  @Mutation(() => DealershipDoor)
  async createDoor(@Ctx() { req }: ServerContext) {
    if (!req.session.userId) {
      throw new ApolloError("Not Authorized");
    }

    const dealershipOrganization = await DealershipOrganization.findOne({
      where: { rootUser: { id: req.session.userId } },
      relations: ["rootUser"],
    });

    if (!dealershipOrganization) {
      throw new ApolloError("Organization not found");
    }
    const newDoor = DealershipDoor.create({ dealershipOrganization });
    const savedDoor = await newDoor.save();

    if (!savedDoor) {
      throw new ApolloError("error saving door");
    }

    if (!dealershipOrganization.dealershipDoors) {
      DealershipOrganization.update(dealershipOrganization, {
        dealershipDoors: [savedDoor],
      });
    } else {
      dealershipOrganization.dealershipDoors = [
        ...dealershipOrganization?.dealershipDoors,
        savedDoor,
      ];
    }

    return savedDoor;
  }

  @Mutation(() => DealershipDoor, { nullable: true })
  async updateDoorById(
    @Ctx() { req }: ServerContext,
    @Arg("doorId", () => ID) doorId: number,
    @Arg("doorParameters", () => doorInputParams)
    doorParams: Partial<QueryDeepPartialEntity<doorInputParams>>
  ): Promise<DealershipDoor | undefined> {
    if (!req.session.userId) {
      throw new ApolloError("Not Authorized");
    }

    const foundDoor = await DealershipDoor.findOne({
      relations: ["dealershipOrganization", "dealershipOrganization.rootUser"],
      where: [
        {
          id: doorId,
          dealershipOrganization: { rootUser: { id: req.session.userId } },
        },
      ],
    });

    if (!foundDoor) {
      throw new ApolloError("No door matching credentials");
    }

    for (const key in doorParams) {
      if (Object.prototype.hasOwnProperty.call(foundDoor, key)) {
        if (!!doorParams[key]) {
          foundDoor[key] = makeDbSearchable(doorParams[key] as string);
        }
      }
    }

    return await foundDoor.save();
  }
}

export default DoorResolver;
