'use strict';

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS (lang,callback) {
    console.log(` я учу: ${lang}`);
    callback();
}

function done() {
    console.log('ich habe es gemacht!');
}

learnJS('JavaScript', done);




