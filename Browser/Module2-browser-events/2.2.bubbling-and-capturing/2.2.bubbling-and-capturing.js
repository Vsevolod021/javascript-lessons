const form = document.querySelector('form');
const div = document.querySelector('div');
const p = document.querySelector('p');

form.addEventListener(
    'click',
    (e) => {
        alert('current =' + e.currentTarget + '\n' + 'target =' + e.target);
    },
    false
);

div.addEventListener(
    'click',
    (e) => {
        alert('current =' + e.currentTarget + '\n' + 'target =' + e.target);
    },
    false
);

p.addEventListener(
    'click',
    (e) => {
        alert('current =' + e.currentTarget + '\n' + 'target =' + e.target);
    },
    false
);
