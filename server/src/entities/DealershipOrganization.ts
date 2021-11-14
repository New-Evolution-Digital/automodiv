import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ILocation } from "../interfaces/ILocation";
import { DealershipRootUser } from "./DealershipRootUser";

@Entity()
@ObjectType()
export class DealershipOrganization extends BaseEntity implements ILocation {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToOne(() => DealershipRootUser, (user) => user.dealershipOrganization)
  dealershipRootUser: Lazy<DealershipRootUser>;

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;
}
