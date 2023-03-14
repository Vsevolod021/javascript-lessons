
// func.call(contexts, ...args) - вызов коннтекста у функции 
/*
function slow(x) {
    alert(`Called with ${x}`);
    return x;
}

let worker = {
    someMethod() {
        return 2;
    },

    slow(x) {
        alert(`Called with ${x}`);
        return x * this.someMethod();
    }
}*/



// alert(worker.slow(4));
// worker.slow = cachingDecorator(worker.slow);
// alert(worker.slow(4));

// slow = cachingDecorator(slow);

// alert(slow(1));
// alert(slow(1));
// alert(slow(2));
// alert(slow(2));
// alert(slow(3));
// alert(slow(3));


// func.apply()
// let worker = {
//     slow(min, max) {
//         return min + max;
//     }
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();


//     return function() {
//         let key = hash(arguments);
//         if (cache.has(key)) {
//             return cache.get(key)
//         }

//         let result = func.apply(this, arguments);

//         cache.set(key, result);

//         return result;
//     }
// }

// function hash(args) {
//     let key = '';
//     for (let i=0; i<args.length; i++) {
//         key = (i==0) ? args[i] : key + ',' + args[i];
//     }
//     return key;
// }

// worker.slow = cachingDecorator(worker.slow, hash);
// alert( worker.slow(3, 5) ); // работает
// alert( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)


// task #1
/*
function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

function spy(func) {
    function wrapper(...args) {
        let result = func.apply(this, args);
        wrapper.calls.push(args);

        return result;
    }

    wrapper.calls = [];

    return wrapper;
}

// function spy(func) {

//   function wrapper(...args) {
//     // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
*/


// task #2
/*
function f(x) {
  alert(x);
}

function delay(f, ms) {
    return function(text) {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}


// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
*/


// task #3
/*
let f = debounce(alert, 1000);

function debounce(f, ms) {
    let isCoolDown = false;

    return function(message) {
        if (isCoolDown) return;

        f.apply(this, arguments);
        
        isCoolDown = true;

        setTimeout(() => isCoolDown = false, ms);
    }


}

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
*/


// task #4
function f(a) {
    console.log(a)
}

function throttle(f, ms) {

}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
