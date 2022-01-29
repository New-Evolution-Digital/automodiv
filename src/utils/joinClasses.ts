export default function joinClasses(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
