/* let user = new Object();

user.name = prompt('Your name?', 'Alex');
user.age = prompt('Your age?', 23);
user.profession = prompt('Your profession', 'programmer');

alert(user.name); 

let newUser = {
    name: 'John',
    age: 18
} 

// alert(
// `name: ${newUser.name}\nage: ${newUser.age}\n`);
// alert('А теперь происходит магия');
// delete newUser.age;

// alert(
// `name: ${newUser.name}\nage: ${newUser.age}`);

newUser['isHuman'] = true;

// alert(newUser.isHuman);

console.log(newUser);

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

// alert( bag.apple ); // 5, если fruit="apple"
// console.log(bag);


function makeUser (userName, age, gender) {
    return {
        userName,
        age,
        gender
    };
}

let firstUser = makeUser('Victoria', 21, 'female');*/

// task #1 
function changeUser() {
    let user = {};
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;
    console.log(user);
}
// changeUser();

// task #2
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

/* let something = {};
console.log(isEmpty(something));
let something1 = {
    name: 'me'
};
console.log(isEmpty(something1)); */

// task #3 
function countSum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum+=obj[key];
    }
    return sum;
}

/* console.log( countSum({
        John: 100,
        Ann: 160,
        Pete: 130
    })
); */

// task #4
function multipluNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key]*=2
        } 
    }
    return obj;
}

console.log( multipluNumeric(
    {
        width: 200,
        height: 300,
        title: "My menu"
    }) 
);