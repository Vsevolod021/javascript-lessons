/*
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

let users = ['john', 'jack', 'mary'];
let [john, jack] = users;

console.log(john);
console.log(jack);
console.log(users);

let greeting = 'Hello world from Vsevolod Voskresensky';

let [hello, world, , ...user] = greeting.split(' ');

// alert(hello);
// alert(world);
// alert(user);


let [name, age] = Object.values({
    name: 'John',
    age: 20
});

console.log(name);
console.log(age);


let map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['profession', 'programmer']
]);

// let [name = 'leha', age] = map.values(); // name = 'leha' - значение по умолчанию если name - undefined
// alert(name);
// alert(age);

let {age, name, ...info2} = Object.fromEntries(map.entries()); // порядок не имеет значения

console.log(name); // John
console.log(age); // 30
console.log(info2) // {profession: 'programmer'}


// вложенная деструктуризация
let experience = {
    programming: {
        frontend: '2 years',
        backend: '1 year'
    },
    lead: '6 months',
};

let {
    programming: {
        frontend = 0,
        backend = 0 
    },
    lead = '0'
} = experience;

console.log(frontend);
console.log(backend);
console.log(lead);
// console.log(programming);
*/

// task #1
// let userData = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin=false} = userData;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// task #2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
    let maxSalary = 0;
    let richestEmployee = null;
    for (let [employee, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            richestEmployee = employee;
        }
    }
    return richestEmployee;
}

