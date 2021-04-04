function convertToNumber (value) {
  return typeof value === 'string' ? Number(value) : value
}

function fixedToTwo (value) {
  return typeof value === 'number' ? value.toFixed(2) : value
}

function compose (...funcs) {
  return function (value) {
    return funcs.reduce((result, func) => func(result), value)
  }
}

const allToFixedTwo = compose(convertToNumber, fixedToTwo)

// 100.21
const result = allToFixedTwo('100.21312')
