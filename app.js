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

//Mapを使ってみよう
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib_map(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib_map(n - 1) + fib_map(n - 2);
    memo.set(n, value);
    return value;
}
for (let i = 0; i <= length; i++){
    console.log(i + ' ' + fib_map(i));
}

let end3 = new Date();

// time node app.js で可能
let ms1 = end1.getTime() - start.getTime();
console.log(ms1);
let ms2 = end2.getTime() - end1.getTime();
console.log(ms2);
let ms3 = end3.getTime() - end2.getTime();
console.log(ms3);