let id1 = Symbol('id1'); // новый тип данных
let id2 = Symbol('id2');

/* 
alert(typeof id.description);
alert(typeof id.toString())
alert(typeof id);
console.log(id);
*/

let user = {};

user[id1] = '1';
user[id2] = '2';

console.log(user);

/* let admin = {
    [Symbol('admin')]: 'admin', 
    [Symbol('admin')]: 'no admin'
};

console.log(admin);

let moderator = {
    'moder': 'moder',
    'moder': 'no moder'
}

console.log(moderator); */

let user_copy = Object.assign({isCopy: true}, user);

console.log(user);
console.log(user_copy);


// Глобальные символы

/* 
Глобальный символ id, который можно записать в любую переменную
и это будет тот же символ
*/
let id0 = Symbol.for('id'); 

// работает только для неглобальных
console.log(Symbol.keyFor(id0)); 
console.log(id0);