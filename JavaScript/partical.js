function getRepostriesUrl (domain, username, repostries) {
  return `${domain}/${username}/${repostries}`
}

function partial (fn) {
  const args = [].slice.call(arguments, 1)
  return function () {
    const newArgs = [ ...args, ...arguments ]
    return fn(...newArgs)
  }
}

const githubDomain = partial(getRepostriesUrl, 'https://github.com')
const result = githubDomain('ChrisLin1997', 'javascript')
