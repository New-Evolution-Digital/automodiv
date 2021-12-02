import { Field, ObjectType } from "type-graphql";
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
import { ILocation } from "../interfaces/ILocation";

@Entity()
@ObjectType()
export class DealershipDoor extends BaseEntity implements ILocation {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: string;

  @Field()
  @UpdateDateColumn()
  updatedAt: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name?: string;

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
  dealerNumber?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone_number?: string;

  @ManyToOne(() => DealershipOrganization, (org) => org.dealershipDoors)
  dealershipOrganization: DealershipOrganization;

  [key: string]: any;
}
