import { Field, ID, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { DealershipDoor, DealershipOrganization } from "../../entities"

@Entity()
@ObjectType()
export class CarInventory extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ unique: true, nullable: false })
  vin?: string

  @Column({ type: "int", nullable: true })
  dealership_door_id?: number
  @ManyToOne(() => DealershipDoor)
  @JoinColumn({ name: "dealership_door_id" })
  dealership_door?: DealershipDoor

  @Column()
  dealership_org_id!: number
  @Field(() => DealershipOrganization)
  @ManyToOne(() => DealershipOrganization, (org) => org.dealership_cars, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: "dealership_org_id" })
  dealership_org: DealershipOrganization

  @Field({ nullable: true })
  @Column({ nullable: true })
  year?: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  make?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  model?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  trim?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  series?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  transmission?: string
}
