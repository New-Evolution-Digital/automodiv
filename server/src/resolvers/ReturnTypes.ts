import { Field, ObjectType } from "type-graphql"
import { DealershipUser } from "../entities"

@ObjectType()
export class UserAuthReturn {
  @Field(() => DealershipUser)
  user: DealershipUser

  @Field()
  jwt: string
}
