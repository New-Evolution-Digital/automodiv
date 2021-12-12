import * as jwt from "jsonwebtoken"
import { __jwt__ } from "../constants"

type PayloadType = string | object | Buffer
type CreateJWTOptionsType = Omit<jwt.SignOptions, "algorithm">
type CreateIdOptionsType = Omit<CreateJWTOptionsType, "jwtId">
export class JwtHandler {
  private secret: string
  constructor() {
    this.secret = __jwt__.secret
  }

  private createJWT(payload: PayloadType, options?: CreateJWTOptionsType) {
    const token = jwt.sign(payload, this.secret, {
      ...options,
      algorithm: "HS512",
      expiresIn: options?.expiresIn || "24h",
    })
    return token
  }

  public createIdJWT(payload: PayloadType, options?: CreateIdOptionsType) {
    return this.createJWT(payload, { ...options, jwtid: "AMD-ID" })
  }

  public verifyJWT(
    token: string,
    options: Omit<jwt.VerifyOptions, "complete">
  ) {
    return jwt.verify(token, this.secret, { ...options, complete: true })
  }
}
