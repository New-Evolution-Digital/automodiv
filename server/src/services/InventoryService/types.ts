import { MaxLength } from "class-validator"
import { ArgsType, Field, InputType } from "type-graphql"

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
export class AddVehicle {
  @Field({ nullable: true })
  vin?: string

  @Field(() => VehicleSearchInput, { nullable: true })
  manual?: VehicleSearchInput
}

@ArgsType()
export class QuickAddInput {
  @Field(() => AddVehicle)
  info: AddVehicle
}
