import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DealershipRootUser } from "./DealershipRootUser";
import { ILocation } from "../interfaces/ILocation";
import { DealershipDoor } from "./DealershipDoor";
import Employee from "./Employees";

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
  @Column({ nullable: true, type: "int" })
  default_dealer_number?: number;

  @Field(() => DealershipRootUser, { nullable: true })
  @OneToOne(() => DealershipRootUser, (root) => root.dealershipOrganization)
  rootUser: DealershipRootUser;

  @Field(() => [DealershipDoor], { nullable: true })
  @OneToMany(
    () => DealershipDoor,
    (doors: DealershipDoor) => doors.dealershipOrganization,
    { onDelete: "CASCADE", onUpdate: "CASCADE", nullable: true, eager: true }
  )
  dealershipDoors: DealershipDoor[];

  @Field(() => [Employee || DealershipRootUser], { nullable: true })
  @OneToMany(() => Employee, (employee) => employee.dealershipOrganization, {
    eager: true,
    nullable: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  employees?: (Employee | DealershipRootUser)[];

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;
}
