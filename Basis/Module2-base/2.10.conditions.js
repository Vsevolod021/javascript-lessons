/* let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
} */

let result = a + b < 4 ? 'Мало' : 'Много'; 

/* let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

let login = 'Сотрудник';

let message = (login == 'Сотрудник') ? 'Привет' :
                (login == 'Директор') ? 'Здравствуйте' :
                (login == '') ? 'Нет логина' :
                login;

console.log(message);