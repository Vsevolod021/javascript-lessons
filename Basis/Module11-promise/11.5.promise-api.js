// Promise.all([promise1, promise2, ... , promiseN]) Обрабатывает массив (иитерируемый обект) промисов, 
// возвращает результат в виде массива resolv-ов

Promise.all([
  new Promise(resolve => setTimeout(resolve(1) , 1000)),
  new Promise(resolve => setTimeout(resolve(2) , 2000)),
  new Promise(resolve => setTimeout(resolve(3) , 3000)),
]).then(alert);

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/uses/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  )).catch(err => alert(err));


// Promise.allSettled([promise1, promise2, ... , promiseN])
// вовращает массив объектов  
//    {status: 'fulfilled', value: ...объект ответа...},
//    {status: 'rejected', value: ...объект ответа...},

Promise.allSettled([
  new Promise(resolve => setTimeout(resolve(1) , 1000)),
  new Promise(resolve => {throw new Error('Ошибочка')}),
  new Promise(resolve => setTimeout(resolve(3) , 3000)),
]).then(console.log).catch(err => alert(err));


// Promise.race([promise1, promise2, ... , promiseN])
// возвращаем первый выполненный промис

Promise.any([
  new Promise(resolve => {throw new Error('Ошибочка')}),
  new Promise(resolve => {throw new Error('Ошибочка')}),
  new Promise(resolve => setTimeout(resolve(3) , 3000)),
]).then(console.log).catch(err => alert(err));


// Promise.any([promise1, promise2, ... , promiseN])
// возвращаем первый успешно выполненный промис

