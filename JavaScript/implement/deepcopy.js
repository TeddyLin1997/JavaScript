const deepCopy = (target, map = new WeakMap()) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {}

    // map 解決循環引用
    if (map.has(target)) return map.get(target )
    else map.set(target, cloneTarget)

    for (let prop in target) {
      if (Object.hasOwnProperty.call(target, prop)) {
        cloneTarget[prop] = deepCopy(target[prop], map)
      }
    }

    return cloneTarget
  } else return target
}
