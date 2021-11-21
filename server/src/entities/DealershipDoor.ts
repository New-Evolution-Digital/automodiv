import { Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DealershipOrganization } from "./DealershipOrganization";
import { ILocation } from "../interfaces/ILocation";

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

  @Field()
  @Column()
  streetAddress?: string;

  @Field()
  @Column()
  streetAddressTwo?: string;

  @Field()
  @Column()
  city?: string;

  @Field()
  @Column()
  state?: string;

  @Field()
  @Column()
  zip?: string;

  @Column("int")
  orgId: number;

  @ManyToOne(() => DealershipOrganization, (org) => org.DealershipDoor)
  dealershipOrganization: DealershipOrganization;
}
