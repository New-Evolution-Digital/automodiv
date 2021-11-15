import { ArgsType, Field } from "type-graphql";
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
