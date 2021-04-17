function curry (func) {
  const params = []
  const length = func.length

  const next = (param) => {
    params.push(param)

    if (params.length === length) return func(...params)
    else return next
  }

  return next
}

// test
const sum = (a, b) => a + b
const fn1 = curry(sum)
const fn2 = curry(sum)
const fn3 = curry(sum)

console.assert(typeof fn1 === 'function', 'test 1')
console.assert(typeof fn1(1) === 'function', 'test 2')
console.assert(fn1(2) === 3, 'test 3')
console.assert(fn2(1)(2) === 3, 'test 4')
console.assert(typeof fn3()() === 'number', 'test 5')
