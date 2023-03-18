let input = document.createElement('input');

input.type = 'range';
input.style.display = 'block';
document.body.prepend(input);

input.after('<p>Hello world</p>', document.createElement('hr'));

// setTimeout(() => input.remove(), 1000);

let first = document.querySelector('.first');
let second = document.querySelector('.second');

// поменять местами
// second.after(first);

let first2 = first.cloneNode(true);

second.prepend(first2);
