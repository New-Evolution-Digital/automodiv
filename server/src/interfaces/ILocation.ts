import { IEntity } from "./IEntity";

export abstract class ILocation extends IEntity {
  id: number;
  streetAddress?: string;
  streetAddressTwo?: string;
  city?: string;
  state?: string;
  zip?: string;
}
