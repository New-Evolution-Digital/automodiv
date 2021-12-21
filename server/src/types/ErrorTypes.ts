import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class FieldError {
  @Field()
  message!: string

  @Field(() => String, { nullable: true })
  field?: string

  @Field(() => String, { nullable: true })
  code?: string
}
