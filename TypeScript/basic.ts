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
const method = (options: { name: string }): string => options.name
// 不會出現錯誤提示
const obj1 = { name: 'chris', age: 23 }
// 建立物件 積極註記型別
const obj2: { name: string } = { name: 'chris', age: 23 }

method(obj1)
method(obj2)