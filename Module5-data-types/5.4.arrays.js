/* let arr = new Array();

arr = ['Apple', 'Samsung', 'Xiaomi'];

alert(arr.length);
arr.unshift('Nokia');
alert(arr);
alert(arr.length); */


// ЗАПОЛНЕНИЕ И ОПУСТОШЕНИЕ МАССИВА
/*

                    ARRAY
             |                  / \
             |  push(elem)       |  pop() 
            \ /                  |
    ____________________________________
    |____________last elem_____________| 
    |__________________________________|
    |__________________________________|     
    |___________first elem_____________|

             |                  / \
             |  shift()          |  unshift(elem)          
            \ /                  |   
                              
*/

/*
let arr1 = [1, 2, 3, 4];
arr1.unshift(4);
console.log(arr1);
arr1.shift(7);
console.log(arr1);
arr1.push(10);
console.log(arr1);
arr1.pop(10);
console.log(arr1);
console.log(arr1.length);
arr1.aveave = 'abvsfbv';
console.log(arr1);
console.log(arr1.length);
*/

// ПЕРЕБОР МАССИВА
/*
let arr = ['fff'];

console.log('Перебор с помощью for in ');
for (let elem in arr) {
    console.log(elem);
}

console.log('А теперь потестим for of');
for (let elem of arr) {
    console.log(elem);
}

console.log('arr не псевдомассив');

console.log('А теперь обнуляем');
arr.length = 0;

console.log(arr);
*/

let array = new Array(2, 3, 4);
console.log(array.length);
console.log(array);

let array1 = new Array(10000); // Создает массив длиной 10000 (пустой)
console.log(array1); 

// Task #1

const styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
styles[1] = 'Классика';
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);