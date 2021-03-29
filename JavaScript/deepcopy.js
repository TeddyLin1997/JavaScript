const deepCopy = (target, map = new WeakMap()) => {
  // map 解決循環引用
  if (map.get(target)) return target 

  if (typeof target === 'object' && target !== null) {
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepCopy(target[prop], map)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
