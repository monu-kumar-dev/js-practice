// Javascript is a single threaded synchronous language.

// synchronous example:---.
// console.log(10);
// console.log(20);
// console.log(30);

// outputs:-->
// 10
// 20
// 30

// js behaviour: asynchronous
// console.log(10);
// setTimeout(() => {
//   console.log(20);
// }, 2000);
// console.log(30);

// outputs:---.
// 10
// 30
// 20

// Single Threaded: One task will be executed at a time.

console.log(10);
const timer = Date.now();
// console.log(timer);
// here timer older time
while (Date.now() - timer < 2000) {
    // wait for 2 second
}
console.log(20);
console.log(30);

