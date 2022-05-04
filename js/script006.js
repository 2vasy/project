"use strict";

console.log('arr' + "-object");
//console.log(4 + +"5");// так работает унарный плюс

let incr = 10,
    decr = 10;

    //incr++;// инкремент, постфиксный   увеличивает на 1        
    //decr--; // декремент, постфиксный   уменьшает на 1

   // ++incr; // префиксный
    //--decr; //префиксный

console.log(++incr);
console.log(--decr);

console.log(5%2);

//console.log(2*4 === '8');

console.log(2+2*2 === 8);// false

console.log(2+2*2 !=8);// true

console.log(2+2*2 !== '6');// true 6 число проверка строго по типу. (2+2*2) тут мы получили 6
// ввиде числа а тут у нас '6' в виде строки поэтому в итоге 6 !== 6.

console.log(2+2*2 != '6');//false тут 6 = 6 а знак стоит не равно (!=) поэтому все выражение не истина

//&&  // and      
//||  // or
//не равнно !=
//  строго не равно !==

const isChecked = true,
       isClose = false;

//console.log(isChecked && isClose);

//console.log(isChecked || isClose);

console.log(isChecked || !isClose);

