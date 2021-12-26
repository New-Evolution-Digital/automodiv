import { Field, ID, InputType } from "type-graphql"
import { DealershipDoor } from "../entities"
import { DealershipOrganization } from "../entities/DealershipOrganization.entity"
import { DealershipUser } from "../services/UserService/DealershipUser.entity"

@InputType()
export class InputNewUser implements Partial<DealershipUser> {
  @Field()
  readonly firstName: string

  @Field()
  readonly lastName: string

  @Field()
  readonly email: string

  @Field()
  readonly username: string

  @Field({ nullable: true })
  readonly password: string;

  [key: string]: string
}

@InputType()
export class OrganizationInput implements Partial<DealershipOrganization> {
  @Field({ nullable: true })
  readonly name?: string

  @Field({ nullable: true })
  readonly streetAddress?: string

  @Field({ nullable: true })
  readonly streetAddressTwo?: string

  @Field({ nullable: true })
  readonly city?: string

  @Field({ nullable: true })
  readonly state?: string

  @Field({ nullable: true })
  readonly zip?: string

  @Field({ nullable: true })
  readonly default_dealer_number?: string
}

@InputType()
export class UserLogin {
  @Field({ nullable: true })
  readonly username?: string

  @Field({ nullable: true })
  readonly email?: string

  @Field()
  readonly password!: string
}

@InputType()
export class orgIndexables {
  @Field(() => ID, { nullable: true })
  readonly id?: number

  @Field({ nullable: true })
  readonly key?: string
}

@InputType()
export class doorInputParams implements Partial<DealershipDoor> {
  @Field({ nullable: true })
  readonly name?: string

  @Field({ nullable: true })
  readonly streetAddress?: string

  @Field({ nullable: true })
  readonly streetAddressTwo?: string

  @Field({ nullable: true })
  readonly city?: string

  @Field({ nullable: true })
  readonly state?: string

  @Field({ nullable: true })
  readonly zip?: string

  @Field({ nullable: true })
  readonly dealerNumber?: string;

  [key: string]: string | undefined
}

@InputType()
export class UpdateUser implements Partial<DealershipUser> {
  @Field({ nullable: true })
  readonly firstName?: string

  @Field({ nullable: true })
  readonly lastName?: string

  @Field({ nullable: true })
  readonly phone_number?: string;
  [key: string]: string | undefined
}
