const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

if (!Array.prototype.removeLast) {
  Array.prototype.removeLast = function () {
    this.pop()

    return this
  }
}

if (!Array.prototype.count) {
  Object.defineProperty(Array.prototype, 'count', {
    get: function () {
      return this.length
    }
  })
}

// 👇️ const result: string[]
const result = arr.removeLast()

console.log(arr) // 👉️ ['a', 'b', 'c']
console.log(arr.count)

const num: string = 'cool'
let mundane: string = 'cool'
export default mundane
export { num }
