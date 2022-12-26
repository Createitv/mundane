export {}

declare global {
  interface Array<T> {
    removeLast(): T[]
    count: number
  }
}
