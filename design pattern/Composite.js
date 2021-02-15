const constructMarco = function () {
  return {
    commandList: [],

    add: function (command) {
      this.commandList.push(command)
      return this
    },
  
    execute: function () {
      this.commandList.forEach(command => {
        command.execute()
      })
    },
  }
}

const marcoInstance1 = constructMarco()
const marcoInstance2 = constructMarco()
const marcoAllInstance = constructMarco()

// can't in children node add command
const thread1 = {
  add: () => { throw new Error('error') },
  execute: () => { console.log('thread1') },
}
const thread2 = {
  add: () => { throw new Error('error') },
  execute: () => { console.log('thread2') },
}
const thread3 = {
  add: () => { throw new Error('error') },
  execute: () => { console.log('thread3') },
}
const thread4 = {
  add: () => { throw new Error('error') },
  execute: () => { console.log('thread4') },
}
const thread5 = {
  add: () => { throw new Error('error') },
  execute: () => { console.log('thread5') },
}
const thread6 = {
  add: () => { throw new Error('error') },
  execute: () => { console.log('thread6') },
}

marcoInstance1.add(thread1).add(thread2).add(thread3)

marcoInstance2.add(thread4).add(thread5).add(thread6)

marcoAllInstance.add(marcoInstance1).add(marcoInstance2)

marcoAllInstance.execute()
// thread1
// thread2
// thread3
// thread4
// thread5
// thread6
