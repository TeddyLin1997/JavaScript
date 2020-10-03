// simple singleton
let instance = null

function getInstance () {
  if (!instance) {
    instance = {
      foo: 'foo',
      bar: 'bar',
    }
  }
  return instance
}


// single timer
let timerInstance = null

function timer () {
  if (timerInstance) {
    return timerInstance
  }
  
  // constructor
  function constructor () {
    return setInterval(() => {
      // do something
      console.log('timer')
    }, 1000);
  }

  timerInstance = constructor()
  return timerInstance
  
}