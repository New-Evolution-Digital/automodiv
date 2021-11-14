import { IEntity } from "./IEntity";

export abstract class IUser extends IEntity {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
}
