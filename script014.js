'use strict';

const str = "teSt";
// console.log(str.length); показывает длинну строки

const arr = [1, 2, 4];    
// console.log(arr.length);    //показывает содержание массива

// console.log(str[2]);  //показывает символ по номеру индекса

// console.log(str.toUpperCase()); // переводит текст с большие буква

// console.log(str.toLowerCase()); //  перевщдит текст в маленькие буквы



const fruit = "Some fruit";


console.log(fruit.indexOf("q"));  // получим -1 это значит буквы такой нет

console.log(fruit.indexOf("fruit")); // находит индекс с которого начинается кусочек строки который в скобках в скобках


const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.slice(6)); //вырезвет кусок строки с указанного индекса
// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5)); // показывает сколько сиволов надо вырезать показывает вторая цифра(5)

const num = 12.2;

console.log(Math.round(num)); //  округляет число до целого

const test = "12.2px";

// console.log(parseInt(test));     // обрезает строку до целого числа---12

console.log(parseFloat(test));     // возвращает дробное значение с точкой --- 12.2