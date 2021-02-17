// 陣列
const ary: (number | string)[] = []

// 元組 => 有順序性
type stock = [string, string, number, Date]

const tsmc: stock = ['台積電', '2330', 631, new Date(1993, 4, 13)]
const rtk: stock = ['瑞昱', '2379', 631, new Date(2001, 10, 17)]
const mtk: stock = ['聯發科', '2454', 631, new Date(1993, 7, 8)]

// 列舉 => 無序, 類似集合
enum country { Taipei, Moscow, Tokyo, LA, NewYork }

const currLocation = country.Taipei
const locationName = country[country.Taipei]

// 函式
type mathMethods = (num1: number, num2: number) => number
const add: mathMethods = (num1, num2) => num1 + num2

// 函式雷點
type person = { name: string }
const method = (options: person): string => options.name

const obj1 = { name: 'chris', age: 23 }
const obj2: person = { name: 'chris', age: 23 }

// 不會出現錯誤提示
method(obj1)
method(obj2)

// 物件
type userInfo = {
  account: string,
  password: string,
  // 非必填屬性
  birth?: Date,
  gender?: string,
}

const userInstance: userInfo = {
  account: '123',
  password: '123',
}

// never => 中斷執行 or 卡住
const error = () => { throw new Error('123') }

// 複合型別
type requireInfo = {
  account: string,
  password: string,
}
type noRequireInfo = {
  birth?: Date,
  gender?: string,
}
type info = requireInfo & noRequireInfo

// indexable & readonly
type typeDict = {
  [prop: string]: number
  readonly privacy: number
}

// promise object
function xhr (): Promise<any> {
  return new Promise(() => {})
}

