// Ключи у объекта только строковые
/*
let chaoticObject = {
    1: 'hello',
    [Symbol('id1')]: 'id1',  // не перебирается
    true: 'fvdsfvsd',
    undefined: 'heheheh',
};

for (let key in chaoticObject) {
    console.log(typeof(key));
}
*/

// ТИП ДАННЫХ 'map'
/*

let map = new Map();

map.set(1, 'dfbvdsfv');
map.set(true, 'asvdgbsbg');
map.set(Symbol('id'), 'sabvsfbv');
map.set(undefined, 'abfbeb');
map.set([1, 2, 3], 'bsdgb');
// alert(map.size);

for (let key of map) {
    // console.log('hello')
    console.log(typeof key);
}

*/

// перебор map
/*
let priceList = new Map([
    ['6s', 200],
    ['11', 400],
    ['11pro', 600],
    ['14pro', 1200],
]);

priceList.set('2g', 4000);
console.log(priceList);


for (let model of priceList.keys()) {
    console.log(model);
}

for (let price of priceList.values()) {
    console.log(price);
}

for (let entries of priceList.entries()) {
    console.log(`price of Iphone ${entries[0]} is $${entries[1]}`)
}



let obj = {
    beer: '20$',
    wine: '50$',
    whiskey: '54$'
}

let map = new Map(Object.entries(obj)); // object --> entries --> map 
console.log(map);

objClone = Object.fromEntries(map.entries()); // map --> entries --> object
console.log(objClone);
console.log(obj == objClone)
*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let map = new Map(entries) - инициализация map
// map.set(key, value) - добавить
// map.get(key) - вернуть
// map.has(key) - есть ли (true или false)
// map.delete(key) - удаляет ключ-значение
// map.clear() - очищает
// map.size - длина

// map.keys()
// map.values()
// map.entries()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//map.forEach(function(elem, key, map))


// ТИП ДАННЫХ 'set'
/*

let set = new Set('hello world');

console.log(set);

// set.forEach((elem, elemAgain) => {
//     elem = 'bugaga';
//     console.log(elem);
//     console.log(elemAgain);
// })

console.log(set.keys());
console.log(set.values());
console.log(Object.fromEntries(set.entries()));
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let set = new Set(iterable) - инициализация set
// set.add(value) - добавить value
// set.delete(value) - удалить value
// set.has(value) - есть ли (true или false)
// set.clear() - ощичает
// set.size - длина
// set.forEach(function(elem, elemAgain, set)) 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Task #1
/*
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
*/

// Task #2
/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(arr);
function aclean(arr) {
    let arrCopy = arr.slice();

    for(let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i].length == arr[j].length &&
                arr[i].split('').sort().join('').toLowerCase() == arr[j].split('').sort().join('').toLowerCase()
            ) {
                console.log(arrCopy[i], arrCopy[j]);
                // console.log(arrC)
                arrCopy.splice(j, 1);
            }
        }
    }
    return arrCopy;
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
*/

// Task #2 (right)
/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.split('').sort().join('').toLowerCase();
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
*/

// Task #3
/*
let map = new Map([
    [1, 2],
    [3, 4]
]);

console.log(Array.isArray(Array.from(map.entries())));
*/