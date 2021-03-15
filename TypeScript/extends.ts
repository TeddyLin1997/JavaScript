interface User {
  name: string,
  age: number,
  gender: string,
  isMarryed: boolean,
}

type UserPropName = keyof User

function getProperty<T, K extends keyof T> (target: T, props: K): T[K] {
  return target[props]
}