// Implement your own apply
Function.prototype.ownApply = function (context, args) {
  // this === row quote function
  const property = Symbol['apply']
  context[property] = this
  context[property](...args)
  delete context[property]
}

// Implement your own call
Function.prototype.ownCall = function (context, ...args) {
  // this === row quote function
  const property = Symbol['call']
  context[property] = this
  context[property](...args)
  delete context[property]
}


// Implement your own bind
Function.prototype.ownBind = function (context, ...args) {
  const bindFn = (...args2) => {
    // this === row quote function
    this.ownCall(context, ...args, ...args2)
  }
  bindFn.prototype = this.prototype
  return bindFn
}