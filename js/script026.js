'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), ///auch functioniert
      oneHeart = wrapper.querySelector('.heart');

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
wrapper.append(div);
//wrapper.appendChild(div); alte
//wrapper.prepend(div); die Methode (prepend) bedeutet dass div  am Anfang commt

//wrapper.insertBefore(div, hearts[0]);
//hearts[0].before(div); funcktioniert wie append
//hearts[0].after(div);

//circles[0].remove(); delete/ entfernen
//wrapper.removeChild(hearts[1]); alte 

hearts[0].replaceWith(circles[0]); //tauschen platz

//wrapper.replaceChild(circles[0], hearts[0]); tauschen alte

//div.innerHTML = "Hello World!";

div.innerHTML = "<h1>Hello World!</h1>"; //kann man HTML strukturieren

//div.textContent = "Hello";

//div.textContent = "<h1>Hello World!</h1>"; //passt nicht wegen sicherkeit


//div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');

//div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');

//div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');