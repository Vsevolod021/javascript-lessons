// function makeWorker() {
//     let name = 'john';

//     return function() {
//         alert(name);
//     }
// }

// name = 'Ryan';

// let work = makeWorker();

// work();

// function sayHi() {
//     console.log(`Hello ${userName}`)
// }

// // let userName = 'savs';

// sayHi();



// function makeCounter() {
//     let count = 0;
     
//     return function() {
//         return ++count;
//     }
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter()

// alert(counter1());
// alert(counter1());
// alert(counter2());
// alert(counter2());


// function createCalcFunction(n) {
//     return function() {
//         console.log(10 * n);
//     }
// }

// let calc = createCalcFunction(42);
// let calc2 = createCalcFunction(43);

// calc();
// calc2();

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// console.log( sum(1)(2) );

function inBetween(min, max) {
    count = 0

    return function(elem) {
        return (elem >= min && elem <= max);
    }
}


function inArray(array) {
    return function(elem) {
        console.log(array);
        return array.includes(elem);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) );
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Zete", age: 29, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key) {
    return function(a, b) {
        return (a[key] > b[key]) ? 1 : -1;
    }
}

// users.sort(byField('name'));
// console.log('По имени');
// console.log(users);
// users.sort(byField('age'));
// console.log('По возрасту');
// console.log(users);


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {

    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  shooters[5]();
}

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10

makeArmy();