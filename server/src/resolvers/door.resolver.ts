import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, ID, Int, Mutation, Query, Resolver } from "type-graphql";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import * as _ from "lodash";
import { DealershipDoor, DealershipOrganization } from "../entities";
import { makeDbSearchable } from "../utils/misc";
import { doorInputParams, orgIndexables } from "./InputTypes";

@Resolver(() => DealershipDoor)
class DoorResolver {
  /**
   * Gets all the doors related to an organization id or key
   * @param param0
   * @param orgCredentials
   * @returns
   */
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

  @Query(() => DealershipDoor)
  async getDoorById(
    @Ctx() { req }: ServerContext,
    @Arg("orgCredentials") orgCredentials: orgIndexables,
    @Arg("doorId", () => Int) id: number
  ): Promise<DealershipDoor | undefined> {
    if (!req.session.userId) {
      throw new ApolloError("Not authorized");
    }

    const foundOrg = await DealershipOrganization.findOne({
      where: [{ id: orgCredentials.id }, { key: orgCredentials.key }],
      relations: ["dealershipDoors"],
    });

    if (!foundOrg || !foundOrg.dealershipDoors) {
      throw new ApolloError("No data found");
    }

    const doors = foundOrg.dealershipDoors;

    return _.find(doors, { id: id });
  }

  /**
   * Currently only root user can add doors
   * @param param0
   * @returns
   */
  @Mutation(() => DealershipDoor)
  async createDoor(
    @Ctx() { req }: ServerContext,
    @Arg("key") key: string,
    @Arg("doorParams") doorParams: doorInputParams
  ) {
    if (!req.session.userId) {
      throw new ApolloError("Not Authorized");
    }

    const dealershipOrganization = await DealershipOrganization.findOne({
      where: { key: key },
      relations: ["employees", "dealershipDoors"],
    });

    if (!dealershipOrganization) {
      throw new ApolloError("Organization not found");
    }

    const isAuthorized = () => {
      for (const emp of dealershipOrganization.employees) {
        if (
          emp.id === req.session.userId &&
          (emp.role === "root" || emp.role === "admin")
        )
          return true;
      }
      return false;
    };

    if (!isAuthorized) {
      throw new Error("Not Authorized");
    }

    for (const key in doorParams) {
      if (Object.prototype.hasOwnProperty.call(doorParams, key)) {
        const element = doorParams[key];

        doorParams[key] = makeDbSearchable(element as string);
      }
    }

    const newDoor = DealershipDoor.create({
      dealershipOrganization,
      ...doorParams,
    });
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

  /**
   * Updates Parameters
   * @param param0
   * @param doorId
   * @param doorParams
   * @returns
   */
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
          if (key !== "name") {
            foundDoor[key] = makeDbSearchable(doorParams[key] as string);
          } else {
            foundDoor[key] = doorParams[key] as string;
          }
        }
      }
    }

    return await foundDoor.save();
  }
}

export default DoorResolver;
