// Splice method
// let arr = [1, 2, 3, 4, 5];

// удалит все элементы, начиная с индекса 2
/*
arr.splice(2);
alert(arr);
*/

// удалит 2 элемента, начиная с индекса 0
/*
arr.splice(0, 2);
alert(arr);
*/

// удалит значение первого элемента, но при этом оставит пустое место
/*
delete arr[0];
alert(arr[0]);
*/

// удаляет 3 элемента начиная с индекса 1
// и вставляет массив [10, 100, ...]
/*
arr.splice(1, 3, [10, 100, 1000, 10000, 100000]);
console.log(arr[1]);
*/

// не удаляет ничего, начиная с 1 индекса вставляет 9,9, ...
/*
arr.splice(0, 0, 9, 9, 9, 8, 8, 8);
alert(arr);
*/

// скопирует массив в arr2 (это не тот же массив)
/*
let arr2 = arr.slice();
alert(arr2);
*/

// метод arr1.concat(arr2) 
/*
let arr = [1, 2, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
  2: 'опа',
  [Symbol.isConcatSpreadable]: true,
  length: 3, 
};

alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё


let arr = [1, 2, 3];

let arr2 = arr.concat([100, 200, [100, 200]]);

console.log(arr2);
console.log(arr);
*/

// forEach
/*
let array = ['Audi', 'Toyota', 'Opel'];

let array2 = array.forEach(elem =>
    alert(elem + 'hohoho')
);

// метод forEach ничего не возвращает
console.log(array2);


let array2 = [];

// как заполнить другой массив через forEach
array.forEach((elem, index) => {
    array2[index] = elem + 'hohohoh';
});

alert(array2);
*/

// indexOf
/*
let arr = [1, 2, 3, 4, 1];
alert(arr.indexOf(1)); // ищет слева направа
alert(arr.lastIndexOf(4, 1)); // ищет справа налево
alert(arr.includes(1, 4));
*/

// find

// let users = ['alex', 'alex', 'alex', 'peter'];
/*
let check = users.findIndex(elem => {
  console.log('hello');
  return elem == 'alex';
});
console.log(check);
*/

/*
let check = users.filter(elem => elem == 'alex');
alert(check);
*/

// Метод map
/*
let cars = ['Audi', 'Toyota', 'Cadillac', 'Porsche', 4, 3, 2000, 7];

let carsHoHo = cars.map(elem => elem + 'hoho');
console.log(cars, carsHoHo);
let carsLength = cars.map(elem => elem.length);
console.log(carsLength);


cars.sort();
console.log(cars);
*/

// let compareNumeric = (a, b) => a - b; 

// numbers.sort(compareNumeric);
/*
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.reverse();
console.log(numbers);
*/

// split и join
/*
let stack = ['Node.js', 'React', 'Vue.js', 'dotNET'];
let stackStr =  stack.join(', ');
console.log(stack);
console.log(stackStr);

stackStr += ', git';

stack = stackStr.split(', ', 3);
console.log(stack);
console.log(stackStr);
*/

// reduce
/*
let arr = [1];

let result = arr.reduceRight((sum, current) => sum + current);

alert(result); // 15
*/

// this context
/*
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age <= this.maxAge;
  },
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

let soldiers = users.filter(army.canJoin, army);
console.log(soldiers);
*/


// TASKS
// task #1

function camelize(str) {
  let arr = str.split('-');
  arr = arr.map((elem, index) => {
    if (index) {
      return (elem[0].toUpperCase() + elem.slice(1));
    }
    return (elem[0] + elem.slice(1));
  });
  return arr.join('');
} 

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize('background-color'));



// task #2

function filterRange(arr, a, b)  {
  return arr.filter(elem => elem >= Math.min(a, b) && elem <= Math.max(a, b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)



// task #3

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]



// task #4

let arr = [5, 2, -1, 14, 17];

arr.sort((a, b) => b - a);
alert(arr);



// task #5

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().copy();
}

let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)



// task #6

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    a = +str.split(' ')[0];
    b = +str.split(' ')[2];
    oper = str.split(' ')[1];

    if (oper in this.methods) {
      return this.methods[oper](a, b);
    }
  };

  this.addMethod = function (oper, method) {
    this.methods[oper] = method;
  };
}


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
let result1 = powerCalc.calculate('1 + 3')
alert(result1); // 8



// task #7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша



// task #8

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => {
  return { fullName: item.name + ' ' + item.surname, id: item.id }
});
  

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


// task #9 

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let sortByAge = (arr) => {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
};

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя



// task #10

let arr = [1, 2, 3];

// function shuffle(arr) {
//   arr.sort(() => (Math.random() >= 0.5) ? 1 : -1 );
//   alert(arr);
// }

// function shuffle(arr) {
//   arr.sort(() => (Math.random() - 0.5));
//   alert(arr);
// }

// Алгоритм Фишера-Йетса тасовки
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
}

shuffle(arr);
alert(arr);



// task #11

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

function getAverageAge(arr) {
  return arr.reduce((sum, current) => sum + current.age, 0) / arr.length
}

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



// task #12

function unique(arr) {
  let set = [];
  for (let elem of arr) {
    if (!set.includes(elem)) {
      set.push(elem);
    }
  }

  return set;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O


// task #13
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {

  return users.reduce((prev, elem) => {
    prev[elem.id] = elem;
    return prev;
  }, {})

  // for(let elem of users) {
  //   usersById[elem.id] = elem;
  // }

  // return(usersById);
}

let usersById = groupById(users);

console.log(usersById);
/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// arr.splice(start, deleteCount, add, ...) - добавляет или удаляет элементы внутри массива, deleteCount - кол-воо удаляемых элементов
// arr2 = arr.slice(start, end) - копирует фрагмент массива - ВОЗВРАЩАЕТ В ДРУГОЙ МАССИВ!
// arrN - arr.concat(arr2, arr3, ...) - копирует массив + доп массивы (эл-ты) - ВОЗВРАЩАЕТ В ДРУГОЙ МАССИВ!
// arr.forEach(function(elem, index, array)) - цикл массива
// arr.indexOf(elem, from) - индекс элемента elem с from (иначе -1)
// arr.lastIndexOf(elem, from) - последний индекс элемента elem с from (иначе -1)
// arr.includes(elem, from) - вхождение элемента в массив с from
// elem = arr.find(function(elem, index, array)) - ВОЗВРАЩАЕТ ПОДХОДЯЩИЙ УСЛОВИЮ ЭЛЕМЕНТ!
// arr2 = arr.filter(funcction(elem, index, array)) - копирует все элементы, подходящие условию - ВОЗВРАЩЕТ В ДРУГОЙ МАССИВ!
// arr2 = arr.map(funcction(elem, index, array)) - копирует возвращаемое значание - ВОЗВРАЩАЕТ В ДРУГОЙ МАССИВ!
// arr.sort(function()) - сортировка массива, function() задает правило сортировки
// arr.reverse() - меняет порядок элементов
// str = arr.join(delim) - соединяет массив в строку с разграничителем delim - ВОЗВРАЩАЕТ В ДРУГУЮ СТРОКУ!
// arr = str.split(glue) - разбивает строку, склеенную glue, на элементы массива - ВОЗВРАЩАЕТ В ДРУГОЙ МАССИВ!
// result = arr.reduce(function(accumulator, elem, index, array), initial); - перебор массива с учетом предыдущего значения
//    initial - какое-то начальное значение (скажем, sum = 0), accumulator - результат предыдущего вызова
//        ВОЗВРАЩАЕТ РЕЗУЛЬТАТ ПЕРЕБОРА!
// Array.isArray(arg) - массив ли данный объект
