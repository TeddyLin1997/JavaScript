
// 冒泡排序
function bubbleSort () {
  const ary = [5, 1, 81, 63, 51, 30, 31]

  for (let i = 0; i < ary.length; i++) {
    for (let j = i; j < ary.length; j++) {
      if (ary[j] > ary[j + 1]) [ary[j], ary[j+1]] = [ary[j+1], ary[j]]
    }
  }

  console.log(ary)
  return ary
}

// 選擇排序
function selectionSort () {
  const ary = [5, 1, 81, 63, 51, 30, 31]

  for (let i = 0; i < ary.length; i++) {
    let index = i
    for (let j = i; j < ary.length; j++) {
      if (ary[i] > ary[j]) index = j
    }
    [ary[i], ary[index]] = [ary[index], ary[i]]
  }
  
  console.log(ary)
  return ary
}


// 插入排序
function insertionSort () {
  const ary = [5, 1, 81, 63, 51, 30, 31]

  for (let i = 1; i < ary.length; i++) {
    let target = ary[i]
    let j = i - 1
    while (j >= 0 && target < ary[j]) {
      ary[j+1] = ary[j]
      j--
    }
    ary[j+1] = target  // 重點 j+1
  }

  console.log(ary)
  return ary
}

// 合併排序
function mergeSort () {
  const ary = [5, 1, 81, 63, 51, 30, 31]

  function spilt(arr) {
    if (arr.length === 1) return arr

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(spilt(left), spilt(right))
  }

  function merge(left, right) {
    const result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex] ) {
        result.push(left[leftIndex])
        ++leftIndex
      } else {
        result.push(right[rightIndex])
        ++rightIndex
      }
    }

    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
  }

  console.log(spilt(ary))
  return ary
}

// 快速排序
function quickSort () {
  const ary = [5, 1, 81, 63, 51, 30, 31, 30]


  function divide (arr) {
    if (arr.length <= 1) return arr

    const pivot = arr.length - 1
    const left = []
    const right = []

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[pivot]) right.push(arr[i])
      else left.push(arr[i])
    }

    return divide(left).concat([arr[pivot]]).concat(divide(right))
  }

  console.log(divide(ary))
  return ary
}
