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


// can not add new property
let user = {
  name: 'chris',
  age: 23,
  phone: '0912345678',
}

user = new Proxy(user, {
  set (target, key, value) {
    if (target.hasOwnProperty(key)) Reflect.set(target, key, value)
    else console.log('you can not add other property')
  },
})

user.aa = 00 // you can not add other property
user.name = 123 // pass




// you can keep private property
let bankAccount = {
  _api_token: '6xt1931toy13931293',
  _money: 5000000,

  // use private method change ...
  deposit (value) {
    this._money += value
  }
}

bankAccount = new Proxy(bankAccount, {
  set (target, key) {
    if (key.includes('_')) {
      console.log('can not set this property')
      return Reflect.set(target)
    }
  }
})

bankAccount._money = 10000000 // can not set this property
console.log(bankAccount) // { _api_token: '6xt1931toy13931293', _money: 5000000, deposit: [Function: deposit], }




// Proxy revocable
let revocable = Proxy.revocable({}, {
  set (target, key) {
    return target[key] = 'nothing'
  }
})

revocable // {proxy: Proxy, revoke: f }

revocable.revoke() // cancel proxy
