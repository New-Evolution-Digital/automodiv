import { Field, ObjectType } from "type-graphql"
import { DealershipUser } from "../entities"
import { FieldError } from "./ErrorTypes"

@ObjectType()
export class AuthUserReturn {
  @Field(() => DealershipUser)
  data!: DealershipUser

  @Field()
  jwt!: string
}

@ObjectType()
export class SignUpReturn {
  @Field(() => FieldError, { nullable: true })
  errors?: FieldError[]

  @Field(() => AuthUserReturn, { nullable: true })
  user?: AuthUserReturn
}
