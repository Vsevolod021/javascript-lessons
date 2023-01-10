'use strict';
let person = {
    userName: 'John',
    age: 23,
};

let descriptor = Object.getOwnPropertyDescriptor(person, 'userName');

// console.log(JSON.stringify(descriptor, null, 2));

console.log(Object.entries(person));

// Object.defineProperty(person, 'userName', {
//     configurable: false
// });


delete person.userName;
console.log(person);
Object.defineProperty(person, 'userName', {
    enumerable: false
});

// console.log(Object.entries(person));

// person.userName = 'avsafv';
