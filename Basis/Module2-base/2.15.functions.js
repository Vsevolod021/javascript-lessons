const declareVariables = () => {
    var value1 = 'old declaration';
    let value2 = 'new declaration';
    
}

// declareVariables();

// console.log(value1);
// console.log(value2);

let renderValue = 'JSXElement1';

function changeGlobal() {
    renderValue = 'JSXElement2';
}

// alert(renderValue);
// changeGlobal()
// alert(renderValue);


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }



function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// alert(checkAge(18));

// Возвращается код функции
// alert(checkAge);

// let loop = checkAge;

// alert(loop(17));

const ask = function(question, yes, no) {
    confirm(question) ? yes() : no();
};

// ask(
//     'Вы сегодня завтракали',
//     () => {alert('Вы согласны')},
//     () => {alert('Вы несогласны')}
// );


// (function() {
//     alert('Я есть Анонимус\nМЕНЯ НЕ ВЫЗЫВАЛИ\nУХАХАХАХА');
// })()

const sayHi = (a) => a; // возвращает

// не возвращает
const sayHi2 = (a) => {
    a;
}

// console.log(sayHi(4));

/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

const askQuestion = (question, yes, no) => confirm(question) ? yes() : no();

askQuestion(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

let 帕夏_谷歌翻譯歡迎你 = 'Hello world';