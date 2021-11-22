import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { DealershipDoor, DealershipOrganization } from "../entities";
import { orgIndexables } from "./InputTypes";

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
}

export default DoorResolver;
