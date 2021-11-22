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
  @OneToOne(() => DealershipOrganization, (org) => org.rootUser, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  dealershipOrganization: DealershipOrganization;

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;
}
