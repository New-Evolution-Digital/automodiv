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
import { DealershipOrganization } from "./DealershipOrganization";
import { IDealershipUser } from "../interfaces/IDealershipUser";

@Entity()
@ObjectType()
export class DealershipRootUser extends BaseEntity implements IDealershipUser {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
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
  @OneToOne(() => DealershipOrganization, (org) => org.dealershipRootUser, {
    cascade: ["insert"],
  })
  @JoinColumn()
  dealershipOrganization: Lazy<DealershipOrganization>;

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;
}
