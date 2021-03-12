// use function scope to save variables
function initWallect () {
  let amount = 10000
  return {
    deposit: (value) => {
      amount += value
      return amount
    },

    withdraw: (value) => {
      amount -= value
      return amount
    },

    balance: () => {
      return amount
    },
  }
}

const wallect = initWallect()
wallect.balance() // 10000
wallect.deposit(500) // 10500
wallect.withdraw(200) // 8500


// closure can use in cache
function calcAmount (value) {
  return value ** value
}

function cache () {
  const  cacheForm = {}
  return function (value) {
    if (cacheForm[value] === undefined) cacheForm[value] = calcAmount(value)
    return cacheForm[value]
  }
}

const form = cache()
