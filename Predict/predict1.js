// closure concept

function test() {
    let a = 10;

    return function() {
        a++;
        return a;
    };
}

const fn = test();

console.log(fn());
console.log(fn());
console.log(fn());