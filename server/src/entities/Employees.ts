import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DealershipOrganization } from "./DealershipOrganization";
import { IUser } from "../interfaces/IUser";

@Entity()
@ObjectType()
class Employee extends BaseEntity implements IUser {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  username: string;

  @Column()
  password: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @CreateDateColumn()
  createdAt: string;

  @Field()
  @UpdateDateColumn()
  updatedAt: string;

  @Field(() => DealershipOrganization)
  @ManyToOne(() => DealershipOrganization, (org) => org.employees, {
    cascade: ["insert"],
  })
  dealershipOrganization: DealershipOrganization;
}

export default Employee;
