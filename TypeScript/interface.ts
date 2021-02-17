// interface
interface accountBase {
  account: string,
  password: string,
}

interface accointInfo {
  name: string,
  age: number,
  gender: string,
}

interface userAccount extends accountBase, accointInfo {}

// 提示需要的介面
const accountInstance: userAccount = {}

// interface merge
interface device {
  cpu: string,
  gpu: string,
  memory: string,
}

interface device {
  screen: string
  mouse: string
  keyboard: string
}

// indexable types
interface interfaceDict {
  [prop: string]: number,
}

// readonly 
interface form {
  readonly privacy: string
  // function
  constructor: { (...arg: any): any }
}

const detailForm: form = {
  privacy: 'MSJIO1239JKDOIDA23',
  constructor: () => ({ name: 'chris' })
}