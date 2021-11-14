export function trimStringsInObject<T>(
  obj: T & { [Property in keyof T]: any }
): T {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "string") {
        obj[key] = obj[key].trim();
      }
    }
  }
  return obj;
}

export function allStringsToLowerCase<T>(
  obj: T & { [Property in keyof T]: any }
): T {
  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      const element = obj[k];
      if (typeof obj[k] === "string") {
        obj[k] = element.toLowerCase();
      }
    }
  }
  return obj;
}
