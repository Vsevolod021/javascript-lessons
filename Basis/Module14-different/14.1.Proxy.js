// Objects


// const op = new Proxy(person, {
//   get(target, prop) {
//     console.log('Target', target);
//     console.log('Prop', prop);
//     return target[prop];
//   },
//   set(tartget, prop, value) {
//     tartget[prop] = 'Obj: ' + value;
//   },
//   deleteProperty(target, prop) {
//     delete target[prop];

//     console.log(person);
//   } 
// });

// const log = text => `Log: ${text}`;

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log('calling');

//     return target.apply(thisArg, args)
//   }
// });

// console.log(typeof BigInt(8));

function helloDeclaration(one, two) {
  console.log(this);
  console.log(`${one} ${two}`)
}

const helloExpression = function() {
  console.log(this);
}

const helloArrow = () => {
  console.log(this);
}

const person = {
  name: 'Vsevolod',
  age: 23,
  job: 'Fullstack',
  sayHello: helloExpression
}


helloDeclaration.apply(person, [1, 2])
// helloArrow.bind(person);

// person.sayHello = helloArrow;