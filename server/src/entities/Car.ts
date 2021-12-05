import { Field, ID, ObjectType } from "type-graphql"
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { DealershipDoor } from "."

@Entity()
@ObjectType()
export class CarInventory {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ unique: true, nullable: false })
  vin: string

  @Column()
  dealership_door_id: number
  @ManyToOne(() => DealershipDoor)
  @JoinColumn({ name: "dealership_door_id" })
  dealership_door: DealershipDoor
}
