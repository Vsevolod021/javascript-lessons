/* let fewStrings = `number
            one`;

alert(fewStrings);


// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";

// многострочная строка, созданная с использованием обратных кавычек
let str2 = `HelloWorld`;
let str3 = 'hello\t' + ' \'' + 'Jude' + '\'';

alert(str1 == str2); // true
alert(str3.length);

alert(str3.at(-1));
alert(str3.at(-2));
alert(str3[str3.length-1]);
for (letter of str3) {
    alert(letter);
};

str3 = str3.toUpperCase();

let eIndex = str3.indexOf('e');

alert(eIndex);

alert('WIDGET'.includes('id'));
alert('WIDGET'.includes('ID'));
alert('widget'.toUpperCase().startsWith('W'));

let str1 = '1234567890';

alert(str1.slice(-1000, -1))
// отрицательные аргументы в порядке возрастания

alert(str1.substring(-5, 2000));
// У substring отрицательные == 0

alert(str1.substr(-100, 100)); 
// второй аргумент - длина

let alphabet = 'abcdefg';

// for (let i=0; i < alphabet.length; i++) {
//     alert(alphabet.codePointAt(i));
// }

for (let i=96; i < 100; i++) {
    alert(String.fromCodePoint(i));
}
*/


function ucFirst(str) {
    if (!str) return str;

    return str.charAt(0).toUpperCase() + str.slice(1);
}

// alert(ucFirst('sdfbsdfb'))

function checkSpam(str) {
    str = str.toLowerCase();

    return str.includes('viagra') || str.includes('xxx');
}

// console.log(checkSpam('vIAGra'));
// console.log(checkSpam('saofvsjfnxxxxxx'));
// console.log(checkSpam('via gra'));

function truncate(str, maxLength) {
    if (!maxLength) return 'impossible quantity of chars';

    return (str.length > maxLength) ? 
        str.slice(0, maxLength - 1) + '...' :
        str;
}

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// console.log(truncate("Всем привет!", 20));
// console.log(truncate('sanvsaiofv', 1));
// console.log(truncate('asfvsafv', 0));



