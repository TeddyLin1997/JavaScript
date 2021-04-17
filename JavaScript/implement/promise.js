function Promise (executor) {
  this.status = 'pending'
  this.data = undefined
  this.onResolvedCallbacks = []
  this.onRejectedCallbacks = []

  this.resolve = (value) => {
    if (this.status === 'pending') {
      this.status = 'resolved'
      this.data = value
      // resolve之後 執行then/catch的回調
      this.onResolvedCallbacks.forEach(callback => callback(this.data))
    }
  }

  this.reject = (reason) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.data = reason
      // reject之後 執行then/catch的回調
      this.onRejectedCallbacks.forEach(callback => callback(this.data))
    }
  }

  // executor可能出錯 因此錯誤時執行reject()
  try {
    executor(this.resolve, this.reject)
  } catch (err) {
    reject(err)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  // onResolved 和 onRejected 只能為函式 否則忽略
  if (typeof onResolved !== 'function') onResolved = (value) => {}
  if (typeof onRejected !== 'function') onRejected = (reason) => {}

  const promise2 = new Promise((resolve, reject) => {
    if (this.status === 'pending') {
      this.onResolvedCallbacks.push(onResolved)
      this.onRejectedCallbacks.push(onRejected)
    } else if (this.status === 'rejected') {
      reject(onRejected(this.data))
    } else if (this.status === 'resolved') {
      resolve(onResolved(this.data))
    }
  })

  return promise2
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000); 
}).then(res => {
  console.log('then1', res)
  return ++res
}).then(res => {
  console.log('then2', res)
})
