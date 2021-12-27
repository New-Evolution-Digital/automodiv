import { ApolloError } from "apollo-server-express"
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql"
import { DealershipUser } from "../UserService/DealershipUser.entity"
import { isLoggedIn } from "../../utils/middleware"
import { makeDbSearchable } from "../../utils/misc"
import { getVinResults, getMakes, getModels } from "../../utils/vinAPI"
import { CarInventory } from "./car.entity"
import { AddVehicleInput } from "./types"

@Resolver(CarInventory)
export default class CarResolver {
  @Query(() => CarInventory, { nullable: true })
  async searchVin(@Arg("vin") vin: string) {
    const vehicleResult = await getVinResults(vin)
    return CarInventory.create({ ...vehicleResult, vin: makeDbSearchable(vin) })
  }

  @Query(() => [String])
  async getAvailableMakes() {
    return await getMakes("car")
  }

  @Query(() => [String])
  async getModelsWithYearMake(
    @Arg("year") year: string,
    @Arg("make") make: string
  ) {
    return await getModels(year, make)
  }

  @Mutation(() => CarInventory)
  @UseMiddleware([isLoggedIn])
  async quickAddCar(
    @Ctx() { req }: ServerContext,
    @Arg("details", () => AddVehicleInput) { vin, manual }: AddVehicleInput
  ): Promise<CarInventory | undefined> {
    if (vin === undefined && manual === undefined) {
      throw new ApolloError("No information provided")
    }

    const user: DealershipUser | undefined = await DealershipUser.findOne(
      req.session.userId,
      {
        relations: ["dealershipOrganization"],
      }
    )

    if (!user) {
      throw new ApolloError("No Authorized User")
    }

    const manualDetails: Partial<CarInventory> = !manual
      ? {}
      : Object.entries(manual).reduce((details, [key, value]) => {
          return {
            ...details,
            [key]: key === "year" ? parseInt(value) : makeDbSearchable(value),
          }
        }, {})

    let carInstance =
      vin !== undefined
        ? await this.searchVin(vin)
        : CarInventory.create({ ...manualDetails })
    carInstance.dealership_org = user.dealershipOrganization
    carInstance.dealership_org_id = user.dealershipOrganization.id
    console.log(carInstance)

    try {
      return await carInstance.save()
    } catch (error: any) {
      if (error.message.includes("Duplicate")) {
        throw new ApolloError("Duplicate VIN")
      }

      throw new ApolloError(error.message)
    }
  }
}
