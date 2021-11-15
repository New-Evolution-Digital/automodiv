import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DealershipRootUser } from ".";
import { ILocation } from "../interfaces/ILocation";

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

  @Field({ nullable: true })
  @Column({ nullable: true, type: "int" })
  default_dealer_number?: number;

  @Column({ nullable: true })
  rootUserId: number;

  @Field({ nullable: true })
  @OneToOne(() => DealershipRootUser, { eager: true })
  @JoinColumn()
  rootUser: DealershipRootUser;

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;
}
