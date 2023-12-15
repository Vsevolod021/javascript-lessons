// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject('done'), 1000);
// });

// promise.then(() => alert('response'), () => alert('error'))

// function loadScript(src) {
//   const script = document.createElement('script');
//   script.src = src;

//   new Promise((resolve, reject) => {
//     script.onload = () => resolve();
//     script.onerror = () => reject(); 
//   }).then(() => {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//   }).catch(() => new Error(`Не удалось загрузить скрипт ${src}`));

//   document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajx/libs/lodash.js/3.2.0/lodash.js');

/*
function loadScript(src, callback) {
  return new Promise((res, rej) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => res(script);
    script.onerror = () => rej(new Error(`Не удалось загрузить скрипт ${src}`));

    document.head.append(script);    
  })

}

let promise = loadScript(null);

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));
*/

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));