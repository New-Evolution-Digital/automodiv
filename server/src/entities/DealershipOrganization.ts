import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ILocation } from "../interfaces/ILocation";
import { DealershipDoor } from "./DealershipDoor";
import { DealershipUser } from "./DealershipUser";

@Entity()
@ObjectType()
export class DealershipOrganization extends BaseEntity implements ILocation {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Generated("uuid")
  @Column()
  key: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  streetAddress?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  streetAddressTwo?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  zip?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  default_dealer_number?: string;

  @Field(() => [DealershipDoor], { nullable: true })
  @OneToMany(
    () => DealershipDoor,
    (doors: DealershipDoor) => doors.dealershipOrganization,
    { onDelete: "CASCADE", onUpdate: "CASCADE", nullable: true, eager: true }
  )
  dealershipDoors: DealershipDoor[];

  @Field(() => [DealershipUser])
  @OneToMany(
    () => DealershipUser,
    (employee) => employee.dealershipOrganization
  )
  @JoinColumn()
  employees: DealershipUser[];

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;
}
