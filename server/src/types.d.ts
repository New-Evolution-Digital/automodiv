import { Request, Response } from "express";
declare global {
  export type Lazy<T, T extends object> = Promise<T> | T;

  export type ServerContext = {
    req: Request & { session: Express.Session };
    res: Response;
  };
}
export {};
