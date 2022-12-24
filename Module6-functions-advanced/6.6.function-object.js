function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// // для положительных ответов вызываются оба типа обработчиков
// // для отрицательных - только второго типа
// ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));

function makeCounter() {

    function counter() {
        return ++counter.count;    
    }

    counter.count = 0;

    return counter;
}

// let counter = makeCounter();

// alert(counter());
// alert(counter());
// alert(counter());
// console.log(counter.count);

// makeCounter.count = 0;
// makeCounter.count+=200;
// alert(makeCounter.count)


// let foo = function fun() {
//     alert('Hello world');
//     fun();
// };

// alert(foo.name);
// alert(fun());

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // использует func, чтобы снова вызвать себя же
  }
};

// sayHi(); // Hello, Guest

// А вот так - не cработает:
// func(); // Ошибка, func не определена (недоступна вне функции)

let fact = function(n) {
    if (n == 1) return 1;
    else return n * fact(n -1);
};

// alert(fact(3));

let sayHey = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHey("Guest"); // Ошибка: sayHi не является функцией
  }
};

sayHey();

let welcome = sayHey;
sayHey = null;

welcome(); // Ошибка, вложенный вызов sayHi больше не работает!

