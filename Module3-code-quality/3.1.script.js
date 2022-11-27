// Код разработан для теста отладки в браузере

let global = 'I am global';

/** Возвращает факториал числа num рекурсивно
*   @param {number} num - число, факториал которого нужно найти
*   @return {number} - факториал числа num
*/
// const countFactorial = (num) => {
//     if (num !== 0 && num !==1) {
//         console.log('hello');

//         debugger;
//         return countFactorial(num - 1) * num;
//     } else {
//         return 1;
//     } 
// };

// alert(countFactorial(12));

describe("pow", function() {

  it("возводит в степень n", function() {
    assert.equal(pow(2, 3), 8);
  });

});