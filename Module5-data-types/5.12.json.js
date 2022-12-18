// let resume = {
//     name: 'John',
//     age: 28,
//     profession: {
//         frontend: '4 years',
//         backend: '1 year',
//         lead: '1 year',
//     },
//     stack: {
//         frontend: ['React', 'Vue', 'Redux', 'MobX'],
//         backend: ['Node.js', 'Next.js', 'Go'],
//         common: ['algorhitms', 'patterns'],
//     },
//     education: 'High',
// };

// let json = JSON.stringify(resume);

// alert(json);
// alert(typeof json); // тип данных string



// JSON.stringify(json) - преобразует объек в строковый тип
/*

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  age: 21,
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

// console.log(meetup);

// alert( JSON.stringify(meetup, ['title', 'age', 'participants', 'name', 'place', 'number'], '    ') ); 
// второй параметр позволяет вернуть в JSON именно те значения, которые будут указаны в массиве

alert(JSON.stringify(meetup, function replacer(k, v) {
  // alert(`${k}: ${v}`);
  return (k == 'occupiedBy') ? undefined : v;
}, ' '))
// функция replace делает то же, что и массив,
// но реализована в виде удобной функции (обрабатывает рекурсивно)
*/

/*
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let conf = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(conf) );
*/




// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// str = JSON.parse(str);

// str.date = new Date(str.date);
// console.log(str);


// task #1
let user = {
  name: 'Василий Иванович',
  age: 35
};

let str = JSON.stringify(user);
// alert(str);
let userCopy = JSON.parse(str);
// alert(userCopy);


// task #2
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value == meetup) ? undefined : value;
}, '    '));