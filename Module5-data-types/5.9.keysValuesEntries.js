let userInfo = {
    name: 'John',
    secondName: 'Kalligan',
    age: 30,
    profession: 'mentor',
}

// это массивы 
console.log(Object.keys(userInfo));
console.log(Object.values(userInfo));
console.log(Object.entries(userInfo));

console.log(Array.isArray( Object.entries(userInfo) )); // true

let userMap = new Map([
    ['name', 'John'],
    ['secondName', 'Kalligan'],
    ['age', 30],
    ['profession', 'mentor'],
])

console.log(userMap.values());
console.log(userMap.keys());
console.log(userMap.entries());

console.log(Array.isArray( userMap.entries() )); // false

let prices = {
    banana: 1,
    orange: 2, 
    meat: 4
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(elem => [elem[0], elem[1]*2])
)

console.log(doublePrices);

// task #1 
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// function sumSalaries(salaries) {
//     let sum = 0
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
// }

// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

// alert( sumSalaries(salaries) ); // 650

// task #2
let user = {
  name: 'John',
  age: 30
};

function count(user) {
    return Object.keys(user).length;
}

alert( count(user) ); // 2