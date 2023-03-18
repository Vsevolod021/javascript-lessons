const div = document.querySelector('.div');
const p = document.querySelector('div + p');

// div.classList.add('hehhe');
// console.log(div.className);
// console.log(div.classList.length);
// console.log(div.style.color);

// div.style.cssText = 'color: black; margin: 100px 20px';

// div.style.marginTop = '10px';

// console.log(div.style.marginTop);

console.log(getComputedStyle(p, '::after').color);
console.log(p);
