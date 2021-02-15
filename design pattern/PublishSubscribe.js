// create publisher instance
const publisher = {}

// add subscriber
publisher.subscribeList = {}

// have user subscribe publisher => user use method to receive message
publisher.subscribe = function ({ user, theme, method }) {
  console.log(`${user} subscribe the ${theme}`)

  this.subscribeList[theme] = this.subscribeList[theme] || []
  this.subscribeList[theme].push({ user, method })
}

// release messages
publisher.release = function ({theme, content}) {
  if (!this.subscribeList[theme]) {
    console.log('not have subscriber')
    return
  }
  this.subscribeList[theme].forEach(object => {
    console.log(object.user, 'receive message')
    object.method.apply(this, arguments)
  });
}



// ----------------Usage----------------

// subscriber receives message for followed theme
function receiveMessage ({theme, content}) {
  console.log('Theme:', theme)
  console.log('=>Content:', content)
}

// subscriber
const subscriber = {
  user: 'chris',
  theme: 'programing',
  method: receiveMessage,
}
publisher.subscribe(subscriber)

// publisher
const publishMessage = {
  theme: 'programing',
  content: 'javascript is good',
}
publisher.release(publishMessage)
