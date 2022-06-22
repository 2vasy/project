"use strict";


let str = "some";

let strObj = new String (str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldlier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldlier);

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldlier;
// Object.setPrototypeOf(jonh,soldlier);

// console.log(jonh.armor);
jonh.sayHello();