declare global {
  export type Lazy<T, T extends object> = Promise<T> | T;
}
export {};
