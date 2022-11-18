// let a = 4,
//     b = 3,
//     c = 2;

// let result = a || b || c;

// alert(result);

// let defaulName = undefined;

// let userName = prompt('What is your name?');

// let visitor = userName || defaulName || 'noName';
// alert(`Hello, ${visitor}`);

// let value1 = null;
// let value2 = undefined;
// let value3 = 0;

// alert(value1 || value2 || value3);

// let x = 'oldComponent';

// let stopRender  = true;

// stopRender || (x = 'newComponent');

// alert(x);

// alert (alert(null));
// alert(null && 0);

let login = prompt('Кто там?');

if (login === 'Admin') {

    let password = prompt('Пароль?');

    if (password === 'Top person') {
        alert('Здравствуйте!');
    } else if (password || false && password !== undefined) {
        alert('Неверный пароль!');
    } else {
        alert('Отменено');
    }
    
} else if (login || false && login !== undefined) {
    alert('Я вас не знаю');
} else {
    alert('Отменено')
}

let useName = '';

alert(useName ?? 'Vsevolod');
