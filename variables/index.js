// variables

// var
// => range is in function
function declare () {
  var foo =  'foo'
}
console.log(foo) // undefined


// let
// => range is in scope
// => Cannot be declared repeatedly
let bar = 0
let bar = 1 // SyntaxError
// example 1:
if (true) {
  let bar = 1

  if  (true) {
    let bar = 2
    console.log(bar) // 2
  }
}
// example 2:
if (true) {
  let bar = 1

  if  (true) {
    // let bar = 2
    console.log(bar) // 1
  }
}
console.log(bar) // 0


// const 
// => range is in scope
// => cannot repeat the point value
// => Cannot be declared repeatedly
const data = 10
const data = 20 // SyntaxError
data = 20 // TypeError

const obj = { name: 'Chris', sex: 'male' }
obj.name = 'Even'
console.log(obj) // { name: 'Even', sex: 'male' }
