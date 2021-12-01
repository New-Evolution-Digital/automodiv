import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DealershipOrganization } from "./DealershipOrganization";

@Entity()
@ObjectType()
export class DealershipUser extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column("text")
  firstName: string;

  @Field()
  @Column("text")
  lastName: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Field(() => DealershipOrganization)
  @ManyToOne(() => DealershipOrganization, (org) => org.employees, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  dealershipOrganization: DealershipOrganization;

  @Field()
  @Column({ default: "employee" })
  role: "root" | "admin" | "manager" | "employee";

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone_number: string;

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;
}
