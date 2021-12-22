import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class FieldError {
  @Field({ nullable: true })
  message!: string

  @Field(() => String, { nullable: true })
  field?: string

  @Field(() => String, { nullable: true })
  code?: string
}
