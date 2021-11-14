import { ArgsType, Field } from "type-graphql";
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
