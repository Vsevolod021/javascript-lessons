// Специфический итератор for of для объекта range
/*
let range = {
    from: 5,
    to: 1
}

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current >= this.last) {
                return {done: false, value: this.current--};
            } else {
                return {done: true};
            }
        }
    };
}


let range = {
    from: 5,
    to: 1,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current >= this.to) {
            return {done: false, value: this.current--};
        } else {
            return {done: true};
        }
    }

}

    
for (let num of range) {
    alert(num);
}
*/

// перебор строк
/*
for (let char of 'hello world') {
    alert(char);
}
*/

// явный вызов
/*
let str = 'hello4';

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // выводит символы один за другим
}
*/
let str = 'hello world';

let arr = Array.from(str);
console.log(arr);

let str1 = '𝒳😂';
alert(Array.from(str1));

// Array.from() в отличие от split поддерживает суррогатные пары (символы, которые зашифрованы в 4 байта, а не в 2)
// т.е. всякие КРАКОЗЯБРЫ,