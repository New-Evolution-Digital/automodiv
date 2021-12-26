import { isNull } from "lodash"

export function trimStringsInObject<T>(
  obj: T & { [Property in keyof T]: any }
): T {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "string") {
        obj[key] = obj[key].trim()
      }
    }
  }
  return obj
}

export function allStringsToLowerCase<T>(
  obj: T & { [Property in keyof T]: any }
): T {
  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      const element = obj[k]
      if (typeof obj[k] === "string") {
        obj[k] = element.toLowerCase().trim()
      }
    }
  }
  return obj
}

export function makeDbSearchable(str: string): string {
  return str.trim().toLowerCase()
}

export function genPassword(): string {
  let password = ""

  const min = 32
  const max = 126

  for (let i = 0; i <= 24; i++) {
    const char = Math.floor(Math.random() * (max - min + 1) + min)
    password += String.fromCharCode(char)
  }
  return password
}

export function valuesNotNull(...values: any[]) {
  for (const val in values) {
    if (!val || val === "" || isNull(val)) return false
  }
  return true
}
