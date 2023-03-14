const select = document.querySelector('select');
const docElem = document.documentElement;
const head = document.head;
// const meta = document.querySelectorAll('meta');
// const scr = document.querySelector('script');
// const option = document.querySelector('option');

// console.log(select);
// console.log(docElem);
// console.log(head);
// console.log(meta[1]);
// console.log(scr);

// console.log(select.lastChild);
// console.log(option.parentNode);

// const body = document.body;
// console.log(body);
// console.log(body.firstElementChild);
// console.log(body.children[1]);
// console.log(body.children[1].lastElementChild);
// console.log(Array.from(body.children)[1].lastChild);

// К DOM-элементам, представленным в виде массива, а не коллекции, также применимы ссылки навигации

const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
	table.rows[i].cells[i].style.background = 'red';
}
