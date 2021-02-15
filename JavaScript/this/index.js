// Arrow Function
let foo = {
  funcFoo: function () {
    console.log(this)
  }
}

let bar = {
  funcBar: () => {
    console.log(this)
  }
}

foo.funcFoo() // foo
bar.funcBar() // windows

foo.funcFoo.call(bar) // bar
bar.funcBar.call(foo) // windows

// 一般函示根據呼叫的對象決定 this
// 箭頭函式根據被建立的地點決定 this



// setTimeOut

let obj1 = {
  funcNormal: function () {
    setTimeout( function () {
      console.log(this)
    }, 10);
  }
}

obj1.funcNormal() //windows
// 因為 windows 執行 setTimeout 物件

let obj2 = {
  funcArrow: function () {
    setTimeout( () => {
      console.log(this) 
    }, 10);
  }
}

obj2.funcArrow() // obj2
// 箭頭函式沒有this 因此指向外層的obj2

