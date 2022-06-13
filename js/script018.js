"use strict";

const arr = [2,13,26,8,10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b) {
    return a - b;
}


// arr[99] = 0; //geht nicht komt fehler

// console.log(arr.length); // i+1 =5!!!!
// console.log(arr);


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} innerhalb ${arr}`);
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt ("","");
// const products = str.split(",");
// products.sort();
// console.log(products.join(';'));