'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
//box.style.cssText = `background-color: blue; width: ${num}px`;

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; fehler
circles[0].style.backgroundColor = 'red'; // richtig

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('ich bin da');

div.classList.add('black');

//document.body.append(div); // die Methode (append) bedeutet dass div  am ende commt
//document.querySelector('.wrapper').append(div);
//wrapper.append(div);