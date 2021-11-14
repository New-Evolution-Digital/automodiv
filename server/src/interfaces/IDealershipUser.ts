import { DealershipOrganization } from "../entities/DealershipOrganization";
import { IUser } from "./IUser";

export abstract class IDealershipUser extends IUser {
  dealershipOrganization: Lazy<DealershipOrganization>;
}
