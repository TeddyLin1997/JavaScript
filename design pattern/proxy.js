// proxy
const blackList = ['user1', 'user2', 'user3', 'user4', 'user5']

function getMessage (data) {
  console.log(data.message)
}

function proxyGetMessage (data) {
  if (blackList.includes(data.name)) return // block someone message
  else getMessage(data) // accept message
}

// interface MessageData {
//   name: string,
//   message: string,
// }
proxyGetMessage(MessageData)


// cacheProxy
function getData (url) {
  return axios.get(url)
    .then(res => res)
    .catch(err => console.log(err))
}

const getCacheApiData = () => {
  let cache = {
    url: '',
    data: null,
  }

  return async (url) => {
    if (cache.url !== url) {
      cache.url = url
      cache.data = await getData(url)
    }
    return cache.data
  }
}

getCacheApiData(url)