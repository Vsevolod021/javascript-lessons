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


let array = new Array(2, 3, 4);
console.log(array.length);
console.log(array);

let array1 = new Array(10000); // Создает массив длиной 10000 (пустой)
console.log(array1); 
*/
// Task #1

/*
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
*/

// Task #2
/*
let arr = ["a", "b"];

arr.push(function(){
    console.log(this[1]);
});

arr[2]();
*/

// Task 3
/*
function sumInput() {
    let arr = []
    let sum = 0;

    do {
        let elem = prompt('Введите число');
        if (elem !== '' && elem !== null && !isNaN(elem)) {
            arr.push(+elem);
            sum += +elem;
        } else {
            return sum;
        }
    } while (true) 
}

alert(sumInput())

// null 'stringh' 

*/
// Task 4
function getMaxSubSum(array) {
    let maxSum = 0

    for (let i=0; i<array.lenght; i++) {
        let sumFixedStart = 0;

        for (let j=i; j<array.lenght; j++) {
            sumFixedStart += array[j];
            maxSum = Math.max(sumFixedStart, maxSum);
        }
    }

    return maxSum;
}

function getMaxSum(array) {
    let maxSum = 0;
    let sum = 0;

    for (let elem of array) {
        sum += elem;
        maxSum = Math.max(maxSum, sum);
        debugger
        if (sum < 0) sum = 0;
        debugger
    }
    return maxSum;
}

// alert(getMaxSum([2, -1, 2, 3, -9]));
