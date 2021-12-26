import axios from "axios"
import { CarInventory } from "../services/InventoryService/car.entity"
import { makeDbSearchable, valuesNotNull } from "./misc"

export const getVinResults = async (
  vin: string
): Promise<Partial<CarInventory> | undefined> => {
  if (!vin) {
    return undefined
  }

  const { data } = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
  )

  const car: any = data.Results.reduce(
    (obj: any, { Variable, Value }: { [key: string]: string }) =>
      valuesNotNull(Variable, Value)
        ? { ...obj, [Variable]: makeDbSearchable(Value || "") }
        : obj,
    {}
  )

  console.log(car)

  return {
    year: car["Model Year"] || null,
    make: car["Make"] || null,
    model: car["Model"] || null,
    trim: car["Trim"] || null,
    series: car["Series"] || null,
    transmission:
      !!car["Transmission Style"] && !!car["Transmission Speed"]
        ? `${car["Transmission Style"]} - ${car["Transmission Speed"]}`
        : undefined,
  }
}

const sorter =
  (a: string, b: string) => (option: "ascending" | "descending") => {
    if (option === "descending") return a > b ? -1 : 1
    return a > b ? 1 : -1
  }

export const getMakes: (
  vehicle_type: string,
  sort?: "ascending" | "descending"
) => Promise<string[]> = async (vehicle_type = "car", sort = "ascending") => {
  const { data } = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${vehicle_type}?format=json`
  )

  const makes: string[] = data.Results.map((res: any) => res.MakeName)
  return makes.sort((a, b) => sorter(a, b)(sort))
}

export const getModels: (
  year: string,
  make: string,
  sort?: "ascending" | "descending"
) => Promise<string[]> = async (year, make, sort = "ascending") => {
  const { data } = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`
  )
  const models: string[] = data.Results.map((res: any) => res.Model_Name)

  return models.sort((a, b) => sorter(a, b)(sort))
}
