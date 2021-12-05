import { ApolloError } from "apollo-server-express"
import {
  Arg,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql"
import { getRepository } from "typeorm"
import { DealershipDoor } from "../entities"
import { CarInventory } from "../entities/Car"
import DoorToItem from "../entities/DoorToItem"
import { makeDbSearchable } from "../utils/misc"

@Resolver()
export class InventoryResolver {
  @Mutation(() => CarInventory)
  async addCarToDealership(
    @Arg("dealership_id", () => Int) dealership_id: number,
    @Arg("vin") vin: string
  ): Promise<CarInventory> {
    //Handle most of the intro error handling
    if (!dealership_id) {
      throw new ApolloError("No Door Found", "404")
    }

    const foundDoor = await DealershipDoor.findOne(dealership_id)

    if (!foundDoor) {
      throw new ApolloError("No Door Found", "404")
    }

    if (!vin) {
      throw new ApolloError("No Vin Entered")
    }

    const carRepo = getRepository(CarInventory)

    // Create the car
    const carInstance = carRepo.create({
      vin: makeDbSearchable(vin),
      dealership_door_id: foundDoor.id,
      dealership_door: foundDoor,
    })

    const savedCar = await carRepo.save(carInstance)
    if (!savedCar) {
      throw new ApolloError("Car was not created")
    }

    // Add the car the the doorToItem helper table
    const doorItemInstance = DoorToItem.create({
      dealership_door_id: foundDoor.id,
      item_type: "car",
      item_id: savedCar.id,
    })
    const savedItem = await DoorToItem.save(doorItemInstance)

    // If it fails remove the car because the relationship wont be made.
    if (!savedItem) {
      await carRepo.remove(savedCar)
      throw new ApolloError("Failed to save car")
    }

    return savedCar
  }

  @Mutation(() => Boolean)
  async deleteCar(@Arg("car_id", () => Int) car_id: number): Promise<Boolean> {
    if (!car_id) {
      return false
    }

    const carRepo = getRepository(CarInventory)

    const foundCar = await carRepo.findOne(car_id)

    if (!foundCar) {
      return false
    }

    // Get all the instances where a car is related to a dealership door
    const foundRelations = await DoorToItem.find({
      where: { item_id: foundCar.id },
    })

    try {
      // Remove all the instances where the car is related to the dealership
      for (const car of foundRelations) {
        await car.remove()
      }
      // Remove the car
      await carRepo.remove(foundCar)
      return true
    } catch (error) {
      return false
    }
  }

  @Query(() => DoorInventory)
  async getInventory(@Arg("door_id", () => Int) door_id: number) {
    if (!door_id) {
      throw new ApolloError("No door found")
    }

    const foundDoor = await DealershipDoor.findOne(door_id)

    if (!foundDoor) {
      throw new ApolloError("No Door Found")
    }
    const carRepo = getRepository(CarInventory)

    const foundInventory = await DoorToItem.find({
      where: { dealership_door_id: door_id },
      select: ["item_id", "item_type"],
    })

    let inventory = []

    for (const item of foundInventory) {
      if (!item.item_id && !item.item_type) {
        continue
      }

      if (item.item_type === "car") {
        const foundCar = await carRepo.findOne(item.item_id)
        if (!foundCar) {
          continue
        }
        inventory.push(foundCar)
      }
    }

    return {
      dealership: foundDoor,
      inventory,
    }
  }
}

@ObjectType()
class DoorInventory {
  @Field(() => DealershipDoor)
  dealership: DealershipDoor

  @Field(() => [CarInventory], { nullable: true })
  inventory: CarInventory[]
}
