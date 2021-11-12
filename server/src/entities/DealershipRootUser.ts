import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DealershipRootUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
