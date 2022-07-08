"use strict";
//----1)

//let x = 5; alert( x++ ); kommt 5 

//let x = 5; alert( ++x );  kommt 6

//----2)

// [] + false - null + true

// console.log(typeof([] + false)); // "false"

//  console.log([] + false - null + true); // NaN

//----3)

//let y = 1;
//let x = y = 2;
//alert(x);             // 2

// ----4)

//console.log([] + 1 + 2); // "12"

// ----5)

//  alert("1"[0]);    // 1


// ----6)

// console.log(2 && 1 && null && 0 && undefined); .......
//  И (&&) запинается на лжи...наткнулся на null и дальше смысла нет смотреть свегда выводит ложь
//  или (||) запинается на правде..

// ----7)

//console.log(!!( 1 && 2 ) === ( 1 && 2)); // false


// ----8)
                  3
// alert( null || 2 && 3 || 4 ); наткнулся на тройку и возвращает ееюю

// ----9)

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log( a == b); false a nicht gleich b


// -----10)

// alert( +"Infinity" ); Infinity


// -----11)

// console.log("Ёжик" > "яблоко"); // false сравнение по символу таблица юникода

// ------12)
                       // 2 тут или споткнулся на правде и дальше будет выводить только -2
// console.log(0 || "" || 2 || undefined || true || false); // 2