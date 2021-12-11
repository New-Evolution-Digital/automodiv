import axios from "axios"
import { CarInventory } from "../entities/Car"
import { makeDbSearchable } from "./misc"

export const getVinResults = async (
  vin: string
): Promise<Partial<CarInventory> | undefined> => {
  if (!vin) {
    return undefined
  }

  const { data } = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
  )

  let car: any = {}

  for (const detail of data.Results) {
    const { Variable, Value } = detail
    if (!Variable && !Value) {
      continue
    }

    if (Value === null) {
      continue
    }

    if (Variable === "Model Year") {
      car = { ...car, ["Year"]: Value }
    } else {
      car = {
        ...car,
        [Variable]: Value !== "" ? makeDbSearchable(Value) : undefined,
      }
    }
  }

  console.log(car)

  return {
    year: car["Year"],
    make: car["Make"],
    model: car["Model"],
    trim: car["Trim"],
    series: car["Series"],
    transmission:
      !!car["Transmission Style"] && !!car["Transmission Speed"]
        ? `${car["Transmission Style"]} - ${car["Transmission Speed"]}`
        : undefined,
  }
}
