'use strict';
//共通
const length = 40;
//
let start = new Date();

let Fibonacci = new Object();
Fibonacci[0] = 0;
Fibonacci[1] = 1;
for (let i = 0; i <= length; i++){
    if (i === 0 || i===1) {
        console.log(Fibonacci[i]);
    } else {
        let tmp = Fibonacci[i - 2] + Fibonacci[i - 1];
        Fibonacci[i] = tmp;
        console.log(i+' '+Fibonacci[i]);
    }
}

let end1 = new Date();

//再帰
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i <= length; i++) {
    console.log(i+' '+fib(i));
}

let end2 = new Date();

// time node app.js で可能
let ms1 = end1.getTime() - start.getTime();
console.log(ms1);
let ms2 = end2.getTime() - end1.getTime();
console.log(ms2);