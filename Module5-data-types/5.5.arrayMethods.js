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

let users = ['alex', 'alex', 'alex', 'peter'];
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

// arr.splice(start, end, add, ...) - добавляет или удаляет элементы внутри массива
// arr2 = arr.slice(start, end) - копирует фрагмент массива - ВОЗВРАЩАЕТ В ДРУГОЙ МАССИВ!
// arrN - arr.concat(arr2, arr3, ...) - копирует массив + доп массивы (эл-ты) - ВОЗВРАЩАЕТ В ДРУГОЙ МАССИВ!
// arr.forEach(function(elem, index, array)) - цикл массива
// arr.indexOf(elem, from) - индекс элемента elem с from (иначе -1) 
// arr.lastIndexOf(elem, from) - последний индекс элемента elem с from (иначе -1) 
// arr.includes(elem, from) - вхождение элемента в массив с from
// elem = arr.find(function(elem, index, array)) - ВОЗВРАЩАЕТ ПОДХОДЯЩИЙ УСЛОВИЮ ЭЛЕМЕНТ!
// arr2 = arr.filter(funcction(elem, index, array)) - копирует все элементы, подходящие условию - ВОЗВРАЩЕТ В ДРУГОЙ МАССИВ!  

 