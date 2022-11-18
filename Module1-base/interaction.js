let userName = prompt('Как тебя зовут', '');
let age = prompt('Сколько тебе лет');

alert(`Вот твоя анкета: ${userName}, ${age}`);

let isBoss = confirm('Ты здесь главный');

alert(isBoss ? 'Хей босс' : `${userName}, Добро пожаловать в команду!`);