import { ApolloError } from "apollo-server-express"
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql"
import { DealershipOrganization } from "../../entities"
import { JwtHandler } from "../../utils/jwtHandler"
import { isLoggedIn } from "../../utils/middleware"
import { makeDbSearchable } from "../../utils/misc"
import { getVinResults, getMakes, getModels } from "../../utils/vinAPI"
import { CarInventory } from "./car.entity"
import { QuickAddInput } from "./types"

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
    @Arg("details", () => QuickAddInput) { info }: QuickAddInput
  ): Promise<CarInventory> {
    const { vin, manual } = info

    if (!vin && !manual) {
      throw new ApolloError("No information provided")
    }

    const orgKey =
      req.headers.authorization &&
      new JwtHandler().verifyJWT(req.headers.authorization)
    const org = await DealershipOrganization.findOne({
      where: [{ employees: [{ id: req.session.userId }] }, { key: orgKey }],
    })

    if (!org) {
      throw new ApolloError("Not assignable to an organization")
    }

    const manualDetails: Partial<CarInventory> = !manual
      ? {}
      : Object.entries(manual).reduce((details, [key, value]) => {
          return {
            ...details,
            [key]: key === "year" ? parseInt(value) : makeDbSearchable(value),
          }
        }, {})

    let carInstance = vin
      ? await this.searchVin(vin)
      : CarInventory.create({ ...manualDetails })
    carInstance.dealership_org = org
    return await carInstance.save()
  }
}
