import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class DoorToItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "integer" })
  dealership_door_id: number

  @Column()
  item_type: string

  @Column({ type: "integer" })
  item_id: number
}

export default DoorToItem
