function Promise (executor) {
  this.type = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected',
  }
  this.status = this.type.pending
  this.data = undefined
  this.onResolvedCallbacks = []
  this.onRejectedCallbacks = []

  this.resolve = (value) => {
    if (this.status === this.type.pending) {
      this.status = this.type.fulfilled
      this.data = value
      
      while (this.onResolvedCallbacks.length) {
        this.onResolvedCallbacks.shift()(this.data)
      }
    }
  }

  this.reject = (reason) => {
    if (this.status === this.type.pending) {
      this.status = this.type.rejected
      this.data = reason

      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.data)
      }
    }
  }

  try {
    executor(this.resolve, this.reject)
  } catch (err) {
    this.reject(err)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  if (typeof onResolved !== 'function') onResolved = () => this.data
  if (typeof onRejected !== 'function') onRejected = () => this.data

  const nextPromise = new Promise((resolve, reject) => {
    if (this.status === this.type.pending) {
        // chain feature
        this.onResolvedCallbacks.push(() => {
          queueMicrotask(() => {
            const result = onResolved(this.data)
            resolvePromise(result, resolve, reject)
          })
        })
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            const result = onRejected(this.data)
            resolvePromise(result, resolve, reject)
          })
        })
    } else if (this.status === this.type.rejected) {
      queueMicrotask(() => {
        const result = onRejected(this.data)
        resolvePromise(result, resolve, reject)
      })
    } else if (this.status === this.type.fulfilled) {
      queueMicrotask(() => {
        const result = onResolved(this.data)
        resolvePromise(result, resolve, reject)
      })
    }
  })

  return nextPromise

  function resolvePromise(result, resolve, reject) {
    if (result instanceof Promise) result.then(resolve, reject)
    else resolve(result)
  }
}


// test
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
}).then(res => {
  console.log('then1', res)
  return ++res
}).then(res => {
  console.log('then2', res)
})
