import { ArgsType, Field, InputType } from "type-graphql";
import { Employee } from "../entities";
import { DealershipOrganization } from "../entities/DealershipOrganization";
import { DealershipRootUser } from "../entities/DealershipRootUser";

@ArgsType()
export class InputNewRootUser implements Partial<DealershipRootUser> {
  @Field()
  readonly firstName: string;

  @Field()
  readonly lastName: string;

  @Field()
  readonly email: string;

  @Field()
  readonly username: string;

  @Field()
  readonly password: string;
}

@ArgsType()
export class OrganizationInput implements Partial<DealershipOrganization> {
  @Field({ nullable: true })
  readonly name?: string;

  @Field({ nullable: true })
  readonly streetAddress?: string;

  @Field({ nullable: true })
  readonly streetAddressTwo?: string;

  @Field({ nullable: true })
  readonly city?: string;

  @Field({ nullable: true })
  readonly state?: string;

  @Field({ nullable: true })
  readonly zip?: string;

  @Field({ nullable: true })
  readonly default_dealer_number?: number;
}

@InputType()
export class NewEmployeeCredentials implements Partial<Employee> {
  @Field()
  readonly firstName: string;

  @Field()
  readonly lastName: string;

  @Field()
  readonly email: string;

  @Field()
  readonly username: string;

  @Field()
  readonly password: string;

  [key: string]: string;
}
@InputType()
export class UserLogin {
  @Field({ nullable: true })
  readonly username?: string;

  @Field({ nullable: true })
  readonly email?: string;

  @Field()
  readonly password!: string;
}
