// timer will in currency marcotask exec micotask
setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(function() {
      console.log('promise1');
      // process._tickCallback() => node 11 update
  });
}, 0);
setTimeout(() => {
  console.log('timer2');
  Promise.resolve().then(function() {
      console.log('promise2');
      // process._tickCallback() => node 11 update
  });
}, 0);

// timer 1
// promise 1
// timer 2
// promise 2

