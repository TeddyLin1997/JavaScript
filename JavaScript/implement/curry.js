function curry (fn) {
  return function (...args) {
    if (fn.length !== args.length) return fn.bind(null, ...args)
    return fn(...args)
  }
}

// test
const sum = (a, b) => a + b
const fn = curry(sum)

console.assert(typeof fn === 'function', 'test 1')
console.assert(typeof fn(1) === 'function', 'test 2')
console.assert(typeof fn(1)(2) === 'number', 'test 3')
console.assert(fn(1)(2) === 3, 'test 4')
