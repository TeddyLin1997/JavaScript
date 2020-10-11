// defined method's template
function template () {}

template.prototype.getValue = function () {
  console.log('getValue')
  return this
}

template.prototype.setValue = function () {
  throw new Error('have to defind setValue')
}

template.prototype.filterValue = function () {
  throw new Error('have to defind updateValue')
}

template.prototype.publishValue = function () {
  throw new Error('have to defind publishValue')
}

template.prototype.init = function () {
  this.setValue()
  this.filterValue()
  this.publishValue()
  console.log('success')
}

const instance1 = function () {}
instance1.prototype = new template()
instance1.prototype.getValue()  // getValue
instance1.prototype.init() // Error: have to defind setValue

const instance2 = function () {}
instance2.prototype = new template()

instance2.prototype.setValue = function () {
  console.log('setValue')
}
instance2.prototype.filterValue = function () {
  console.log('filterValue')
}
instance2.prototype.publishValue = function () {
  console.log('publishValue')
}

instance2.prototype.init() // success
