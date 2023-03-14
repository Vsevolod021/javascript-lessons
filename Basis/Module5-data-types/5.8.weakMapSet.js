/*
let john = { name: "John" };

let map = new Map([
    [john, '...']
]);

john = null;

console.log(map);
console.log(Array.from(map.keys()));
*/

// WeakMap
// ключ должен быть не примитивом!
/*
let weakMap = new WeakMap();
let obj = {name: 'john'};

weakMap.set(obj, 'works');
console.log(weakMap);
weakMap.set('test', 'doesn\'t work');
console.log(weakMap);


let john = { name: "John" };

let weakmap = new WeakMap();

weakmap.set(john, 'kfdnavldsf');
console.log(weakmap);

john = null;

setTimeout(() => console.log(weakmap), 6000); // уже через 6 секунд weakmap не будет хранить в себе о john,
                                              //т.к. их уничтожит сборщик мусора




*/

// ПРИМЕР ИСПОЛЬЗОВАНИЯ WeakMap: УДАЛЕНИЕ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ, ПОСЛЕ ТОГО КАК ОН ПОКИНУЛ СТРАНИЦУ 
/*

// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // map: пользователь => число визитов

// увеличиваем счётчик
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

// 📁 main.js
let john = { name: "John" };


countUser(john); // ведём подсчёт посещений

// пользователь покинул нас
john = null; // соответственно надо и информацию из памяти удалить

*/


// ПРИМЕР ИСПОЛЬЗОВАНИЯ WeakMap: КЭШИРОВАНИЕ
/*
// 📁 cache.js
let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result =  obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Теперь используем process() в другом файле:

// 📁 main.js
let obj = {};

let result1 = process(obj); // вычислен результат

// ...позже, из другого места в коде...
let result2 = process(obj); // ранее вычисленный результат взят из кеша

// ...позже, когда объект больше не нужен:
obj = null;

alert(cache.size); // 0

// у WeakMap и WeakSet нельзя взять перебираемые объекты
*/

// Task #1
let weakset = new WeakSet();

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];


weakset.add(messages[0]);
weakset.add(messages[1]);

console.log(weakset);


messages.shift();
messages.shift();
messages.shift();

setTimeout(() => console.log(weakset), 20000); // через 20 секунд все очистилось
console.log(messages);

// Task #2
let weakmap = new WeakMap();

weakmap.set(messages[0], new Date(2017, 1, 1));

console.log(weakmap);

messages.shift() // очистка

setTimeout(() => console.log(weakmap), 10000); // через 10 секунд все очистилось