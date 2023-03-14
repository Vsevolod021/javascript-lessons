function sayHi(phrase, who) {
    alert(`${phrase}, ${who}`);
}

// let timerId = setTimeout(sayHi, 1000, "Здарова", "Жохан");
// setTimeout(sayHi("Здарова", "Жохан"), 1000); setTimeout не сработает, т.к. функция вызовется сразу


// if (!confirm('Поприветствовать Жохана?')) clearTimeout(timerId);
// alert(timerId);

// let timerId = setInterval(() => alert('tick'), 1000);

// setTimeout(() => { clearInterval(timerId); alert('stop!'); }, 10000);

// function tick() {
//     alert('запрос отправлен');
//     setTimeout(tick, 1500);

// }

// tick();

// setInterval(() => alert('tick'), 1000);

// function sayHi() {
    // alert('hello');
// }

// setTimeout(sayHi, 10000);

// sayHi = null;
// alert('Здарова');
// setTimeout(sayHi, 12000);
// setTimeout(null, 1000);

// function printNumbers(from, to) {
//     let counter = from;

//     let timerId = setInterval(() => {
//         alert(counter++);
//         if (counter > to) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// }

function printNumbers(from, to) {
    let counter = from;

    let timerId = setTimeout(function increaseCounter() {
        alert(counter++);
        if (counter <= to) setTimeout(increaseCounter, 1000);
    }, 1000)
}

printNumbers(1, 5);