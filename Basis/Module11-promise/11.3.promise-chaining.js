// function loadScript(src, callback) {
//   return new Promise((res, rej) => {
//     const script = document.createElement('script');
//     script.src = src;

//     script.onload = () => res(script);
//     script.onerror = () => rej(new Error(`Не удалось загрузить скрипт ${src}`));

//     document.head.append(script);    
//   })
// }

// loadScript("/article/promise-chaining/one.js")
//   .then(script => loadScript("/article/promise-chaining/two.js"))
//   .then(script => loadScript("/article/promise-chaining/three.js"))
//   .then(script => {
//     // скрипты загружены, мы можем использовать объявленные в них функции
//     one();
//     two();
//     three();
//   });
  

let p = Promise.resolve();
p.then(()=>{p=p.then(()=>console.log(1))}).then(()=>console.log(2))

// let p = Promise.resolve();
// p = p.then(()=>{p=p.then(()=>console.log(1))}).then(()=>console.log(2))