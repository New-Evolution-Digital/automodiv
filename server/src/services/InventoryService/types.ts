import { MaxLength } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class VehicleSearchInput {
  @Field()
  @MaxLength(4)
  year: string

  @Field()
  make: string

  @Field()
  model: string
}

@InputType()
export class AddVehicleInput {
  @Field(() => String, { nullable: true })
  vin?: string = undefined

  @Field(() => VehicleSearchInput, { nullable: true })
  manual?: VehicleSearchInput = undefined
}
