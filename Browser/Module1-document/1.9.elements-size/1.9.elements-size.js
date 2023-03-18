const example = document.querySelector('.example');
// console.log(document.querySelector('head'));

/*
    offset - размеры самого элемента
*/

console.log('Ниже все с префиксом "offset"');

// ближайший родитель
console.log(example.offsetParent);

// внешние отступы относительно верхнего левого угла родителя
console.log(example.offsetTop);
console.log(example.offsetLeft);

// размеры элемента
console.log(example.offsetHeight);
console.log(example.offsetWidth);

/*
    client - размер контента в элементе
*/

console.log('Ниже все с префиксом "client"');

// размер рамок
console.log(example.clientTop);
console.log(example.clientLeft);

// размеры содержимого вместе с padding (без учета scroll)
console.log(example.clientWidth);
console.log(example.clientHeight);

/*
    scroll - размер контента с учетом скролла
*/

console.log('Ниже все с префиксом "scroll"');

// расстояние до края контента (то, что проскроллено)
console.log(example.scrollTop);
console.log(example.scrollLeft);

// расстояние до края контента (то, что проскроллено)
console.log(example.scrollWidth);
console.log(example.scrollHeight);
