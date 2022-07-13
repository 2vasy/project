"use strict";

const box = document.getElementById('box'); // id = box

console.log(box); //work only in the browser

const btns = document.getElementsByTagName('button'); // ('button)[1];

console.log(btns); //(btns[1]);// HTML Collection 

const circles = document.getElementsByClassName('circle');

console.log(circles);




const hearts = document.querySelectorAll('.heart'); // forEach  // querySelector -- All elements


console.log(hearts);

//    hearts.forEach(item => {
//        console.log(item);
//    });
 

const oneHeart = document.querySelector('.heart');  // querySelector --only 1 element

console.log(oneHeart);







