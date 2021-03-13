function isApple () {
  let result = false
  if (['Mac', 'Iphone', 'Ipad'].includes('Mac')) {
    console.log('disscuss')
    result =  true
  }

  return isApple = () => result
}

// only run conditional expressions once
console.log(1, '------------')
isApple()
console.log(2, '------------')
isApple()
console.log(3, '------------')
isApple()
