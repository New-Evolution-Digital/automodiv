import { createUnionType } from "type-graphql"
import { CarInventory } from "../services/InventoryService/car.entity"

export const InventoryTypes = createUnionType({
  name: "InventoryTypes",
  types: () => [CarInventory] as const,
  resolveType: () => {
    return CarInventory
  },
})

export type TInvetory = CarInventory[]
