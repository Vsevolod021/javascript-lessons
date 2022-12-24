// let arr = [1, 2, 3, 4, 5, 6];
// let [copy, ...copy1] = arr;
// alert(copy);
// alert(copy1);

// let arrCopy = [...arr, 7];
// alert(arrCopy);


// let sumNumbers = function (...args) {
//     console.log(Array.isArray(args));
// }
// alert(sumNumbers(1, 2, 4, 5));

let firstEmployee = {
    name: 'John',
    age: 30,
    stack: 'React'
}

let secondEmployee = {
    name: 'Alex',
    age: 35,
    stack: 'Go'
}

let team = [
    firstEmployee,
    secondEmployee
];

console.log(team);

let PM = {
    name: 'Jason',
    age: 27,
    stack: 'notion'
}

let fullTeam = [PM, ...team];

console.log(fullTeam);