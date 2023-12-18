// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let gen = generateSequence();

// let fourFiveSix = [4, 5, 6];

// let sequence = [...generateSequence(), ...fourFiveSix];

// console.log(sequence);

// function* generateSequence(start, end) {
//   for(let i = start; i <= end; i++) yield i
// }

// function* generateAlphaNum() {
//   yield* generateSequence(48, 57);

//   // A..Z
//   yield* generateSequence(65, 90);

//   // a..z
//   yield* generateSequence(97, 122);
// }

// let str = '';

// for (let code of generateAlphaNum()) {
//   str += String.fromCharCode(code);
// }

// alert(str);

// function* gen() {
//   // Передаём вопрос во внешний код и ожидаем ответа
//   let result = yield 1; // (*)

//   alert(result);
// }

// let generator = gen();

// let question = generator.next().value;

// generator.next(3); 

// task #1
function* pseudoRandom(seed) {
  let value = seed;

  for(;;) {
    value = value * 16807 % 2147483647;
    yield value;
  }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073