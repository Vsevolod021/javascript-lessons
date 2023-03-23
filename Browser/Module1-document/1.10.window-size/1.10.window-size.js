console.log(document.documentElement.clientHeight);
const button = document.querySelector('.div');
const lorem = document.querySelector('.lorem');

console.log(document.documentElement.clientWidth);

// setTimeout(() => {
//     alert('innerWidth' + window.innerWidth);
//     alert('innerHeight' + window.innerHeight);
//     alert('client' + document.documentElement.clientWidth);
// }, 1000);

// setInterval(() => {
//     alert(Math.round(window.pageYOffset));
// }, 2000);

button.addEventListener('click', () => lorem.scrollIntoView({ behavior: 'smooth', block: 'center' }));
