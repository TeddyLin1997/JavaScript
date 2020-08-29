// use proxy to validate
let student = {}

student = new Proxy(student, {
  set (target, key, value, proxy) {
    const nameRegex = /[a-zA-Z ]{1,20}/
    if (key === 'name' && !nameRegex.test(value)) {
      throw Error('this name is invalid')
    }

    const phoneRegex = /09[0-9]{8}/
    if (key === 'phone' && !phoneRegex.test(value)) throw Error('this phone is invalid')

    return Reflect.set(target, key, value, proxy)
  },
})

student.name = '' // this name is invalid
student.name = 'chris lin' // pass

student.phone = '1234567890' // this phone is invalid
student.phone = '0955607278' // pass
